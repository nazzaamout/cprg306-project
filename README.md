```markdown
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
import { MyComponent } from '@/components/MyComponent'
import { myUtil } from '@/utils/myUtil'
```

Instead of relative paths like:
```javascript
import { MyComponent } from '../../components/MyComponent'
```

### Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "lucide-react": "latest",    // Icon components
    "@primer/octicons-react": "latest",  // GitHub-style icons
    "firebase": "latest"    // Firebase SDK
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

## Font Usage

This project uses `next/font` to automatically optimize and load Geist, a new font family for Vercel.

## Icons and UI Components

This project uses:
- Tailwind CSS for styling components
- Lucide React for main UI icons
- GitHub Octicons for authentication-related icons

## Firebase Setup

To set up Firebase:
1. Create a new project in the [Firebase Console](https://console.firebase.google.com)
2. Go to Project Settings > General
3. Scroll down to "Your apps" and create a new Web app
4. Copy the configuration values into your `.env.local` file

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
