<script lang="ts">
  import { m } from '@/lib/i18n';
  import StatsCard from './stats-card.svelte';
</script>

<div class="space-y-4 overflow-x-auto px-4 py-4 md:px-6">
  <div class="grid gap-4 md:grid-cols-1 md:gap-6 lg:grid-cols-3">
    <StatsCard
      title={m.clients()}
      value="78"
      description="2.5% less that previous month."
      isPositive={false}
    />
    <StatsCard
      title={m.bookings()}
      value="121"
      description="21% more that previous month."
      isPositive
    />
  </div>
  <div class="grid gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3"></div>
</div>
