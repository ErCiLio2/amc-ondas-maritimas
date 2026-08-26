<script lang="ts">
	import Stripes from '$lib/components/Stripes.svelte';
</script>

<svelte:head>
	<title>Compliance — Ondas Marítimas</title>
</svelte:head>

<section class="py-16 bg-gray-50 border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<p class="section-eyebrow mb-3">Compliance</p>
		<h1 class="section-title max-w-2xl">A nossa abordagem — ética e transparência em cada operação</h1>
	</div>
</section>

<!-- ANTICORRUPÇÃO -->
<section id="anticorrupcao" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
			<div>
				<p class="section-eyebrow mb-3">Política Anticorrupção</p>
				<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 mb-6 leading-tight">Tolerância zero</h2>
				<p class="text-gray-600 text-base leading-relaxed mb-5">
					A Ondas Marítimas mantém uma política de tolerância zero a suborno, corrupção e pagamentos de facilitação, em qualquer jurisdição onde opera.
				</p>
				<p class="text-gray-500 text-base leading-relaxed mb-5">
					Esta política vincula colaboradores e parceiros comerciais nas relações com fornecedores, autoridades portuárias e entidades públicas.
				</p>
				<p class="text-gray-500 text-base leading-relaxed">
					Denúncias podem ser reportadas de forma confidencial através dos canais de contacto institucionais.
				</p>
			</div>
			<div class="space-y-3">
				{#each [
					{ title: 'Suborno', desc: 'Proibição absoluta de oferecer, prometer ou aceitar qualquer benefício indevido.' },
					{ title: 'Corrupção', desc: 'Tolerância zero em qualquer forma de corrupção activa ou passiva.' },
					{ title: 'Pagamentos de facilitação', desc: 'Proibidos em todas as jurisdições e em todas as circunstâncias.' },
					{ title: 'Denúncia confidencial', desc: 'Canal dedicado para reporte de situações suspeitas por colaboradores e parceiros.' }
				] as item}
					<div class="border-l-2 border-brand-navy pl-5 py-3">
						<div class="text-gray-900 font-semibold mb-1">{item.title}</div>
						<div class="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="mt-10">
			<Stripes count={22} height="h-10" />
		</div>
	</div>
</section>

<!-- PROTECÇÃO DE DADOS -->
<section id="dados" class="py-20 bg-gray-50 border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
			<div class="lg:order-2">
				<p class="section-eyebrow mb-3">Protecção de Dados</p>
				<h2 class="text-3xl md:text-4xl font-display font-normal text-gray-900 mb-6 leading-tight">Tratamento de dados</h2>
				<p class="text-gray-600 text-base leading-relaxed mb-5">
					A Ondas Marítimas trata dados pessoais e informação comercial em conformidade com a Lei n.º 22/11, de 17 de Junho — Lei da Protecção de Dados Pessoais de Angola.
				</p>
				<p class="text-gray-500 text-base leading-relaxed mb-5">
					Os princípios orientadores são: necessidade, confidencialidade e limitação de finalidade.
				</p>
				<p class="text-gray-500 text-base leading-relaxed">
					Documentos, manifestos e informação de tripulação são tratados sob acordos de confidencialidade e retidos apenas pelo período necessário à operação.
				</p>
			</div>
			<div class="lg:order-1 space-y-3">
				{#each [
					{ title: 'Base legal', desc: 'Lei n.º 22/11, de 17 de Junho — Lei da Protecção de Dados Pessoais de Angola.' },
					{ title: 'Princípios', desc: 'Necessidade, confidencialidade e limitação de finalidade em todo o tratamento.' },
					{ title: 'Acordos de confidencialidade', desc: 'Toda a informação operacional é coberta por NDA antes do início da relação comercial.' },
					{ title: 'Retenção de dados', desc: 'Os dados são retidos apenas pelo período necessário à operação ou obrigações legais.' }
				] as item}
					<div class="border-l-2 border-brand-navy pl-5 py-3">
						<div class="text-gray-900 font-semibold mb-1">{item.title}</div>
						<div class="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="py-12 bg-brand-navy">
	<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
		<h2 class="text-2xl font-display font-normal text-white">Questões sobre compliance? Contacte os nossos canais institucionais.</h2>
		<a href="/contactos" class="inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-brand-cyan-pale transition-colors whitespace-nowrap">
			Contactar
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
