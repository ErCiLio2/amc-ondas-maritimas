<script lang="ts">
	import Stripes from '$lib/components/Stripes.svelte';

	const values = [
		{ title: 'Integridade', desc: 'Cumprimos o que assinamos, mesmo quando ninguém está a verificar.' },
		{ title: 'Rastreabilidade', desc: 'Cada processo é documentado do pedido à entrega.' },
		{ title: 'Resposta', desc: 'Operações críticas exigem tempo de reacção medido em horas.' },
		{ title: 'Segurança', desc: 'Cultura HSSE aplicada sem excepção, em qualquer corredor.' },
		{ title: 'Confidencialidade', desc: 'A informação do cliente é tratada como própria.' }
	];

	const governance = [
		{ title: 'Estrutura de decisão e aprovação', desc: 'Separação clara de responsabilidades comerciais, operacionais e financeiras com aprovação hierárquica documentada.' },
		{ title: 'Qualificação e auditoria de fornecedores', desc: 'Cada fornecedor é auditado internamente para garantir conformidade documental e melhor relação custo-benefício.' },
		{ title: 'Gestão de conflitos de interesse', desc: 'Políticas activas de prevenção e divulgação de conflitos de interesse em todas as relações comerciais.' }
	];
</script>

<svelte:head>
	<title>Sobre Nós — Ondas Marítimas</title>
	<meta name="description" content="Visão, missão, valores, história e governação corporativa da Ondas Marítimas desde 2015." />
</svelte:head>

<!-- PAGE HERO -->
<section class="py-16 bg-gray-50 border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<p class="section-eyebrow mb-3">Sobre Nós</p>
		<h1 class="section-title max-w-2xl">As nossas colaborações são um testemunho de confiança, fiabilidade e sucesso partilhado</h1>
	</div>
</section>

<!-- VISÃO, MISSÃO, VALORES -->
<section id="visao" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
			<div class="border-t-2 border-brand-navy pt-8">
				<h2 class="section-eyebrow mb-4">Visão</h2>
				<p class="text-gray-600 text-base leading-relaxed">
					Ser o parceiro de referência em procurement, shipchandler e suporte operacional na costa angolana, reconhecido pela fiabilidade, rastreabilidade e capacidade de resposta em operações críticas.
				</p>
			</div>
			<div class="border-t-2 border-brand-navy pt-8">
				<h2 class="section-eyebrow mb-4">Missão</h2>
				<p class="text-gray-600 text-base leading-relaxed">
					Garantir que as operações dos nossos clientes nunca param por falta de material, pessoal ou suporte logístico — com processos auditáveis, cumprimento HSSE e cobertura em todos os corredores estratégicos.
				</p>
			</div>
			<div class="border-t-2 border-brand-navy pt-8">
				<h2 class="section-eyebrow mb-4">Valores</h2>
				<ul class="space-y-2">
					{#each values as val}
						<li>
							<span class="text-gray-900 font-semibold text-sm">{val.title}</span>
							<span class="text-gray-500 text-sm"> — {val.desc}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<Stripes count={22} height="h-12" />
	</div>
</section>

<!-- HISTÓRIA -->
<section id="historia" class="py-20 bg-gray-50 border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
			<div>
				<p class="section-eyebrow mb-4">Nossa História</p>
				<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 mb-8 leading-tight">
					Desde 2015, a operar onde a operação não pode parar
				</h2>
				<p class="text-gray-600 text-base leading-relaxed mb-5">
					A Ondas Marítimas nasceu em 2015 de uma lacuna concreta no sector marítimo angolano: a ausência de um parceiro único capaz de coordenar procurement, shipchandler e mobilização de pessoal com o mesmo rigor documental e HSSE que os operadores internacionais de óleo & gás já exigiam.
				</p>
				<p class="text-gray-500 text-base leading-relaxed mb-5">
					Consolidámos presença nos cinco principais corredores — Cabinda, Soyo, Ambriz, Luanda e Lobito — assentes num único princípio: parceria contínua em vez de fornecimento pontual.
				</p>
				<div class="mt-8 border border-gray-200 bg-white p-8">
					<p class="section-eyebrow mb-6">Marco fundador</p>
					<div class="flex gap-6 items-start">
						<div class="text-6xl font-display font-normal text-gray-100 leading-none select-none">2015</div>
						<div>
							<div class="text-gray-900 font-semibold mb-1">Fundação</div>
							<div class="text-gray-500 text-sm leading-relaxed">Constituição da Ondas Marítimas — Serviços Marítimos, Lda, com foco inicial nos corredores de Luanda e Lobito.</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Images -->
			<div class="grid grid-cols-2 gap-3">
				<div class="col-span-2 aspect-[16/8] overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop"
						alt="Plataforma offshore Angola"
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="aspect-square overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80&auto=format&fit=crop"
						alt="Porto de Luanda"
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="aspect-square overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80&auto=format&fit=crop"
						alt="Navio de suporte"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- GOVERNAÇÃO -->
<section id="governacao" class="py-20 bg-white border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<div class="mb-12">
			<p class="section-eyebrow mb-3">Governação Corporativa</p>
			<h2 class="section-title max-w-xl">Como operamos</h2>
			<p class="text-gray-500 text-base mt-4 max-w-2xl leading-relaxed">
				Estrutura de governação que separa responsabilidades comerciais, operacionais e financeiras, com aprovação hierárquica documentada para contratos, pagamentos e fornecedores. Cada aquisição é auditada internamente.
			</p>
		</div>
		<div class="divide-y divide-gray-200 border-y border-gray-200">
			{#each governance as g}
				<div class="py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
					<h3 class="text-gray-900 font-display font-normal text-lg leading-snug">{g.title}</h3>
					<p class="text-gray-500 text-base leading-relaxed">{g.desc}</p>
				</div>
			{/each}
		</div>
		<div class="mt-6 flex justify-end">
			<Stripes count={20} height="h-10" />
		</div>
	</div>
</section>

<!-- SPLIT CTA -->
<section class="grid grid-cols-1 md:grid-cols-2">
	<div class="relative h-56 md:h-auto overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop"
			alt="Equipa Ondas Marítimas"
			class="w-full h-full object-cover"
		/>
	</div>
	<div class="bg-brand-navy px-10 py-14 flex flex-col justify-center">
		<h2 class="text-3xl font-display font-normal text-white mb-4">Quer trabalhar com a Ondas Marítimas?</h2>
		<p class="text-brand-cyan-pale text-sm leading-relaxed mb-8">Contacte-nos para agendar uma reunião de apresentação e conhecer a nossa capacidade operacional.</p>
		<a href="/contactos" class="self-start inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-brand-cyan-pale transition-colors">
			Agendar reunião
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
