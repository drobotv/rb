<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { cn } from '$lib/utils';

  interface Props {
    title: string;
    value: string;
    description: string;
    isPositive: boolean;
  }

  let { title, value, description, isPositive }: Props = $props();
</script>

<Card.Root>
  <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
    <Card.Title class="font-medium">{title}</Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="text-2xl font-bold">
      {value}
    </div>
    <small class={cn('', isPositive ? 'text-green-600/75' : 'text-red-600')}
      >{description}</small
    >
  </Card.Content>
</Card.Root>
