<script lang="ts">
	import Stripes from '$lib/components/Stripes.svelte';

	const pillars = [
		{ title: 'Resposta rápida', desc: 'Procurement inteligente e capacidade multi-sectorial que garante resposta a urgências operacionais no prazo de 24 horas, em qualquer corredor.' },
		{ title: 'Cobertura logística nacional', desc: 'Presença activa nos cinco corredores estratégicos da costa angolana — Cabinda, Soyo, Ambriz, Luanda e Lobito.' },
		{ title: 'Controlo de qualidade', desc: 'Rastreabilidade total do pedido à entrega, com documentação auditável em cada etapa do processo.' },
		{ title: 'Confidencialidade', desc: 'Compliance documental em cada contrato. A informação comercial e operacional do cliente é tratada com a mesma confidencialidade que a nossa própria.' },
		{ title: 'Cultura HSSE', desc: 'Padrões de segurança para ambientes de elevada criticidade, aplicados sem excepção em qualquer corredor e em qualquer tipo de operação.' },
		{ title: 'Atendimento personalizado', desc: 'Um único interlocutor, da negociação à execução. A mesma pessoa que negoceia é a que executa — sem passagem de pasta.' }
	];

	const hsse = [
		'Auditorias periódicas de conformidade',
		'Briefings de segurança por operação',
		'Rastreabilidade de equipamentos de segurança (PPE)',
		'Protocolos de resposta a incidentes',
		'Formação contínua de colaboradores'
	];

	const pipeline = ['Pedido', 'Qualificação', 'Compra', 'Logística', 'Entrega', 'Fecho documental'];
</script>

<svelte:head>
	<title>Compromisso & Qualidade — Ondas Marítimas</title>
</svelte:head>

<!-- HERO COM IMAGEM -->
<section class="relative overflow-hidden">
	<div class="absolute inset-0">
		<img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop" alt="HSSE operações" class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gray-900/65"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-6 py-28">
		<p class="text-brand-cyan text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">A nossa abordagem</p>
		<h1 class="text-4xl md:text-5xl font-display font-normal text-white leading-tight max-w-2xl mb-4">
			Comprometidos a proteger as pessoas e as operações em cada corredor
		</h1>
		<p class="text-white/55 text-base max-w-xl leading-relaxed">
			Reconhecemos a importância primordial da segurança e responsabilidade operacional. O nosso compromisso com estes valores está profundamente enraizado na nossa missão.
		</p>
	</div>
</section>

<!-- PILARES -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="mb-12">
			<p class="section-eyebrow mb-3">O que garantimos</p>
			<h2 class="section-title max-w-xl">Em cada operação</h2>
		</div>
		<div class="divide-y divide-gray-200 border-y border-gray-200">
			{#each pillars as p, i}
				<div class="py-8 grid grid-cols-1 md:grid-cols-[60px_1fr_2fr] gap-6 items-start group hover:bg-gray-50 transition-colors px-2 -mx-2">
					<div class="text-brand-navy/25 text-3xl font-display font-normal group-hover:text-brand-navy/50 transition-colors">0{i + 1}</div>
					<h3 class="text-gray-900 font-display font-normal text-lg leading-snug">{p.title}</h3>
					<p class="text-gray-500 text-base leading-relaxed">{p.desc}</p>
				</div>
			{/each}
		</div>
		<div class="mt-8 flex justify-end">
			<Stripes count={20} height="h-10" />
		</div>
	</div>
</section>

<!-- HSSE -->
<section class="py-20 bg-gray-50 border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
		<div>
			<p class="section-eyebrow mb-4">HSSE</p>
			<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 mb-6 leading-tight">
				Health, Safety, Security & Environment
			</h2>
			<p class="text-gray-600 text-base leading-relaxed mb-5">
				A cultura HSSE não é um certificado — é uma prática diária. Em cada entrega, em cada crew change, em cada procurement de material crítico, os padrões de segurança e saúde são tratados como não-negociáveis.
			</p>
			<p class="text-gray-500 text-sm leading-relaxed">
				Os nossos procedimentos são compatíveis com os requisitos HSSE dos principais operadores internacionais de óleo & gás presentes em Angola.
			</p>
		</div>
		<div class="space-y-3">
			{#each hsse as item}
				<div class="border-l-2 border-brand-navy pl-5 py-3 bg-white">
					<span class="text-gray-700 text-sm leading-relaxed">{item}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- RASTREABILIDADE PIPELINE -->
<section class="py-20 bg-white border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6 text-center">
		<p class="section-eyebrow mb-4">Rastreabilidade</p>
		<h2 class="section-title mb-4">Do pedido à entrega</h2>
		<p class="text-gray-500 text-base max-w-lg mx-auto mb-12 leading-relaxed">
			Cada aquisição é documentada do início ao fim. O cliente tem acesso a toda a cadeia documental — sem surpresas, sem lacunas.
		</p>
		<div class="flex flex-wrap justify-center gap-px bg-gray-200 border border-gray-200 max-w-4xl mx-auto">
			{#each pipeline as step, i}
				<div class="flex-1 min-w-[120px] bg-white p-6 text-center group hover:bg-gray-50 transition-colors">
					<div class="text-gray-300 text-xs font-mono mb-2">0{i + 1}</div>
					<div class="text-gray-900 font-semibold text-sm group-hover:text-brand-navy transition-colors">{step}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-14 bg-brand-navy">
	<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
		<h2 class="text-3xl font-display font-normal text-white">Quer verificar a nossa capacidade operacional?</h2>
		<a href="/contactos" class="inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-brand-cyan-pale transition-colors whitespace-nowrap">
			Solicitar reunião
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
