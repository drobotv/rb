<script lang="ts">
  import { page } from '$app/stores';
  import * as Tooltip from '$lib/components/ui/tooltip';
  import { Ghost } from '$lib/icons';
  import { cn } from '$lib/utils';
  import Separator from '@/lib/components/ui/separator/separator.svelte';
  import { m } from '@/lib/i18n';
  import { navLinks as links, type NavLink } from './_constants';
</script>

<aside
  class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex"
>
  <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
    <a
      href="/"
      class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
    >
      <Ghost size={16} class="transition-all group-hover:scale-110" />
      <span class="sr-only">{m.home_page()}</span>
    </a>
    <Separator />
    {#each links.top as link}
      {@render navLink(link)}
    {/each}
  </nav>
  <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
    {#each links.bottom as link}
      {@render navLink(link)}
    {/each}
  </nav>
</aside>

{#snippet navLink({ href, label, icon }: NavLink)}
  {@const isActive = $page.route.id?.includes(`(protected)${href}`)}
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <a
        {href}
        class={cn(
          'box-content flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-10',
          isActive && 'bg-muted-foreground/25 text-foreground'
        )}
        use:builder.action
        {...builder}
      >
        <svelte:component this={icon} class="h-5 w-5" />
        <span class="sr-only">{label()}</span>
      </a>
    </Tooltip.Trigger>
    <Tooltip.Content side="right">{label()}</Tooltip.Content>
  </Tooltip.Root>
{/snippet}
