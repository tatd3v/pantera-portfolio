import NextAuth, { type DefaultSession, type Session, type User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
  
  interface User {
    id: string;
  }
}

// Temporary interface until we have proper Drizzle types
interface MockUser {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email =
          typeof credentials.email === 'string' ? credentials.email : '';
        const password =
          typeof credentials.password === 'string' ? credentials.password : '';

        if (!email || !password) {
          return null;
        }

        try {
          // For now, we'll use a mock user check
          // In production, this would query D1 database
          const mockUser: MockUser = {
            id: 1,
            email: process.env.ADMIN_EMAIL || 'admin@pantera.com',
            password: process.env.ADMIN_PASSWORD || 'password', // This should be hashed
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          // Verify password
          const isPasswordValid = await bcrypt.compare(
            password,
            mockUser.password,
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: mockUser.id.toString(),
            email: mockUser.email,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
  },
};

// Create NextAuth instance for server-side auth
const handler = NextAuth(authOptions);

// Export the handler
export { handler };

