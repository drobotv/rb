import { lucia } from '$lib/server/lucia';
import { i18n } from '@/lib/i18n';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { session } = event.locals;

  if (!session) {
    redirect(302, i18n.resolveRoute('/'));
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  event.cookies.set(sessionCookie.name, sessionCookie.value, {
    path: '.',
    ...sessionCookie.attributes
  });
  redirect(302, i18n.resolveRoute('/'));
};
