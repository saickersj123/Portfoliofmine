# EmailJS Setup Guide

This guide will help you set up EmailJS to make the contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_xxxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update Configuration

1. Open `src/lib/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // Replace with your actual service ID
  TEMPLATE_ID: 'your_template_id_here', // Replace with your actual template ID
  PUBLIC_KEY: 'your_public_key_here', // Replace with your actual public key
}
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email to confirm the message was received

## Security Notes

- The public key is safe to expose in client-side code
- Never share your private keys or service credentials
- EmailJS has rate limits on free accounts (200 emails/month)

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Emails not received**: Verify your email service is properly connected
- **Template errors**: Ensure template variables match the code (`{{from_name}}`, `{{from_email}}`, etc.)

## Alternative Setup (Environment Variables)

For better security, you can use environment variables:

1. Create a `.env` file in the frontend directory:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `src/lib/emailjs.ts`:
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
```

3. Add `.env` to your `.gitignore` file to keep credentials secure 