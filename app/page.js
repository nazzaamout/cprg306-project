/**
 * @file page.js
 * @description Home page component for BookFoo application
 * This is the main landing page that handles user authentication and provides navigation
 * to different sections of the BookFoo application. It implements GitHub authentication
 * and displays different content based on user authentication status.
 */

"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";
import { MarkGithubIcon } from "@primer/octicons-react";
import { Book, Mail, User, BookOpen, Library, BookMarked } from "lucide-react";

/**
 * Home Component
 * @returns {JSX.Element} The rendered home page component
 *
 * This component serves as the main landing page and implements:
 * - GitHub authentication flow
 * - Conditional rendering based on user authentication status
 * - Navigation to different sections of the application
 * - Error handling for authentication failures
 */
export default function Home() {
  // Get authentication context and user information
  const { user, gitHubSignIn } = useUserAuth();
  // State for handling authentication errors
  const [error, setError] = useState(null);

  /**
   * Handles the GitHub sign-in process
   * Attempts to authenticate the user and handles any potential errors
   * @async
   */
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in");
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        {user ? (
          // Authenticated User View
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            {/* User Profile Section */}
            <div className="border-b pb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  <User className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    {user.displayName}
                  </h2>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Library Navigation Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <Library className="w-5 h-5 text-indigo-500" />
                Your Library
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* BookFoo Search Navigation Card */}
                <Link
                  href="bookfoo"
                  className="flex items-center gap-3 p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors group"
                >
                  <BookOpen className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-indigo-900">
                      Visit BookFoo
                    </div>
                    <div className="text-sm text-indigo-600">
                      Search for books
                    </div>
                  </div>
                </Link>
                {/* Favorites Navigation Card */}
                <Link
                  href="/bookfoo/favorites"
                  className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group"
                >
                  <BookMarked className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-purple-900">
                      My Favorites
                    </div>
                    <div className="text-sm text-purple-600">
                      View your reading collection
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // Non-Authenticated User View
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="max-w-md mx-auto space-y-6">
              <div className="p-4">
                <Book className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome to BookFoo
                </h1>
                <p className="text-gray-600 mb-6">
                  Your personal book management platform
                </p>
                {/* GitHub Authentication Button */}
                <button
                  onClick={handleSignIn}
                  className="flex items-center gap-2 px-6 py-3 bg-[#24292e] hover:bg-[#2f363d] text-white rounded-lg transition-colors border border-gray-700 mx-auto"
                  title="Sign in with GitHub"
                >
                  <MarkGithubIcon size={20} />
                  <span className="text-sm font-semibold">
                    Sign in with GitHub
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Error Message Display */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}
      </div>
    </main>
  );
}
