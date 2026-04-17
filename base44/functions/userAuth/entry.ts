import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

// Temporary test credentials (will be replaced with real DB later)
const TEST_USERS = [
  { email: 'admin@suniyo.ai', password: 'Suniyo2024!', name: 'Admin User' },
  { email: 'test@suniyo.ai', password: 'Test1234!', name: 'Test User' },
];

Deno.serve(async (req) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const user = TEST_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return Response.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    return Response.json({ success: true, user: { email: user.email, name: user.name } });
  } catch (error) {
    console.error('Auth error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});