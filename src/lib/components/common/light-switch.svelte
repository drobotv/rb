<script lang="ts">
  import {
    buttonVariants,
    type Events,
    type Props
  } from '$lib/components/ui/button';
  import { Moon, Sun } from '$lib/icons';
  import { cn } from '$lib/utils';
  import { m } from '@/lib/i18n';
  import { Button as ButtonPrimitive } from 'bits-ui';

  type $$Props = Props & {
    iconOnly?: boolean;
  };
  type $$Events = Events;

  let className: $$Props['class'] = undefined;
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];
  export { className as class };

  import { mode, toggleMode } from 'mode-watcher';

  export let iconOnly = false;
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }), 'px-0')}
  type="button"
  {...$$restProps}
  on:click={toggleMode}
  on:keydown
>
  <span class={cn('', iconOnly ? 'sr-only' : '')}>{m.toggle_theme()}</span>
  <span class={cn('ml-auto mr-4')}>
    {#if $mode === 'light'}
      <Sun class="h-[1.2rem] w-[1.2rem] transition-all" />
    {:else}
      <Moon class="h-[1.2rem] w-[1.2rem] transition-all" />
    {/if}
  </span>
</ButtonPrimitive.Root>
