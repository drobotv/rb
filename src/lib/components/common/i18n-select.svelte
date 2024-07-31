<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import {
    availableLanguageTags,
    languageTag,
    onSetLanguageTag,
    setLanguageTag
  } from '$lib/paraglide/runtime.js';

  $effect(() => {
    onSetLanguageTag((tag = 'en') => {
      window.location.href = `/${tag}/${window.location.pathname.slice(4)}`;
    });
  });
</script>

<Tabs.Root
  value={languageTag()}
  class="w-full"
  onValueChange={(tag) =>
    setLanguageTag(tag as (typeof availableLanguageTags)[number])}
>
  <Tabs.List class="grid w-full grid-cols-3">
    {#each availableLanguageTags as tag}
      <Tabs.Trigger value={tag}>{tag.toUpperCase()}</Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>
