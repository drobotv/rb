import {
  Calendar,
  CalendarClock,
  LayoutDashboard,
  NotebookPen,
  Settings,
  Users
} from '$lib/icons';
import { m } from '@/lib/i18n';

// lucide-svelte depends on ComponentType from svelte 4
import type { Icon } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type NavLink = {
  href: string;
  label: () => string;
  icon: ComponentType<Icon>;
};

export const navLinks = {
  top: [
    { href: '/dashboard', label: m.dashboard, icon: LayoutDashboard },
    { href: '/services', label: m.services, icon: NotebookPen },
    { href: '/bookings', label: m.bookings, icon: Calendar },
    { href: '/team', label: m.team, icon: Users },
    { href: '/availability', label: m.availability, icon: CalendarClock }
  ] as NavLink[],
  bottom: [{ href: '/settings', label: m.settings, icon: Settings }] as NavLink[]
};
