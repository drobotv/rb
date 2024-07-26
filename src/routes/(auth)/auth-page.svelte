<script lang="ts">
  import Button from '@/lib/components/ui/button/button.svelte';
  import { ChevronLeft } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  const {
    children
  }: {
    children: Snippet;
  } = $props();
</script>

<div
  class="container relative grid h-full grid-cols-1 flex-col items-center justify-center bg-background lg:max-w-none lg:grid-cols-2 lg:px-0"
>
  <div class="relative hidden h-full flex-col border-r bg-muted p-10 lg:flex">
    <img
      src="/images/placeholder.svg"
      alt="placeholder"
      width="1920"
      height="1080"
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute left-0 top-0 p-4 lg:p-8">
      <Button variant="link" href="/"><ChevronLeft /></Button>
    </div>
  </div>
  <div class="lg:p-8">
    <div
      class="mx-auto flex w-full max-w-[350px] flex-col justify-center space-y-2"
    >
      {@render children()}
    </div>
  </div>
</div>
