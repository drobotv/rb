import { i18n } from '$lib/i18n';
import { lucia } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const authHandle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get(lucia.sessionCookieName);

  if (!sessionId && event.route.id?.startsWith('/(protected)')) {
    redirect(302, i18n.resolveRoute('/login'));
  }

  if (!sessionId) {
    event.locals.user = null;
    event.locals.session = null;
    return resolve(event);
  }

  const { session, user } = await lucia.validateSession(sessionId);
  if (session?.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: '.',
      ...sessionCookie.attributes
    });
  }

  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: '.',
      ...sessionCookie.attributes
    });
  }

  event.locals.user = user;
  event.locals.session = session;

  return resolve(event);
};

export const handle = sequence(authHandle, i18n.handle());
