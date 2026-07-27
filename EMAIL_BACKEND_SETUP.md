# Custom Email Backend Implementation - Complete Guide

## Overview

This document provides a comprehensive walkthrough of the custom email backend system built for Timely Dental Organisation. The system uses **Nodemailer** with your own Gmail/Outlook account to handle appointment requests, eliminating the need for third-party email services like Resend.

---

## Table of Contents

1. [What Was Built](#what-was-built)
2. [Architecture & Design](#architecture--design)
3. [Project Structure](#project-structure)
4. [Implementation Steps Completed](#implementation-steps-completed)
5. [Setup Instructions](#setup-instructions)
6. [Configuration Guide](#configuration-guide)
7. [How It Works](#how-it-works)
8. [Email Queue & Retry Logic](#email-queue--retry-logic)
9. [Testing & Deployment](#testing--deployment)
10. [Monitoring & Logs](#monitoring--logs)
11. [Troubleshooting](#troubleshooting)
12. [Future Enhancements](#future-enhancements)

---

## What Was Built

### ✅ Core Components

| Component | Purpose | File Location |
|-----------|---------|---------------|
| **Email Service** | Handles sending emails via Nodemailer | `backend/email/service.ts` |
| **Email Templates** | Professional HTML email templates | `backend/email/templates.ts` |
| **SMTP Configuration** | Manages SMTP credentials and connection | `backend/email/config.ts` |
| **Email Queue** | Queues jobs and manages retries | `backend/email/queue.ts` |
| **Email Logger** | Logs all email delivery attempts | `backend/email/logger.ts` |
| **Validation Schema** | Validates form data with Zod | `backend/validation/contactSchema.ts` |
| **Type Definitions** | TypeScript interfaces | `backend/types/contact.ts` |
| **Error Handling** | Custom error utilities | `backend/utils/errors.ts` |
| **API Endpoint** | Next.js route handler | `app/api/contact/route.ts` |
| **Contact Form UI** | React component (unchanged) | `app/Contact/page.tsx` |

### ✅ Key Features

- ✅ **No Third-Party Service**: Uses your own Gmail/Outlook account
- ✅ **Automated Organisation Emails**: Organisation receives notification of new requests
- ✅ **visitor Autoreply**: visitor gets confirmation email automatically
- ✅ **Email Queue System**: Manages sending with retry logic (up to 3 attempts)
- ✅ **Comprehensive Logging**: All email activity logged to file
- ✅ **Error Handling**: Graceful error recovery and user feedback
- ✅ **Type-Safe**: Full TypeScript support
- ✅ **Server-Side Validation**: Zod schema validates all inputs
- ✅ **Professional Templates**: Beautifully designed HTML emails

---

## Architecture & Design

### System Flow Diagram

```
┌────────────────────────────────────────────────┐
│       User Submits Contact Form                 │
│    (app/Contact/page.tsx)                       │
└──────────────────┬─────────────────────────────┘
                   │ POST /api/contact (JSON)
                   ↓
┌────────────────────────────────────────────────┐
│    API Route Handler                            │
│    (app/api/contact/route.ts)                   │
│    - Parse request                              │
│    - Validate with Zod schema                   │
│    - Call backend service                       │
└──────────────────┬─────────────────────────────┘
                   │ Call sendContactEmails()
                   ↓
┌────────────────────────────────────────────────┐
│    Backend Email Service                        │
│    (backend/email/service.ts)                   │
│    - Queue emails                               │
│    - Generate templates                         │
│    - Send via Nodemailer                        │
└──────────────────┬─────────────────────────────┘
                   │
        ┌──────────┴──────────┐
        ↓                     ↓
    Queue 1              Queue 2
    Organisation Email         visitor Email
    (if submitted)       (if email provided)
        │                     │
        ↓                     ↓
┌───────────────┐     ┌───────────────┐
│  Nodemailer   │     │  Nodemailer   │
│  via SMTP     │     │  via SMTP     │
└───────────────┘     └───────────────┘
        │                     │
        ↓                     ↓
┌───────────────┐     ┌───────────────┐
│  Your Email   │     │  visitor's    │
│  Account SMTP │     │  Email Inbox  │
└───────────────┘     └───────────────┘
        │                     │
        ↓                     ↓
    ✅ Organisation receives      ✅ visitor receives
       appointment request      confirmation
```

### Data Flow

```
Form Data (name, phone, email, etc.)
    ↓
Validation Layer (Zod Schema)
    ↓ (if valid)
Backend Service
    ├─ Generate 2 email templates
    ├─ Create queue jobs
    ├─ Send via Nodemailer/SMTP
    ├─ Log delivery status
    └─ Handle retries (up to 3 attempts)
    ↓
API Response (success/error)
    ↓
Frontend UI (show confirmation/error)
```

### Retry Logic

```
Send Email Attempt 1 (immediate)
    ↓
    ├─ Success → Record delivery + Log
    │
    └─ Failure → Record attempt
         ↓
         Wait 5 seconds
         ↓
    Send Email Attempt 2
         ↓
         ├─ Success → Record delivery + Log
         │
         └─ Failure → Record attempt
              ↓
              Wait 5 seconds
              ↓
         Send Email Attempt 3 (Final)
              ↓
              ├─ Success → Record delivery + Log
              │
              └─ Failure → Mark as failed permanently
```

---

## Project Structure

### Complete Backend Folder Layout

```
c:\timely-smiles\
│
├── backend/                                  # NEW: Backend business logic
│   ├── types/
│   │   └── contact.ts                       # TypeScript interfaces (47 lines)
│   │       ├── ContactFormData
│   │       ├── EmailJob
│   │       ├── EmailResult
│   │       ├── EmailConfig
│   │       └── MailOptions
│   │
│   ├── validation/
│   │   └── contactSchema.ts                 # Zod validation (34 lines)
│   │       └── contactFormSchema
│   │
│   ├── email/
│   │   ├── config.ts                        # SMTP configuration (54 lines)
│   │   │   ├── getEmailConfig()
│   │   │   ├── emailProviders
│   │   │   └── validateSmtpConfig()
│   │   │
│   │   ├── templates.ts                     # Email templates (380+ lines)
│   │   │   ├── generateOrganisationEmailTemplate()
│   │   │   ├── generateVisitorAutoreplyTemplate()
│   │   │   └── escapeHtml() utility
│   │   │
│   │   ├── service.ts                       # Email sending (210+ lines)
│   │   │   ├── initializeTransporter()
│   │   │   ├── sendEmailViaNodemailer()
│   │   │   ├── sendContactEmails()
│   │   │   ├── sendQueuedEmails()
│   │   │   ├── testSmtpConnection()
│   │   │   └── startCleanupInterval()
│   │   │
│   │   ├── queue.ts                         # Email queue system (160+ lines)
│   │   │   ├── queueEmailJob()
│   │   │   ├── updateJobStatus()
│   │   │   ├── incrementAttempt()
│   │   │   ├── recordSuccess()
│   │   │   ├── recordFailure()
│   │   │   ├── getPendingJobs()
│   │   │   ├── getQueueStats()
│   │   │   └── clearOldJobs()
│   │   │
│   │   └── logger.ts                        # Email logging (115+ lines)
│   │       ├── logEmailJob()
│   │       ├── logEmailAttempt()
│   │       ├── logEmailSuccess()
│   │       ├── logEmailFailure()
│   │       ├── getEmailStats()
│   │       └── clearEmailLogs()
│   │
│   └── utils/
│       └── errors.ts                        # Error handling (60+ lines)
│           ├── EmailError
│           ├── ValidationError
│           ├── ConfigError
│           └── handleError()
│
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts                     # UPDATED: API endpoint (50+ lines)
│   │           └── POST handler
│   │
│   └── Contact/
│       └── page.tsx                         # UPDATED: Form component
│           └── Uses new API
│
├── .env.local                               # NEW: Environment variables (create manually)
│   ├── SMTP_HOST
│   ├── SMTP_PORT
│   ├── SMTP_USER
│   ├── SMTP_PASS
│   ├── EMAIL_FROM
│   └── Organisation_EMAIL
│
├── .env.example                             # NEW: Template for .env.local
│
├── .email-logs/                             # NEW: Auto-created logging directory
│   └── email-delivery.log                   # All email activity logged here
│
├── package.json                             # UPDATED: Dependencies
│   ├── nodemailer (new)
│   ├── @types/nodemailer (new)
│   ├── zod (kept from before)
│   └── ... other dependencies
│
└── EMAIL_BACKEND_SETUP.md                   # NEW: This file
```

### Total Code Added

| Section | Lines | Purpose |
|---------|-------|---------|
| Backend Core | ~1,000 | Email service, queue, templates, config |
| Validation & Types | ~80 | Zod schema, TypeScript interfaces |
| Error Handling | ~60 | Custom error classes |
| API Route | ~50 | Updated endpoint |
| **Total** | **~1,200** | Production-ready backend |

---

## Implementation Steps Completed

### Phase 1: Dependencies (✅ Completed)

**Step 1.1**: Uninstalled Resend
```bash
npm uninstall resend
```
**Result**: Removed third-party dependency

**Step 1.2**: Installed Nodemailer
```bash
npm install nodemailer
npm install -D @types/nodemailer
```
**Result**: Added email library and TypeScript types

### Phase 2: Backend Structure (✅ Completed)

**Step 2.1**: Created directory structure
```bash
mkdir backend
mkdir backend/types
mkdir backend/validation
mkdir backend/email
mkdir backend/utils
```
**Result**: Organized backend into logical folders

### Phase 3: Backend Files (✅ Completed)

**Step 3.1**: Created type definitions (`backend/types/contact.ts`)
- `ContactFormData` interface
- `EmailJob` interface
- `EmailResult` interface
- `EmailConfig` interface
- `MailOptions` interface

**Step 3.2**: Created validation schema (`backend/validation/contactSchema.ts`)
- Zod schema with validation rules
- Name: 2-100 characters
- Phone: 10-15 digits
- Email: valid format (optional)
- Service: required
- PreferredTime: required
- Message: 10-2000 characters

**Step 3.3**: Created error utilities (`backend/utils/errors.ts`)
- `EmailError` class
- `ValidationError` class
- `ConfigError` class
- `handleError()` function

**Step 3.4**: Created SMTP config (`backend/email/config.ts`)
- `getEmailConfig()` function
- Email provider presets (Gmail, Outlook)
- Connection validation
- Environment variable parsing

**Step 3.5**: Created email templates (`backend/email/templates.ts`)
- `generateOrganisationEmailTemplate()` - Professional Organisation notification
- `generateVisitorAutoreplyTemplate()` - Welcome/confirmation email
- HTML/CSS inline styling
- Responsive design

**Step 3.6**: Created email logger (`backend/email/logger.ts`)
- `logEmailJob()` - Log new jobs
- `logEmailAttempt()` - Log send attempts
- `logEmailSuccess()` - Log successful sends
- `logEmailFailure()` - Log failures
- `getEmailStats()` - Get statistics
- File-based logging to `.email-logs/email-delivery.log`

**Step 3.7**: Created email queue (`backend/email/queue.ts`)
- `queueEmailJob()` - Add job to queue
- `getPendingJobs()` - Get jobs awaiting sending
- Retry logic (max 3 attempts, 5-second delays)
- Job status tracking
- `recordSuccess()` / `recordFailure()` functions
- Statistics and cleanup

**Step 3.8**: Created email service (`backend/email/service.ts`)
- `initializeTransporter()` - Setup Nodemailer
- `sendEmailViaNodemailer()` - Send via SMTP
- `sendContactEmails()` - Main entry point
- `sendQueuedEmails()` - Process queue
- `testSmtpConnection()` - Connection verification
- `startCleanupInterval()` - Auto-cleanup jobs

### Phase 4: Frontend Integration (✅ Completed)

**Step 4.1**: Updated API route (`app/api/contact/route.ts`)
- Changed imports from Resend to custom backend
- Updated error handling with custom utilities
- Calls `sendContactEmails()` instead of `sendContactEmail()`
- Returns jobIds instead of single emailId

**Step 4.2**: Verified Contact form (`app/Contact/page.tsx`)
- Form already uses `/api/contact` endpoint
- No changes needed
- Works seamlessly with new backend

### Phase 5: Environment Setup (✅ Completed)

**Step 5.1**: Created environment template (`.env.example`)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=Organisation@gmail.com
Organisation_EMAIL=info@timelydental.co.ke
```

---

## Setup Instructions

### Step 1: Choose Your Email Provider

You need an email account to send from. Choose one:

#### Option A: Gmail (Recommended - Easiest)
- Pros: Free, reliable, high deliverability
- Cons: Need to create app-specific password
- Setup time: 5 minutes

#### Option B: Outlook
- Pros: Enterprise email, reliable
- Cons: Similar app password requirement
- Setup time: 5 minutes

#### Option C: Custom Hosted Email
- Pros: Full control, professional domain
- Cons: Need SMTP access from your host
- Setup time: 10 minutes

### Step 2: Get SMTP Credentials

#### For Gmail:

1. Go to [https://myaccount.google.com/](https://myaccount.google.com/)
2. Click "Security" in left sidebar
3. Enable "2-Step Verification" if not already enabled
   - Go to "2-Step Verification"
   - Follow setup wizard
4. Go to "App passwords"
   - Select "Mail" and "Windows Computer"
   - Google generates a 16-character password
   - Copy this password (you'll need it)

**Values to use:**
- `SMTP_HOST`: `smtp.gmail.com`
- `SMTP_PORT`: `587`
- `SMTP_USER`: Your Gmail email address
- `SMTP_PASS`: Your generated app-specific password
- `EMAIL_FROM`: Your Gmail email address

#### For Outlook:

1. Go to [https://account.microsoft.com/](https://account.microsoft.com/)
2. Go to "Security" tab
3. Enable app passwords if available (requires 2FA)
4. Generate app password
5. Copy the password

**Values to use:**
- `SMTP_HOST`: `smtp-mail.outlook.com`
- `SMTP_PORT`: `587`
- `SMTP_USER`: Your Outlook email address
- `SMTP_PASS`: Your app-specific password
- `EMAIL_FROM`: Your Outlook email address

### Step 3: Create `.env.local` File

1. In project root (`c:\timely-smiles\`), create file `.env.local`
2. Add the following (replace with your values):

```env
# Gmail Example:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=Organisation@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
EMAIL_FROM=Organisation@gmail.com
Organisation_EMAIL=info@timelydental.co.ke

# OR for Outlook:
# SMTP_HOST=smtp-mail.outlook.com
# SMTP_PORT=587
# SMTP_USER=Organisation@outlook.com
# SMTP_PASS=your-app-password
# EMAIL_FROM=Organisation@outlook.com
# Organisation_EMAIL=info@timelydental.co.ke
```

**Important Notes:**
- `.env.local` is automatically in `.gitignore` - your secrets won't be committed
- Don't commit this file to version control
- Never share these credentials
- Use app-specific password, not your regular password

### Step 4: Verify Configuration

Test the SMTP connection locally:

```bash
# Start dev server
npm run dev

# Open browser console and check for errors
# Check terminal output for email service initialization
```

### Step 5: Test Email Sending

1. Go to `http://localhost:3000/contact`
2. Fill out the contact form completely
3. Submit the form
4. You should see success message
5. Check your Organisation email for the notification
6. If you provided an email, check that inbox for autoreply

---

## Configuration Guide

### Environment Variables

#### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server address | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` or `465` |
| `SMTP_USER` | Email account username | `Organisation@gmail.com` |
| `SMTP_PASS` | Email account password or app password | `xxxx xxxx xxxx xxxx` |
| `EMAIL_FROM` | Sender email address | `Organisation@gmail.com` |
| `Organisation_EMAIL` | Where to send appointments | `info@timelydental.co.ke` |

#### Optional Variables

```env
# For advanced configuration (usually not needed):
# SMTP_SECURE=true          # Use SSL/TLS (port 465 usually needs this)
# RETRY_DELAY=5000          # Time between retries in ms
# MAX_ATTEMPTS=3            # Max email send attempts
```

### Email Provider Presets

Built-in presets are available in `backend/email/config.ts`:

```typescript
emailProviders = {
  gmail: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
  },
  outlook: {
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
  },
  gmailSecure: {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  },
}
```

---

## How It Works

### Complete Request Lifecycle

#### 1. User Submits Form
```
User fills contact form:
- Name: "John Doe"
- Phone: "+254708863251"
- Email: "john@example.com" (optional)
- Service: "Dental checkup"
- Preferred Time: "Morning (9 AM - 12 PM)"
- Message: "I have a toothache for 2 days"

User clicks "Send Appointment Request"
```

#### 2. Frontend Validation & Submission
```javascript
// app/Contact/page.tsx - handleSubmit()
POST /api/contact
Body: {
  name: "John Doe",
  phone: "+254708863251",
  email: "john@example.com",
  service: "Dental checkup",
  preferredTime: "Morning (9 AM - 12 PM)",
  message: "I have a toothache for 2 days"
}
```

#### 3. API Route Receives Request
```typescript
// app/api/contact/route.ts - POST handler
1. Parse JSON body
2. Validate with Zod schema
   - Check all required fields
   - Validate email format
   - Check message length
   - etc.
3. If validation fails → Return 400 error
4. If validation passes → Call sendContactEmails()
```

#### 4. Backend Service Processes Request
```typescript
// backend/email/service.ts - sendContactEmails()
1. Create 2 email jobs:
   Job 1: Organisation notification to info@timelydental.co.ke
   Job 2: visitor autoreply to john@example.com
2. Queue both jobs (status: "pending")
3. Log jobs to file
4. Start async sending (don't wait)
5. Return success response
```

#### 5. Email Queue Processes Jobs
```typescript
// backend/email/queue.ts - sendQueuedEmails()
For each pending job:
1. Set status: "sending"
2. Increment attempt counter
3. Generate email template
   (Organisation template or visitor template)
4. Send via Nodemailer
```

#### 6. Nodemailer Sends Email
```typescript
// backend/email/service.ts - sendEmailViaNodemailer()
1. Get SMTP config from environment
2. Initialize transporter (once per session)
3. Build mail options:
   - from: Email sender
   - to: Email recipient
   - subject: Email subject
   - html: Email body
4. Call transporter.sendMail()
5. Receive message ID
```

#### 7. SMTP Server Sends
```
Nodemailer connects to Gmail SMTP server:
- Host: smtp.gmail.com
- Port: 587
- Auth: username + app-specific password
- TLS connection established
- Email sent through Gmail infrastructure
```

#### 8. Email Delivered
```
✅ Organisation receives appointment notification at info@timelydental.co.ke
✅ visitor receives autoreply at john@example.com

Both emails contain:
- visitor information
- Appointment details
- Next steps
- Contact information
```

#### 9. Success Logged
```typescript
// backend/email/logger.ts
Log to .email-logs/email-delivery.log:
{
  timestamp: "2024-07-07T14:30:00.123Z",
  event: "email_sent",
  jobId: "email-1720346400123-abc123",
  recipient: "john@example.com",
  messageId: "sent-message-id-from-gmail"
}
```

#### 10. Frontend Receives Response
```json
{
  "success": true,
  "message": "Your appointment request has been submitted successfully. We will contact you within 24 hours.",
  "jobIds": [
    "email-1720346400123-abc1",
    "email-1720346400124-def2"
  ]
}
```

#### 11. UI Shows Confirmation
```
✓ Request received!
(with checkmark animation)

Form auto-resets after 3 seconds
```

---

## Email Queue & Retry Logic

### Queue System Overview

The email queue ensures reliable delivery with automatic retries:

```
Job Created (pending)
    ↓
Enter Queue
    ↓
Ready to Send
    ↓
Attempt 1: Send Email
    ├─ Success → Log + Mark "sent" + Done ✅
    └─ Failure → Record error
        ↓
        Wait 5 seconds
        ↓
    Attempt 2: Send Email
        ├─ Success → Log + Mark "sent" + Done ✅
        └─ Failure → Record error
            ↓
            Wait 5 seconds
            ↓
        Attempt 3: Send Email (Final)
            ├─ Success → Log + Mark "sent" + Done ✅
            └─ Failure → Mark "failed" permanently ❌
```

### Retry Configuration

**Current Settings:**
- Max attempts: 3
- Retry delay: 5 seconds
- Location: `backend/email/queue.ts`

**Modify Retry Logic:**

To change max attempts:
```typescript
// backend/email/queue.ts - Line 5
const MAX_ATTEMPTS = 3;  // Change this value
```

To change retry delay:
```typescript
// backend/email/queue.ts - Line 6
const RETRY_DELAY = 5000;  // Change to milliseconds (e.g., 10000 = 10 seconds)
```

### Queue Monitoring

Get queue statistics:

```typescript
// backend/email/queue.ts
import { getQueueStats } from "@/backend/email/queue";

const stats = getQueueStats();
console.log(stats);
// Output:
// {
//   total: 10,        // Total jobs
//   pending: 2,       // Awaiting sending
//   sending: 1,       // Currently sending
//   sent: 6,          // Successfully sent
//   failed: 1         // Failed permanently
// }
```

### Automatic Cleanup

Old jobs are automatically cleaned up:

```typescript
// Run in background every hour
startCleanupInterval();

// Removes jobs:
// - Older than 24 hours
// - With status "sent" or "failed"
// - Keeps memory usage low
```

---

## Testing & Deployment

### Local Testing

#### Test 1: Verify Configuration
```bash
# Check .env.local exists
ls -la .env.local

# Check values are set
cat .env.local
```

#### Test 2: Start Dev Server
```bash
npm run dev
# Server should start without errors
```

#### Test 3: Test SMTP Connection
```bash
# In your browser console or a test script:
import { testSmtpConnection } from "@/backend/email/service";
const connected = await testSmtpConnection();
console.log(connected); // Should be true
```

#### Test 4: Send Test Email
```bash
# Send test email to yourself
import { sendTestEmail } from "@/backend/email/service";
await sendTestEmail("your-email@gmail.com");
# Check your inbox - you should receive test email
```

#### Test 5: Submit Contact Form
```
1. Go to http://localhost:3000/contact
2. Fill all fields:
   - Name: Test User
   - Phone: 0708863251
   - Email: your-email@gmail.com
   - Service: Dental checkup
   - Time: Morning
   - Message: This is a test message
3. Click "Send Appointment Request"
4. Should see success ✓
5. Check both inboxes:
   - Organisation email: Check info@timelydental.co.ke inbox
   - Your email: Check your-email@gmail.com inbox
```

#### Test 6: Monitor Logs
```bash
# Check email logs
cat .email-logs/email-delivery.log

# Should show entries like:
# {"timestamp":"...","event":"email_sent",...}
```

### Testing Checklist

- [ ] `.env.local` file created with correct values
- [ ] Dev server starts without errors
- [ ] SMTP connection test passes
- [ ] Test email sent and received
- [ ] Contact form submission succeeds
- [ ] Organisation email received
- [ ] visitor autoreply received (if email provided)
- [ ] Email logs created and populated
- [ ] No console errors in browser
- [ ] No console errors in terminal

### Deployment to Vercel

#### Step 1: Add Environment Variables on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Open "timely-smiles" project
3. Go to Settings → Environment Variables
4. Add new variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-Organisation-email@gmail.com
SMTP_PASS=your-app-specific-password
EMAIL_FROM=your-Organisation-email@gmail.com
Organisation_EMAIL=info@timelydental.co.ke
```

5. Click "Save"

#### Step 2: Deploy Code

```bash
# Commit changes
git add .
git commit -m "Add custom email backend with Nodemailer"

# Push to main branch (Vercel auto-deploys)
git push origin main

# Wait for deployment to complete
# Check https://vercel.com dashboard
```

#### Step 3: Verify Production Deployment

1. Go to https://timely-smiles.vercel.app/contact
2. Submit test form
3. Check both email inboxes
4. Monitor for errors

---

## Monitoring & Logs

### Email Logs Location

```
.email-logs/
└── email-delivery.log
```

**Log File Format:**

```json
{"timestamp":"2024-07-07T14:30:00.123Z","event":"email_attempt","jobId":"email-123","recipient":"Organisation@example.com","type":"Organisation","attempt":1}
{"timestamp":"2024-07-07T14:30:02.456Z","event":"email_sent","jobId":"email-123","recipient":"Organisation@example.com","messageId":"msg-456"}
{"timestamp":"2024-07-07T14:30:03.789Z","event":"email_attempt","jobId":"email-124","recipient":"visitor@example.com","type":"visitor","attempt":1}
{"timestamp":"2024-07-07T14:30:05.012Z","event":"email_sent","jobId":"email-124","recipient":"visitor@example.com","messageId":"msg-789"}
```

### Get Email Statistics

```bash
# Get stats from logger
import { getEmailStats } from "@/backend/email/logger";
const stats = getEmailStats();
console.log(stats);
// Output:
// {
//   total: 1000,
//   sent: 985,
//   failed: 15,
//   successRate: "98.5%"
// }
```

### Monitor in Development

```bash
# Watch email log file for updates
tail -f .email-logs/email-delivery.log

# In another terminal, submit test forms
# See logs update in real-time
```

### Production Monitoring

Since files may not persist on serverless platforms:

**Option 1: Log to Database** (Recommended)
- Store email logs in database
- Query and analyze anytime
- Persist across deployments

**Option 2: Use Third-Party Logging** (Future)
- Send logs to service like LogRocket
- Monitor with dashboard
- Alerts on failures

---

## Troubleshooting

### Issue 1: "Invalid SMTP credentials"

**Error Message:**
```
Error: Invalid login: 535-5.7.8 Username and password not accepted
```

**Causes:**
- Wrong email/password
- Gmail: Not using app-specific password
- Outlook: Password reset needed

**Solution:**

For Gmail:
1. Go to https://myaccount.google.com/apppasswords
2. Delete old app password
3. Generate new one
4. Update `.env.local`
5. Restart dev server

For Outlook:
1. Go to https://account.microsoft.com/security
2. Reset app password
3. Update `.env.local`
4. Restart dev server

### Issue 2: "SMTP connection timeout"

**Error Message:**
```
Error: connect ETIMEDOUT
```

**Causes:**
- Network blocked
- Firewall blocking port
- Wrong SMTP host/port

**Solution:**

1. Check SMTP settings:
   ```env
   SMTP_HOST=smtp.gmail.com    # Verify this
   SMTP_PORT=587               # Verify this
   ```

2. Test SMTP connection:
   ```bash
   # Try connecting to SMTP server
   telnet smtp.gmail.com 587
   # If connects, should show SMTP banner
   ```

3. Check firewall:
   - Ask your ISP if port 587 is open
   - Try port 465 instead

### Issue 3: "Emails going to spam folder"

**Causes:**
- Gmail app-specific password issues
- Email not verified as legitimate

**Solution:**

1. Mark as "Not Spam" in your email client
2. Add sender to contacts
3. For production, consider:
   - Setting up DKIM/SPF for domain
   - Using professional mail service

### Issue 4: "Form stuck on 'Sending...'"

**Causes:**
- SMTP connection failed
- Invalid configuration

**Solution:**

1. Check browser console for errors (F12)
2. Check terminal output for backend errors
3. Verify `.env.local` has all required variables
4. Restart dev server

### Issue 5: "Emails not being sent"

**Causes:**
- Queue not processing
- Job status stuck
- Configuration invalid

**Solution:**

1. Check email logs:
   ```bash
   cat .email-logs/email-delivery.log
   ```

2. Check queue status:
   ```typescript
   import { getQueueStats } from "@/backend/email/queue";
   console.log(getQueueStats());
   ```

3. Test SMTP connection:
   ```typescript
   import { testSmtpConnection } from "@/backend/email/service";
   const ok = await testSmtpConnection();
   ```

### Issue 6: "visitor autoreply not sent but Organisation email works"

**Note:** This is expected behavior!

**Why:** 
- visitor autoreply only sends if email provided
- Failure to send autoreply doesn't block Organisation email
- Organisation email is priority

**Solution:**
1. Ensure visitor provided valid email
2. Check their spam folder
3. Check email logs for autoreply job

---

## Future Enhancements

### Recommended Improvements

#### 1. Database Logging
```typescript
// Store email logs in database instead of files
// Benefits:
// - Persistent across deployments
// - Queryable by date/recipient/status
// - Admin dashboard
```

**Implementation:**
- Add Prisma/MongoDB integration
- Store logs in `EmailLog` table
- Query via API endpoints

#### 2. Email Templates UI
```typescript
// Admin dashboard to manage templates
// Benefits:
// - Customize emails without code changes
// - Preview before sending
// - A/B testing
```

#### 3. Bounce & Complaint Handling
```typescript
// Listen to Gmail/Outlook bounce notifications
// Benefits:
// - Remove bounced emails from list
// - Automatic retry on temporary bounces
```

#### 4. SMS Fallback
```typescript
// Send SMS if email fails
// Benefits:
// - Multiple delivery channels
// - Urgent notifications
// - Better reliability
```

#### 5. Analytics Dashboard
```
- Total emails sent/received
- Delivery success rate
- Most common appointment reasons
- Peak booking times
- visitor response metrics
```

#### 6. Advanced Retry Logic
```typescript
// Exponential backoff instead of fixed delay
// Benefits:
// - Better handling of temporary failures
// - Less server load
// - Smart retry timing
```

#### 7. Rate Limiting
```typescript
// Limit submissions per IP
// Benefits:
// - Prevent spam
// - Protect against abuse
// - Fair resource usage
```

#### 8. CAPTCHA Integration
```typescript
// Add Google reCAPTCHA to form
// Benefits:
// - Verify human submission
// - Reduce spam
// - Security
```

---

## Conclusion

### What You Have Now

✅ **Production-Ready Email Backend**
- Custom, no third-party service
- Using your own Gmail/Outlook account
- Professional HTML emails
- Automatic retry logic
- Comprehensive logging
- Full error handling
- Type-safe TypeScript code

### Next Steps

1. **Setup** (5 minutes)
   - Create `.env.local` with SMTP credentials
   - Restart dev server

2. **Test** (5 minutes)
   - Submit contact form
   - Check both email inboxes
   - Verify logs created

3. **Deploy** (5 minutes)
   - Add environment variables to Vercel
   - Push code to GitHub
   - Verify production works

4. **Monitor** (Ongoing)
   - Check email logs regularly
   - Monitor queue stats
   - Watch for delivery issues

### Support & Documentation

- **Nodemailer Docs**: [https://nodemailer.com](https://nodemailer.com)
- **Gmail App Passwords**: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- **Outlook Security**: [https://account.microsoft.com/security](https://account.microsoft.com/security)
- **Zod Docs**: [https://zod.dev](https://zod.dev)
- **Next.js API Routes**: [https://nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Version**: 1.0.0  
**Last Updated**: July 7, 2024  
**Status**: Production Ready  
**Author**: Custom Backend Implementation  
**License**: MIT
