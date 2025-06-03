import { SignJWT } from 'jose';

export const generateTestToken = async () => {
  const secret = new TextEncoder().encode('your-secret-key');
  const token = await new SignJWT({ userId: '1234', role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);
  return token;
};