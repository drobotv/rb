<script>
  import { page } from '$app/stores';
  import LightSwitch from '$lib/components/common/light-switch.svelte';
  import LogoutFormDialog from '$lib/components/modals/logout-form-dialog.svelte';
  import * as Avatar from '$lib/components/ui/avatar';
  import Button from '$lib/components/ui/button/button.svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { m } from '@/lib/i18n';

  const initials = $page.data?.user?.email?.charAt(0).toUpperCase() ?? 'U';
  let showLogoutDialog = $state(false);
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button
      variant="ghost"
      size="icon"
      builders={[builder]}
      class="overflow-hidden rounded-full border border-foreground dark:border-none"
    >
      <Avatar.Root>
        <Avatar.Image
          src={$page.data.user.avatar ?? ''}
          alt={initials}
          class="overflow-hidden"
        />
        <Avatar.Fallback>{initials}</Avatar.Fallback>
      </Avatar.Root>
      <span class="sr-only">{m.toggle_user_menu()}</span>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-48" align="end">
    <DropdownMenu.Label class="font-normal">
      <div class="flex flex-col space-y-1">
        <p class="text-sm font-medium leading-none">
          {$page.data?.user?.name ?? $page.data?.user?.email}
        </p>
        <p class="text-xs leading-none text-muted-foreground">
          {$page.data?.user?.email}
        </p>
      </div>
    </DropdownMenu.Label>
    <DropdownMenu.Separator />
    <DropdownMenu.Group>
      <DropdownMenu.Item class="py-0">
        <Button
          variant="ghost"
          href="/settings"
          class="m-0 flex w-full justify-start p-0 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground"
        >
          {m.settings()}
        </Button>
      </DropdownMenu.Item>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />

    <DropdownMenu.Group>
      <DropdownMenu.Item class="py-0">
        <LightSwitch
          variant="ghost"
          class="flex w-full text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground"
        />
      </DropdownMenu.Item>
      <DropdownMenu.Item class="py-0">
        <Button
          onclick={() => {
            showLogoutDialog = true;
          }}
          variant="ghost"
          class="m-0 flex w-full justify-start p-0 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground"
        >
          {m.logout()}
        </Button>
      </DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
<LogoutFormDialog bind:open={showLogoutDialog} />
