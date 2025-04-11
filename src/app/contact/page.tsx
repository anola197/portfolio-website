// src/app/contact/page.tsx
'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Form field type
type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

export default function ContactPage() {
  // Form state
  const [formState, setFormState] = useState({
    name: { value: '', error: '', touched: false } as FormField,
    email: { value: '', error: '', touched: false } as FormField,
    subject: { value: '', error: '', touched: false } as FormField,
    message: { value: '', error: '', touched: false } as FormField,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle input changes
  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState({
      ...formState,
      [field]: {
        ...formState[field],
        value,
        touched: true,
        error: validateField(field, value),
      }
    });
  };

  // Validate a single field
  const validateField = (field: keyof typeof formState, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        return value.trim() === '' 
          ? 'Email is required' 
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) 
            ? 'Invalid email address' 
            : '';
      case 'subject':
        return value.trim() === '' ? 'Subject is required' : '';
      case 'message':
        return value.trim() === '' ? 'Message is required' : '';
      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = () => {
    let isValid = true;
    const newFormState = { ...formState };
    
    // Validate each field
    (Object.keys(formState) as Array<keyof typeof formState>).forEach((field) => {
      const errorMessage = validateField(field, formState[field].value);
      newFormState[field] = {
        ...newFormState[field],
        error: errorMessage,
        touched: true,
      };
      
      if (errorMessage) {
        isValid = false;
      }
    });
    
    setFormState(newFormState);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate form submission with a delay
      // In a real application, you would replace this with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Fake successful submission
      setSubmitSuccess(true);
      
      // Reset form
      setFormState({
        name: { value: '', error: '', touched: false },
        email: { value: '', error: '', touched: false },
        subject: { value: '', error: '', touched: false },
        message: { value: '', error: '', touched: false },
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-6">
            Have a question or want to work together? Feel free to reach out using the form below 
            or through any of my contact information.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Mail className="text-blue-600 dark:text-blue-300" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      aaayushi971@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Phone className="text-blue-600 dark:text-blue-300" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <a href="tel:+11234567890" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +1 (602) 662-9946
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <MapPin className="text-blue-600 dark:text-blue-300" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tempe, AZ
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="text-gray-800 dark:text-gray-200" size={20} />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-gray-800 dark:text-gray-200" size={20} />
                  </a>
                  
                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="text-gray-800 dark:text-gray-200" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                {submitSuccess && (
                  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
                    Your message has been sent successfully! I'll get back to you as soon as possible.
                  </div>
                )}
                
                {submitError && (
                  <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
                    {submitError}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                          ${formState.name.touched && formState.name.error ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                        placeholder="Your name"
                        value={formState.name.value}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                      {formState.name.touched && formState.name.error && (
                        <p className="mt-1 text-sm text-red-500">{formState.name.error}</p>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                          ${formState.email.touched && formState.email.error ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                        placeholder="Your email"
                        value={formState.email.value}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                      {formState.email.touched && formState.email.error && (
                        <p className="mt-1 text-sm text-red-500">{formState.email.error}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                        ${formState.subject.touched && formState.subject.error ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                      placeholder="Subject of your message"
                      value={formState.subject.value}
                      onChange={(e) => handleChange('subject', e.target.value)}
                    />
                    {formState.subject.touched && formState.subject.error && (
                      <p className="mt-1 text-sm text-red-500">{formState.subject.error}</p>
                    )}
                  </div>
                  
                  {/* Message Field */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                        ${formState.message.touched && formState.message.error ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                      placeholder="Your message"
                      value={formState.message.value}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                    {formState.message.touched && formState.message.error && (
                      <p className="mt-1 text-sm text-red-500">{formState.message.error}</p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={16} />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}