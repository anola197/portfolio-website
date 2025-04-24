// src/app/contact/page.tsx
'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Form field type
type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: { value: '', error: '', touched: false } as FormField,
    email: { value: '', error: '', touched: false } as FormField,
    subject: { value: '', error: '', touched: false } as FormField,
    message: { value: '', error: '', touched: false } as FormField,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  const validateForm = () => {
    let isValid = true;
    const newFormState = { ...formState };
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormState({
        name: { value: '', error: '', touched: false },
        email: { value: '', error: '', touched: false },
        subject: { value: '', error: '', touched: false },
        message: { value: '', error: '', touched: false },
      });
      // setTimeout(() => setSubmitSuccess(false), 5000);
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name.value,
          email: formState.email.value,
          subject: formState.subject.value,
          message: formState.message.value,
        }),
      });
    } catch {
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
            Have a question or want to work together? Feel free to reach out using the form below.
          </p>
        </div>
      </section>

      {/* Contact Form Section Only */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                {submitSuccess && (
                  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
                    Your message has been sent successfully! I&apos;ll get back to you as soon as possible.
                  </div>
                )}
                
                {submitError && (
                  <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
