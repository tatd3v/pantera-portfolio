#!/usr/bin/env node

/**
 * Seed script to create the first admin user
 * Run this script after setting up your database
 */

import { hashPassword } from '../src/lib/utils/password.js';

// This would normally connect to your D1 database
// For now, we'll output the hashed password for manual setup

async function seedAdminUser() {
  const email = process.env.ADMIN_EMAIL || 'admin@pantera.com';
  const password = process.env.ADMIN_PASSWORD || 'admin123';

  console.log('=== Admin User Seed Script ===');
  console.log('Email:', email);
  
  try {
    const hashedPassword = await hashPassword(password);
    console.log('Hashed Password:', hashedPassword);
    console.log('');
    console.log('Add this to your database:');
    console.log(`INSERT INTO users (email, password, created_at, updated_at) VALUES ('${email}', '${hashedPassword}', datetime('now'), datetime('now'));`);
    console.log('');
    console.log('After running this SQL, you can login with:');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  } catch (error) {
    console.error('Error hashing password:', error);
    process.exit(1);
  }
}

seedAdminUser();
