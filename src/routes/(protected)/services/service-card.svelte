<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import Button from '@/lib/components/ui/button/button.svelte';
  import Switch from '@/lib/components/ui/switch/switch.svelte';

  import { Clock, Link, Pencil } from '$lib/icons';
  import { m } from '@/lib/i18n';

  type Props = {
    id: string;
    name: string;
    slug: string;
    hidden: boolean;
    duration: number;
  };

  let { id, name, slug, hidden, duration }: Props = $props();
</script>

<Card.Root>
  <Card.Content class="p-4">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold">{name}</h2>
        <p class="text-sm">{slug}</p>
      </div>
      <div class="flex items-center space-x-2">
        {#if hidden}
          <span class="text-sm">{m.hidden()}</span>
        {/if}
        <Switch checked={!hidden} onclick={() => (hidden = !hidden)} />
        <Button variant="ghost" size="icon"><Pencil class="h-4 w-4" /></Button>
        <Button variant="ghost" size="icon"><Link class="h-4 w-4" /></Button>
      </div>
    </div>
    <div class="mt-2 flex items-center text-sm">
      <Clock class="mr-1 h-4 w-4" />
      <span>{duration} minutes</span>
    </div>
  </Card.Content>
</Card.Root>
