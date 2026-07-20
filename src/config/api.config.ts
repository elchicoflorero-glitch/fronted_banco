/**
 * API Configuration
 * This file determines the API URL based on the environment
 * Last updated: 2024-01-20 - Force rebuild
 */

export function getApiUrl(): string {
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    // Server-side: use env var or default to production
    return process.env.NEXT_PUBLIC_API_URL || 'https://backendbanco-production.up.railway.app/api';
  }

  // Client-side: detect environment
  const hostname = window.location.hostname;
  
  // Development (localhost)
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3010/api';
  }
  
  // Production (Vercel or any other domain)
  return 'https://backendbanco-production.up.railway.app/api';
}

export const API_URL = getApiUrl();
