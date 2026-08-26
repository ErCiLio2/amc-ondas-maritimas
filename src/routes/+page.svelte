<script lang="ts">
	import { onMount } from 'svelte';
	import Stripes from '$lib/components/Stripes.svelte';

	const slides = [
		{ eyebrow: 'Bem-vindo à Ondas Marítimas', title: 'Abastecemos o que não pode parar na costa de Angola' },
		{ eyebrow: 'Operações Time-Critical · 24h', title: 'Resposta em horas, não em dias' },
		{ eyebrow: '5 Corredores · Norte a Sul', title: 'Presença em todos os corredores estratégicos' },
		{ eyebrow: 'HSSE · Rastreabilidade · Compliance', title: 'Rigor documental em cada operação' }
	];

	const heroImages = [
		'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1600&q=80&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80&auto=format&fit=crop'
	];

	let current = $state(0);
	let fading = $state(false);

	function goTo(i: number) {
		if (fading || i === current) return;
		fading = true;
		setTimeout(() => { current = i; fading = false; }, 350);
	}

	onMount(() => {
		const id = setInterval(() => goTo((current + 1) % slides.length), 5500);
		return () => clearInterval(id);
	});

	const services = [
		{ num: '01', id: 'procurement', title: 'Procurement', desc: 'Strategic sourcing, qualificação de fornecedores, aquisição de materiais críticos e consolidação de cargas com controlo documental completo.' },
		{ num: '02', id: 'shipchandler', title: 'Shipchandler & Suporte Marítimo', desc: 'Abastecimento a navios, plataformas e rebocadores com víveres, PPE, lubrificantes e material de segurança dentro das janelas portuárias.' },
		{ num: '03', id: 'crew-change', title: 'Crew Change & Mobilização', desc: 'Rotação de tripulação, transporte, gestão de documentação e coordenação door-to-site sem downtime operacional.' }
	];

	const values = [
		{ title: 'Integridade', desc: 'Cumprimos o que assinamos, mesmo quando ninguém está a verificar.' },
		{ title: 'Rastreabilidade', desc: 'Cada processo é documentado do pedido à entrega.' },
		{ title: 'Resposta', desc: 'Operações críticas exigem tempo de reacção medido em horas.' },
		{ title: 'Segurança', desc: 'Cultura HSSE aplicada sem excepção, em qualquer corredor.' }
	];

	const corridors = ['Cabinda', 'Soyo', 'Ambriz', 'Luanda', 'Lobito'];

	const commitments = [
		'Resposta rápida',
		'Cobertura nacional',
		'Rastreabilidade total',
		'Confidencialidade',
		'Cultura HSSE',
		'Interlocutor único'
	];

	const news = [
		{
			cat: 'Procurement & Supply Chain',
			title: 'Qualificação de fornecedores locais: o que os operadores de O&G exigem hoje',
			excerpt: 'Os operadores internacionais aumentaram significativamente os requisitos de qualificação para fornecedores locais em Angola.',
			img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop'
		},
		{
			cat: 'Operações Offshore',
			title: 'Crew change em Angola: as janelas operacionais que ninguém explica',
			excerpt: 'A coordenação de crew change nos corredores angolanos tem particularidades que a documentação técnica raramente cobre.',
			img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop'
		}
	];
</script>

<svelte:head>
	<title>Ondas Marítimas — Procurement, Shipchandler & Suporte Offshore em Angola</title>
	<meta name="description" content="Portfólio integrado de procurement, shipchandler e mobilização logística para operadores marítimos, offshore e industriais na costa angolana." />
</svelte:head>

