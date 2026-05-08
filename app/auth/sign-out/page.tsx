'use client';

import { useActionState } from 'react';
import { signOut } from './actions';

export default function SignOutButton() {
  const [state, formAction, isPending] = useActionState(signOut, null);

  return (
    <form action={formAction} className="flex flex-col items-center gap-2">
      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? 'Signing out...' : 'Sign out'}
      </button>

      {state?.error ? (
        <div className="text-sm text-red-300">{state.error}</div>
      ) : null}
    </form>
  );
}
