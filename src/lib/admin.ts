export function isAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  try {
    const adminEmails = JSON.parse(process.env.NEXT_PUBLIC_ADMIN_EMAILS || '[]');
    return Array.isArray(adminEmails) && adminEmails.includes(email);
  } catch {
    console.error('Failed to parse NEXT_PUBLIC_ADMIN_EMAILS environment variable');
    return false;
  }
}

export function requireAdmin(email: string | null | undefined): void {
  if (!isAdmin(email)) {
    throw new Error('Unauthorized: Admin access required');
  }
} 