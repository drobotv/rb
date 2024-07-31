<script lang="ts">
  import { page } from '$app/stores';
  import UserDropdown from '$lib/components/modals/user-dropdown.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import * as Sheet from '$lib/components/ui/sheet';
  import { BellRing, Ghost } from '$lib/icons';
  import { cn } from '$lib/utils';
  import Separator from '@/lib/components/ui/separator/separator.svelte';
  import { m } from '@/lib/i18n';
  import PanelLeft from 'lucide-svelte/icons/panel-left';
  import { navLinks as links, type NavLink } from './_constants';
</script>

<header
  class="sticky top-0 z-30 flex h-14 items-center gap-4 bg-background
  px-4 sm:static sm:h-auto sm:bg-transparent sm:px-6"
>
  <Sheet.Root>
    <Sheet.Trigger asChild let:builder>
      <Button
        builders={[builder]}
        size="icon"
        variant="outline"
        class="sm:hidden"
      >
        <PanelLeft class="h-5 w-5" />
        <span class="sr-only">{m.toggle_menu()}</span>
      </Button>
    </Sheet.Trigger>
    <Sheet.Content side="left" class="sm:max-w-xs">
      <nav class="grid gap-6 text-lg font-medium">
        <a
          href="/"
          class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
        >
          <Ghost size={16} class="transition-all group-hover:scale-110" />
          <span class="sr-only">{m.home_page()}</span>
        </a>
        {#each links.top as link}
          {@render navLink(link)}
        {/each}

        <Separator />

        {#each links.bottom as link}
          {@render navLink(link)}
        {/each}
      </nav>
    </Sheet.Content>
  </Sheet.Root>
  <div class="relative ml-auto flex-1 grow-0 flex-row">
    <!-- <Navigation /> -->
  </div>
  <Button
    variant="ghost"
    size="icon"
    class="mr-1 rounded-full text-muted-foreground transition-colors hover:text-foreground"
  >
    <BellRing class="h-5 w-5" />
  </Button>
  <UserDropdown />
</header>
<Separator />

{#snippet navLink({ href, label, icon }: NavLink)}
  {@const isActive = $page.route.id?.includes(`(protected)${href}`)}
  <Sheet.Close asChild let:builder>
    <a
      {href}
      class={cn(
        'flex items-center gap-4 rounded-md p-2.5 text-muted-foreground hover:text-foreground',
        isActive && 'border-0 bg-muted-foreground/25 text-foreground'
      )}
      use:builder.action
      {...builder}
    >
      <svelte:component this={icon} class="h-5 w-5" />
      {label()}
    </a>
  </Sheet.Close>
{/snippet}
