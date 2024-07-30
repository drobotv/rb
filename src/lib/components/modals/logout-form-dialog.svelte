<script lang="ts">
  import * as AlertDialog from '$lib/components/ui/alert-dialog';
  import Button from '$lib/components/ui/button/button.svelte';
  import { m } from '@/lib/i18n';

  export let open = false;
</script>

<AlertDialog.Root bind:open closeOnOutsideClick={true}>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>{m.form_logout_title()}</AlertDialog.Title>
      <AlertDialog.Description>
        {m.form_logout_desc()}
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>{m.cancel()}</AlertDialog.Cancel>
      <AlertDialog.Action asChild>
        <Button variant="destructive" href="/logout">{m.confirm()}</Button>
      </AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
