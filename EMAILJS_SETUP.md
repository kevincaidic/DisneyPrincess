# EmailJS Setup Guide

This guide will help you set up EmailJS for your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service
4. Follow the prompts to connect your email account
5. **Copy your Service ID** (e.g., `service_abc1234`)

## Step 3: Create Email Template

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Set up your template with these variables:

### Template Subject:
```
New Project Inquiry from {{from_name}}
```

### Template Content:
```
You have received a new project inquiry from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Budget Range: {{budget}}

Project Brief:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. **Copy your Template ID** (e.g., `template_xyz5678`)
5. Click **"Save"**

## Step 4: Get Your Public Key

1. Click on your account name in the top-right corner
2. Go to **"Account"** > **"General"**
3. Scroll down to find your **Public Key** (e.g., `abcdef123456`)
4. **Copy your Public Key**

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (same level as `package.json`)
2. Copy the contents from `.env.example`
3. Replace the EmailJS values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID="service_abc1234"     # Your Service ID from Step 2
VITE_EMAILJS_TEMPLATE_ID="template_xyz5678"   # Your Template ID from Step 3
VITE_EMAILJS_PUBLIC_KEY="abcdef123456"        # Your Public Key from Step 4
```

4. **Save the file**

## Step 6: Test the Contact Form

1. Stop your dev server if it's running (Ctrl+C)
2. Restart the dev server: `npm run dev`
3. Go to your portfolio website
4. Scroll to the contact form ("Let's Build Something Unforgettable")
5. Fill out the form and click **"Dispatch Briefing Request"**
6. Check your email - you should receive the test message!

## Troubleshooting

### Error: "EmailJS is not configured"
- Make sure your `.env` file exists and has the correct variable names with `VITE_` prefix
- Restart your dev server after creating/updating `.env`

### Error: "Failed to send message"
- Check that your Service ID, Template ID, and Public Key are correct
- Make sure your email service is properly connected in EmailJS dashboard
- Check the browser console for detailed error messages

### Emails not arriving
- Check your spam folder
- Verify your email service is active in the EmailJS dashboard
- Make sure the template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{budget}}`, `{{message}}`

## Free Tier Limits

EmailJS free tier includes:
- **200 emails per month**
- **2 email services**
- **3 email templates**

Perfect for portfolio websites! 🎉

## Security Notes

- **Never commit your `.env` file to Git** - it's already in `.gitignore`
- The `.env.example` file should be committed (it only has placeholders)
- Your Public Key is safe to use in client-side code (it's designed for that)
- Your Private Key should NEVER be used in client-side code

---

Need help? Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
