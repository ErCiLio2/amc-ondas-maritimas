<script lang="ts">
	let { count = 18, height = 'h-14' }: { count?: number; height?: string } = $props();
</script>

<div class="flex gap-[3px] items-end">
	{#each Array(count) as _, i}
		<div
			class="w-[3.5px] bg-red-600 {height}"
			style="opacity: {0.4 + (i / count) * 0.6}"
		></div>
	{/each}
</div>
