'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export async function signOut(_prevState: { error: string } | null) {
  const { error } = await auth.signOut();

  if (error) {
    return { error: error.message || 'Failed to sign out.' };
  }

  redirect('/auth/sign-in');
}
