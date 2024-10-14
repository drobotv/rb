<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Switch } from '$lib/components/ui/switch';

  interface Props {
    service: {
      id: string;
      name: string;
      slug: string;
      duration: number;
      hidden: boolean;
    };
  }

  let { service }: Props = $props();
</script>

<form class="space-y-4">
  <div>
    <Label for="name">Service Name</Label>
    <Input id="name" bind:value={service.name} required />
  </div>
  <div>
    <Label for="slug">Slug</Label>
    <Input id="slug" bind:value={service.slug} required />
  </div>
  <div>
    <Label for="duration">Duration (minutes)</Label>
    <Input id="duration" type="number" bind:value={service.duration} required />
  </div>
  <div class="flex items-center space-x-2">
    <Switch id="hidden" bind:checked={service.hidden} />
    <Label for="hidden">Hidden</Label>
  </div>
  <Button type="button" class="w-full">Save Service</Button>
</form>
