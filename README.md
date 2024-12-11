# BookFoo - Book Management Application

This is a Next.js project bootstrapped with `create-next-app`, featuring GitHub authentication and book management capabilities.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Project Configuration

### Path Aliases

The project uses path aliases for cleaner imports. This is configured in `jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

This allows you to use imports like:
```javascript
import { MyComponent } from "@/components/MyComponent";
import { myUtil } from "@/utils/myUtil";
```

Instead of relative paths like:
```javascript
import { MyComponent } from "../../components/MyComponent";
```

### Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "lucide-react": "latest",  // Icon components
    "@primer/octicons-react": "latest",  // GitHub-style icons
    "firebase": "latest"  // Firebase SDK
  }
}
```

Install all dependencies with:
```bash
npm install lucide-react @primer/octicons-react firebase
```

### Environment Variables

Create a `.env.local` file in your project root:

```env
# GitHub Authentication
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

### Firebase Firestore Database Rules

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
        match /items/{itemId} {
          allow read, write, delete: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

## Features

- Modern UI with Tailwind CSS
- GitHub authentication
- Responsive design
- Book search and management
- Favorites system

## Project Structure

```
/app
  /_utils           # Utility functions and auth context
  /_services        # API and service functions
  /bookfoo          # Main book search and management features
  /bookfoo/favorites # User's favorite books
  layout.js         # Root layout with auth protection
  page.js           # Home page and authentication
jsconfig.json       # JavaScript configuration and path aliases
.env.local         # Environment variables (create this)
```

## Technical Details

### Font Usage
This project uses `next/font` to automatically optimize and load Geist, a new font family for Vercel.

### Icons and UI Components
This project uses:
- Tailwind CSS for styling components
- Lucide React for main UI icons
- GitHub Octicons for authentication-related icons

## Firebase Setup

### Authentication Setup
1. Create a new project in the Firebase Console
2. Go to Project Settings > General
3. Scroll down to "Your apps" and create a new Web app
4. Go to Authentication and choose what account you want to use
5. Connect the account and firebase with callback url and client id and secrets
6. Install firebase: `npm install firebase` and `npm install encoding`
7. In the `_utils` folder, create a file called `auth-context.js`

### Cloud Setup
1. Open the project in firebase Firebase Console
2. Go to settings > firestore database > Rules tag
3. Copy Firebase firestore database rules to Rules
4. In `_utils` folder, create a file called `firebase.js`
5. Copy Environment Variables to the file
6. Replace the values in `_utils/firebase.js` with constants
7. Create a new folder called `_services` in app folder
8. Copy `bookfoo-services.js` and paste in `_services`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.