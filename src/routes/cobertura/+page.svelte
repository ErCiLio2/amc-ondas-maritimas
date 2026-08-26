<script lang="ts">
	import Stripes from '$lib/components/Stripes.svelte';

	const corridors = [
		{ num: '01', name: 'Cabinda', desc: 'Corredor norte — acesso a operações de exploração e produção offshore na fronteira norte de Angola.' },
		{ num: '02', name: 'Soyo', desc: 'Hub estratégico na foz do rio Congo, com intensa actividade de LNG e serviços offshore.' },
		{ num: '03', name: 'Ambriz', desc: 'Porto intermediário com crescente actividade de suporte logístico a operações de upstream e offshore.' },
		{ num: '04', name: 'Luanda', desc: 'Capital e principal hub logístico do país — sede da Ondas Marítimas e centro de coordenação.' },
		{ num: '05', name: 'Lobito', desc: 'Corredor sul — porto com crescente relevância estratégica para operações industriais e de commodities.' }
	];
</script>

<svelte:head>
	<title>Cobertura — Ondas Marítimas</title>
</svelte:head>

<section class="py-16 bg-gray-50 border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<p class="section-eyebrow mb-3">Cobertura</p>
		<h1 class="section-title max-w-2xl">Cinco corredores, norte a sul</h1>
		<p class="text-gray-500 text-base mt-4 max-w-xl leading-relaxed">
			As operações da Ondas Marítimas cobrem os principais pontos de entrada e saída de carga e pessoal na costa angolana, com sincronização operacional total com o cliente.
		</p>
	</div>
</section>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="divide-y divide-gray-200 border-y border-gray-200">
			{#each corridors as c}
				<div class="py-10 grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-6 items-center group hover:bg-gray-50 transition-colors px-2 -mx-2">
					<div class="text-gray-200 text-5xl font-display font-bold group-hover:text-red-100 transition-colors">{c.num}</div>
					<div>
						<h2 class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{c.name}</h2>
						<p class="text-gray-500 text-base leading-relaxed max-w-lg">{c.desc}</p>
					</div>
					<a href="/contactos" class="text-red-600 text-sm font-semibold flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hover:gap-3">
						Operar aqui
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</div>
			{/each}
		</div>
		<div class="mt-8">
			<Stripes count={22} height="h-10" />
		</div>
	</div>
</section>

<section class="bg-gray-50 border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-3 gap-px bg-gray-200 border border-gray-200">
		<div class="bg-gray-50 p-8 text-center">
			<div class="text-4xl font-display font-bold text-gray-900 mb-2">5</div>
			<div class="text-gray-500 text-sm">Corredores operacionais</div>
		</div>
		<div class="bg-white p-8 text-center">
			<div class="text-4xl font-display font-bold text-gray-900 mb-2">24h</div>
			<div class="text-gray-500 text-sm">Resposta a urgências</div>
		</div>
		<div class="bg-gray-50 p-8 text-center">
			<div class="text-4xl font-display font-bold text-gray-900 mb-2">1</div>
			<div class="text-gray-500 text-sm">Interlocutor para toda a cobertura</div>
		</div>
	</div>
</section>

<section class="py-12 bg-red-600">
	<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
		<h2 class="text-3xl font-display font-bold text-white">Opera nalgum destes corredores?</h2>
		<a href="/contactos" class="inline-flex items-center gap-2 bg-white text-red-600 font-bold text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-red-50 transition-colors whitespace-nowrap">
			Contactar agora
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
