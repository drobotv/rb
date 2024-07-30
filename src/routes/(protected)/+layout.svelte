<script lang="ts">
  import Aside from './aside.svelte';
  import Header from './header.svelte';

  let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col">
  <Aside />
  <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <Header />
    <main class="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
      {@render children()}
    </main>
  </div>
</div>
