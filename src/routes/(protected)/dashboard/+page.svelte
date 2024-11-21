<script lang="ts">
  import { m } from '@/lib/i18n';

  let { data } = $props();
</script>

<svelte:head>
  <title>{m.dashboard()} | R&B</title>
</svelte:head>

<div class="px-4">
  <div class="mb-6 flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold">{m.dashboard()}</h1>
      <p class="text-gray-600">
        <!-- sub-header-msg -->
      </p>
    </div>
  </div>

  <div class="space-y-4 overflow-x-auto py-4">
    <div class="grid gap-4 md:gap-6">
        <div
          class="w-full border-2 border-dashed border-gray-800 p-4 text-center"
        >
          {m.no_data()}
        </div>
    </div>
  </div>
</div>