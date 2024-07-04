<script>
  import '@/app.css';
  import { IconCalendar } from '@/lib/icons';

  let { children } = $props();
</script>

{@render children()}

<IconCalendar font-size="2rem" />
