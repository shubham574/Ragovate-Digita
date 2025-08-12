// API route for handling contact form submissions
import dbConnect from '../../lib/mongodb';
import Enquiry from '../../models/Enquiry';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed. Only POST requests are accepted.' 
    });
  }

  try {
    // Connect to database
    await dbConnect();

    // Extract data from request body
    const { name, email, phone, message } = req.body;

    // Backend validation
    const errors = {};

    // Validate name
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Name is required and must be at least 2 characters long';
    }

    // Validate email
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address';
    }

    // Validate phone
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone || typeof phone !== 'string' || !phoneRegex.test(phone.replace(/\s+/g, ''))) {
      errors.phone = 'Please provide a valid phone number';
    }

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Message is required and must be at least 10 characters long';
    }

    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Check for duplicate submissions (same email within last 5 minutes)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const recentSubmission = await Enquiry.findOne({
      email: email.trim().toLowerCase(),
      createdAt: { $gte: fiveMinutesAgo }
    });

    if (recentSubmission) {
      return res.status(429).json({
        success: false,
        message: 'Please wait at least 5 minutes before submitting another enquiry.'
      });
    }

    // Create new enquiry
    const enquiry = new Enquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim()
    });

    // Save to database
    const savedEnquiry = await enquiry.save();

    // Log successful submission (in production, you might want to send notifications)
    console.log('New enquiry received:', {
      id: savedEnquiry._id,
      name: savedEnquiry.name,
      email: savedEnquiry.email,
      timestamp: savedEnquiry.createdAt
    });

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Thank you for your enquiry! We will get back to you within 24 hours.',
      data: {
        id: savedEnquiry._id,
        timestamp: savedEnquiry.createdAt
      }
    });

  } catch (error) {
    console.error('Error processing enquiry:', error);

    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      const validationErrors = {};
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      
      return res.status(400).json({
        success: false,
        message: 'Invalid data provided',
        errors: validationErrors
      });
    }

    // Handle duplicate key errors (if you have unique indexes)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'A submission with this information already exists.'
      });
    }

    // Handle database connection errors
    if (error.name === 'MongooseError') {
      return res.status(503).json({
        success: false,
        message: 'Database temporarily unavailable. Please try again later.'
      });
    }

    // Generic error response
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
}

// Optional: Add CORS headers if needed
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}