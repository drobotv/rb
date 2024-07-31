import { i18n } from '@/lib/i18n';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  return redirect(302, i18n.resolveRoute('/login'));
};