<!-- HERO -->
<section class="relative h-[56vw] min-h-[420px] max-h-[700px] overflow-hidden bg-gray-900">
	{#each heroImages as img, i}
		<div
			class="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
			style="background-image: url('{img}'); opacity: {i === current ? 1 : 0};"
		></div>
	{/each}
	<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>

	<!-- Arrow right -->
	<button
		onclick={() => goTo((current + 1) % slides.length)}
		class="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
		aria-label="Próximo slide"
	>
		<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<div class="relative h-full flex flex-col justify-end pb-14 max-w-7xl mx-auto px-6">
		<div class="max-w-2xl">
			<p
				class="text-lg text-2xl text-gray-300/90 font-semibold tracking-[0.25em] uppercase mb-3 transition-opacity duration-300"
				class:opacity-0={fading}
			>
				{slides[current].eyebrow}
			</p>
			<h1
				class="text-5xl md:text-6xl lg:text-7xl font-display font-normal text-white leading-[1.1] transition-all duration-300"
				class:opacity-0={fading}
				class:translate-y-2={fading}
			>
				{slides[current].title}
			</h1>
		</div>
		<div class="flex gap-2 mt-8">
			{#each slides as _, i}
				<button
					onclick={() => goTo(i)}
					aria-label="Slide {i + 1}"
					class="h-0.5 transition-all duration-300 {i === current ? 'w-10 bg-white' : 'w-5 bg-white/35 hover:bg-white/60'}"
				></button>
			{/each}
		</div>
	</div>
</section>

<!-- SOBRE NÓS -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
			<div>
				<p class="section-eyebrow mb-3">Sobre Nós</p>
				<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 mb-6 leading-tight">
					Parceiro de referência em procurement e suporte marítimo em Angola
				</h2>
				<p class="text-gray-600 text-base leading-relaxed mb-5">
					A Ondas Marítimas nasceu em 2015 de uma lacuna concreta no sector marítimo angolano: a ausência de um parceiro único capaz de coordenar procurement, shipchandler e mobilização de pessoal com o mesmo rigor documental e HSSE que os operadores internacionais de óleo & gás já exigiam.
				</p>
				<p class="text-gray-500 text-base leading-relaxed mb-8">
					Consolidámos presença nos cinco principais corredores — Cabinda, Soyo, Ambriz, Luanda e Lobito — assentes num único princípio: parceria contínua em vez de fornecimento pontual.
				</p>
				<Stripes count={20} height="h-12" />
			</div>
			<!-- Photo mosaic -->
			<div class="grid grid-cols-2 gap-3">
				<div class="col-span-2 aspect-[16/7] overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&auto=format&fit=crop"
						alt="Porto de operações"
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="aspect-square overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=500&q=80&auto=format&fit=crop"
						alt="Plataforma offshore"
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="aspect-square overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80&auto=format&fit=crop"
						alt="Equipa de operações"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SERVIÇOS -->
<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-6">
		<div class="mb-12">
			<p class="section-eyebrow mb-3">Serviços & Classe</p>
			<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 max-w-xl leading-tight">
				Entregámos soluções integradas a operadores de vários sectores
			</h2>
			<p class="text-gray-500 text-base mt-4 max-w-2xl leading-relaxed">
				Todos os serviços coordenados sob um único interlocutor, reduzindo o número de fornecedores que a vossa operação precisa de gerir.
			</p>
		</div>
		<div class="divide-y divide-gray-200 border-y border-gray-200">
			{#each services as svc}
				<div class="py-8 grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-6 items-center group hover:bg-white transition-colors px-2 -mx-2">
					<div class="text-brand-navy/25 text-5xl font-display font-normal leading-none group-hover:text-brand-navy/50 transition-colors">{svc.num}</div>
					<div>
						<h3 class="text-xl font-display font-normal text-gray-900 mb-1.5">{svc.title}</h3>
						<p class="text-gray-500 text-sm leading-relaxed max-w-lg">{svc.desc}</p>
					</div>
					<a href="/servicos#{svc.id}" class="text-brand-navy text-sm font-semibold flex items-center gap-2 shrink-0 hover:gap-3 transition-all">
						Saber mais
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</div>
			{/each}
		</div>
		<div class="flex justify-end mt-4">
			<Stripes count={22} height="h-10" />
		</div>
	</div>
</section>

<!-- COMPROMISSO — imagem de fundo com cards -->
<section class="relative overflow-hidden">
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop')"
	></div>
	<div class="absolute inset-0 bg-gray-900/70"></div>
	<div class="relative max-w-7xl mx-auto px-6 py-24">
		<div class="max-w-xs">
			<p class="text-brand-cyan text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">Compromisso & Qualidade</p>
			<h2 class="text-3xl md:text-4xl font-display font-normal text-white mb-6 leading-tight">
				Integramos rigor e segurança em cada operação
			</h2>
			<div class="space-y-2">
				{#each commitments.slice(0, 3) as c}
					<div class="bg-brand-navy px-5 py-3 flex items-center gap-3">
						<div class="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
						<span class="text-white text-sm font-semibold">{c}</span>
					</div>
				{/each}
			</div>
			<a href="/compromisso" class="inline-flex items-center gap-2 mt-6 text-brand-cyan-light text-sm font-semibold hover:text-white transition-colors">
				Saber mais
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- CORREDORES -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="mb-10">
			<p class="section-eyebrow mb-3">Cobertura</p>
			<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 leading-tight">Cinco corredores, norte a sul</h2>
		</div>
		<div class="grid grid-cols-5 gap-px bg-gray-200 border border-gray-200">
			{#each corridors as c, i}
				<div class="bg-white p-6 text-center hover:bg-gray-50 transition-colors group">
					<div class="text-gray-300 text-xs font-mono mb-2">0{i + 1}</div>
					<div class="text-gray-900 font-display font-normal text-base group-hover:text-brand-navy transition-colors">{c}</div>
				</div>
			{/each}
		</div>
		<div class="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
			<p class="text-gray-500 text-sm max-w-lg">Sincronização operacional total com o cliente em todos os pontos de entrada e saída de carga.</p>
			<a href="/cobertura" class="btn-outline shrink-0">Ver cobertura</a>
		</div>
	</div>
</section>

<!-- CLIENTES -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-6">
		<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
			<div>
				<p class="section-eyebrow mb-2">Clientes</p>
				<h2 class="text-2xl md:text-3xl font-display font-normal text-gray-900">Parceiros de confiança em Angola</h2>
			</div>
			<a href="/clientes" class="btn-outline shrink-0">Ver todos</a>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each ['Óleo & Gás', 'Marítimo', 'Industrial', 'Logística & Freight'] as s}
				<div class="border border-gray-200 bg-white px-6 py-5 text-center hover:border-brand-cyan hover:bg-brand-cyan-pale transition-colors group">
					<div class="text-gray-900 font-semibold text-sm group-hover:text-brand-navy transition-colors">{s}</div>
				</div>
			{/each}
		</div>
		<div class="mt-8">
			<Stripes count={24} height="h-10" />
		</div>
	</div>
</section>

<!-- SPLIT CTA -->
<section class="grid grid-cols-1 md:grid-cols-2">
	<div class="relative h-64 md:h-auto overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop"
			alt="Navio de carga"
			class="w-full h-full object-cover"
		/>
	</div>
	<div class="bg-brand-navy px-10 py-14 flex flex-col justify-center">
		<p class="text-brand-cyan-light text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">Contacto</p>
		<h2 class="text-3xl font-display font-normal text-white mb-4 leading-tight">
			Integre a nossa base de parceiros de serviço
		</h2>
		<p class="text-brand-cyan-pale text-sm leading-relaxed mb-8">
			Colocamos à disposição a nossa experiência, capacidade logística e profissionalismo para a vossa operação.
		</p>
		<a href="/contactos" class="self-start inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-brand-cyan-pale transition-colors">
			Agendar reunião
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>

<!-- INSIGHTS -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="mb-10">
			<p class="section-eyebrow mb-3">Insights</p>
			<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 leading-tight">
				Leituras sobre procurement marítimo e logística offshore
			</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each news as n}
				<article class="group">
					<div class="aspect-video overflow-hidden mb-5">
						<img
							src={n.img}
							alt={n.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
					</div>
					<p class="section-eyebrow mb-2">{n.cat}</p>
					<h3 class="text-xl font-display font-normal text-gray-900 mb-3 leading-snug group-hover:text-brand-navy transition-colors">{n.title}</h3>
					<p class="text-gray-500 text-sm leading-relaxed mb-4">{n.excerpt}</p>
					<a href="/insights" class="text-brand-navy text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
						Ler artigo
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>
