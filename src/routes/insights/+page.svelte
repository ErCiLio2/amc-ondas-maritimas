<script lang="ts">
	const categories = ['Todos', 'Procurement & Supply Chain', 'Operações Offshore', 'Compliance & HSSE'];
	let activeCategory = $state('Todos');

	const articles = [
		{
			category: 'Procurement & Supply Chain',
			date: 'Agosto 2026',
			title: 'Qualificação de fornecedores locais: o que os operadores de O&G exigem hoje',
			excerpt: 'Os operadores internacionais de óleo & gás aumentaram significativamente os requisitos de qualificação para fornecedores locais. Analisamos o que mudou e como se preparar.',
			img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80&auto=format&fit=crop'
		},
		{
			category: 'Operações Offshore',
			date: 'Julho 2026',
			title: 'Crew change em Angola: as janelas operacionais que ninguém explica',
			excerpt: 'A coordenação de crew change nos corredores angolanos tem particularidades que a documentação técnica raramente cobre. Um guia prático para operadores newcomers.',
			img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop'
		},
		{
			category: 'Compliance & HSSE',
			date: 'Junho 2026',
			title: 'HSSE sem papel: digitalização de procedimentos em operações marítimas',
			excerpt: 'Como a rastreabilidade digital de procedimentos HSSE está a transformar a auditabilidade das operações offshore em Angola e o que isso significa para fornecedores.',
			img: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=700&q=80&auto=format&fit=crop'
		}
	];

	const filtered = $derived(
		activeCategory === 'Todos' ? articles : articles.filter((a) => a.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Insights — Ondas Marítimas</title>
	<meta name="description" content="Leituras sobre procurement marítimo, logística offshore e operações na costa angolana." />
</svelte:head>

<!-- HERO -->
<section class="py-16 bg-gray-50 border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<p class="section-eyebrow mb-3">Insights</p>
		<h1 class="section-title max-w-2xl">Explore as nossas leituras sobre procurement marítimo e logística offshore</h1>
	</div>
</section>

<!-- ARTICLES -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<!-- Category filters -->
		<div class="flex flex-wrap gap-3 mb-14">
			{#each categories as cat}
				<button
					onclick={() => (activeCategory = cat)}
					class="px-5 py-2 text-xs font-semibold border tracking-wide transition-colors {activeCategory === cat
						? 'bg-gray-900 border-gray-900 text-white'
						: 'border-gray-300 text-gray-600 hover:border-gray-600 hover:text-gray-900'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="text-gray-400 text-center py-20">Nenhum artigo nesta categoria por enquanto.</p>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each filtered as article}
					<article class="group flex flex-col">
						<div class="aspect-video overflow-hidden mb-5">
							<img
								src={article.img}
								alt={article.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						<p class="section-eyebrow mb-2">{article.category}</p>
						<p class="text-gray-400 text-xs mb-3">{article.date}</p>
						<h2 class="text-xl font-display font-bold text-gray-900 leading-snug mb-3 group-hover:text-red-600 transition-colors flex-1">
							{article.title}
						</h2>
						<p class="text-gray-500 text-sm leading-relaxed mb-5">{article.excerpt}</p>
						<a href="/insights/{article.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}" class="text-red-600 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
							Ler artigo
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>
