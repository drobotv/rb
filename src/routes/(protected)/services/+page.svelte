<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import { Plus } from 'lucide-svelte';
  import ServiceForm from './service-form.svelte';

  import { m } from '@/lib/i18n';
  import ServiceCard from './service-card.svelte';

  let services = $state([
    {
      id: '1',
      name: 'Service 1',
      slug: '/username/service-1',
      hidden: false,
      duration: 30
    },
    {
      id: '2',
      name: 'Service 2',
      slug: '/username/service-2',
      hidden: true,
      duration: 60
    }
  ]);

  type Service = (typeof services)[number];

  let isDialogOpen = $state(false);
  let currentService: Service | null = $state(null);

  function handleAddService() {
    currentService = null;
    isDialogOpen = true;
  }
</script>

<div class="px-4">
  <div class="mb-6 flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold">Your Services</h1>
      <p class="text-gray-600">Add or edit the services you created</p>
    </div>
    <Button onclick={handleAddService}>
      <Plus class="mr-2 h-4 w-4" /> Add New Service
    </Button>
  </div>

  <div class="space-y-4 overflow-x-auto py-4">
    <div class="grid gap-4 md:gap-6">
      {#each services as { id, name, slug, hidden, duration }}
        <ServiceCard {id} {name} {slug} {hidden} {duration} />
      {/each}
    </div>
  </div>
</div>

<Dialog.Root bind:open={isDialogOpen}>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title
        >{currentService ? 'Edit Service' : 'Add New Service'}</Dialog.Title
      >
    </Dialog.Header>
    <ServiceForm
      service={currentService || {
        id: '',
        name: '',
        slug: '',
        duration: 30,
        hidden: false
      }}
    />
  </Dialog.Content>
</Dialog.Root>

<svelte:head>
  <title>{m.services()} | R&B</title>
</svelte:head>
