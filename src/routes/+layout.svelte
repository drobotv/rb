<script>
  import { i18n } from '$lib/i18n';
  import * as t from '$lib/paraglide/messages';
  import '@/app.css';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  {@render children()}

  <a href="/">EN</a>
  <a href="/de">DE</a>
  <a href="/pl">PL</a>

  <p>{t.user()}</p>
</ParaglideJS>
