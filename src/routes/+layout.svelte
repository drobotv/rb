<script>
  import { i18n } from '$lib/i18n';
  import { CircleX } from '$lib/icons';
  import '@/app.css';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import { ModeWatcher } from 'mode-watcher';

  let { children } = $props();

  let showBanner = $state(true);
</script>

<ModeWatcher />

{#if showBanner}
  <div class="relative w-full bg-red-500 p-2 text-white sm:pl-16">
    <p>
      This application is a part of a diploma coursework, it will stay online for
      the time of development. Source code is available at <a
        class="font-semibold underline"
        target="_blank"
        href="https://github.com/drobotv/rb"
        rel="noopener noreferrer">github.</a
      >
    </p>
    <button
      class="absolute right-0 top-0 mr-2 mt-2"
      onclick={() => (showBanner = false)}><CircleX /></button
    >
  </div>
{/if}
<ParaglideJS {i18n}>
  {@render children()}
</ParaglideJS>
