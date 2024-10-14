<script lang="ts">
  import Button from '@/lib/components/ui/button/button.svelte';
  import { m } from '@/lib/i18n';
  import { Clock, Link, Pencil } from 'lucide-svelte';

  type Booking = {
    id: string;
    name: string;
    date: string;
    time: string;
    duration: number;
    status: string;
  };

  let bookings = $state([]);
</script>

<svelte:head>
  <title>{m.bookings()} | R&B</title>
</svelte:head>

<div class="px-4">
  <div class="mb-6 flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold">{m.bookings()}</h1>
      <p class="text-gray-600">Manage your active bookings</p>
    </div>
  </div>

  <div class="space-y-4 overflow-x-auto py-4">
    <div class="grid gap-4 md:gap-6">
      {#each bookings as item}{:else}
        <div
          class="w-full border-2 border-dashed border-gray-800 p-4 text-center"
        >
          You currently have no active bookings.
        </div>
      {/each}
    </div>
  </div>
</div>
