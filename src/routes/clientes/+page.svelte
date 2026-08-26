<script lang="ts">
	import Stripes from '$lib/components/Stripes.svelte';

	const sectors = [
		{ label: 'Óleo & Gás', desc: 'Operadores de exploração e produção offshore, empresas de serviços well e intervenção.' },
		{ label: 'Marítimo', desc: 'Armadores, operadores de embarcações de suporte, rebocadores e ferry services.' },
		{ label: 'Industrial', desc: 'Empresas de construção civil, mineração e indústrias que operam em áreas remotas.' },
		{ label: 'Logística & Freight', desc: 'Operadores logísticos, transitários e agentes de carga que necessitam de suporte local.' }
	];

	const proofPoints = [
		{ value: '10+', label: 'Anos de operação contínua' },
		{ value: '5', label: 'Corredores activos' },
		{ value: '3', label: 'Linhas de serviço integradas' },
		{ value: '24h', label: 'Resposta a urgências' }
	];

	const benefits = [
		'Um único fornecedor para procurement, shipchandler e crew change',
		'Documentação auditável em cada transacção',
		'Cobertura nos cinco corredores estratégicos',
		'Resposta a urgências em 24 horas',
		'Interlocutor dedicado da negociação à entrega'
	];
</script>

<svelte:head>
	<title>Clientes — Ondas Marítimas</title>
</svelte:head>

<!-- HERO -->
<section class="relative overflow-hidden">
	<div class="absolute inset-0">
		<img src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1600&q=80&auto=format&fit=crop" alt="Colaborações" class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gray-900/60"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-6 py-28">
		<p class="section-eyebrow mb-4 text-red-400">Parcerias sólidas</p>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight max-w-2xl">
			As nossas colaborações são um testemunho de confiança, fiabilidade e sucesso partilhado
		</h1>
		<p class="text-white/60 text-lg mt-6 max-w-xl leading-relaxed">
			À Ondas Marítimas atribuímos o nosso sucesso às parcerias e colaborações que cultivámos com os nossos estimados clientes e parceiros.
		</p>
		<div class="mt-4">
			<Stripes count={20} height="h-10" />
		</div>
	</div>
</section>

<!-- SECTORES -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="mb-12">
			<p class="section-eyebrow mb-3">Sectores servidos</p>
			<h2 class="section-title max-w-xl">A quem servimos</h2>
		</div>
		<div class="divide-y divide-gray-200 border-y border-gray-200">
			{#each sectors as s}
				<div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 group hover:bg-gray-50 transition-colors px-2 -mx-2">
					<h3 class="text-xl font-display font-bold text-gray-900 group-hover:text-red-600 transition-colors">{s.label}</h3>
					<p class="text-gray-500 text-base leading-relaxed">{s.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- NÚMEROS -->
<section class="py-20 bg-gray-50 border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-12">
			<p class="section-eyebrow mb-3">Presença no mercado</p>
			<h2 class="section-title">Resultados em números</h2>
		</div>
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
			{#each proofPoints as p}
				<div class="bg-white p-10 text-center">
					<div class="text-5xl font-display font-bold text-gray-900 mb-3">{p.value}</div>
					<div class="text-gray-500 text-sm">{p.label}</div>
				</div>
			{/each}
		</div>
		<div class="mt-8 flex justify-center">
			<Stripes count={22} height="h-10" />
		</div>
	</div>
</section>

<!-- MODELO DE PARCERIA -->
<section class="py-20 bg-white border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
		<div>
			<p class="section-eyebrow mb-4">Relações com clientes</p>
			<h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
				Parceria contínua, não fornecimento pontual
			</h2>
			<p class="text-gray-600 text-base leading-relaxed mb-5">
				A relação que estabelecemos não é de fornecedor — é de parceiro logístico integrado que conhece a operação do cliente e responde com a urgência que ela exige.
			</p>
			<p class="text-gray-400 text-sm leading-relaxed italic">
				Operamos sob acordos de confidencialidade. Não divulgamos nomes de clientes sem autorização explícita.
			</p>
		</div>
		<div class="border border-gray-200 bg-gray-50 p-8">
			<p class="section-eyebrow mb-6">O que os nossos clientes ganham</p>
			<ul class="space-y-4">
				{#each benefits as b}
					<li class="flex items-start gap-3">
						<svg class="w-4 h-4 text-red-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
						<span class="text-gray-600 text-sm leading-relaxed">{b}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- SPLIT CTA -->
<section class="grid grid-cols-1 md:grid-cols-2">
	<div class="relative h-56 md:h-auto overflow-hidden">
		<img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&auto=format&fit=crop" alt="Porto de operações" class="w-full h-full object-cover" />
	</div>
	<div class="bg-red-600 px-10 py-14 flex flex-col justify-center">
		<p class="text-red-200 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">Torne-se cliente</p>
		<h2 class="text-3xl font-display font-bold text-white mb-4">Trabalhe com a Ondas Marítimas</h2>
		<p class="text-red-100 text-sm leading-relaxed mb-8">Junte-se aos operadores marítimos, offshore e industriais que confiam na Ondas Marítimas para as suas operações em Angola.</p>
		<a href="/contactos" class="self-start inline-flex items-center gap-2 bg-white text-red-600 font-bold text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-red-50 transition-colors">
			Contactar agora
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
