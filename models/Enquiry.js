// Mongoose model for contact enquiries
import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
name: {
  type: String,
  required: [true, 'Name is required'],
  trim: true,
  maxlength: [100, 'Name cannot exceed 100 characters'],
  match: [/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'] 
},

  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [
      /^[\+]?[1-9][\d]{0,15}$/,
      'Please enter a valid phone number'
    ]
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved'],
    default: 'new'
  }
});

// Create indexes for better query performance
EnquirySchema.index({ email: 1 });
EnquirySchema.index({ createdAt: -1 });

// Export the model, avoiding re-compilation during development
export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);