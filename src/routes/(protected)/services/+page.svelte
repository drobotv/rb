<script lang="ts">
  import { m } from '@/lib/i18n';
  import ServiceCard from './service-card.svelte';

  const services = [
    {
      name: 'Service 1',
      slug: '/username/service-1',
      hidden: false,
      duration: '30 minutes'
    },
    {
      name: 'Service 2',
      slug: '/username/service-2',
      hidden: true,
      duration: '1 hour'
    }
  ];
</script>

<div class="space-y-4 overflow-x-auto px-4 py-4 md:px-6">
  <div class="grid gap-4 md:gap-6">
    {#each services as { name, slug, hidden, duration }}
      <ServiceCard {name} {slug} {hidden} {duration} />
    {/each}
  </div>
</div>

<svelte:head>
  <title>{m.services()} | R&B</title>
</svelte:head>
