<script lang="ts">
	import Stripes from '$lib/components/Stripes.svelte';

	const services = [
		{
			num: '01', id: 'procurement',
			title: 'Procurement',
			subtitle: 'Strategic sourcing e procurement técnico-comercial',
			img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop',
			imgAlt: 'Armazém e supply chain',
			items: [
				'Localização, qualificação e gestão de fornecedores',
				'Aquisição de materiais críticos e consumíveis industriais',
				'Consolidação de cargas e controlo documental',
				'Gestão de urgências operacionais e entregas door-to-door'
			]
		},
		{
			num: '02', id: 'shipchandler',
			title: 'Shipchandler & Suporte Marítimo',
			subtitle: 'Abastecimento e suporte a operações marítimas',
			img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop',
			imgAlt: 'Navio de carga no porto',
			items: [
				'Abastecimento a navios, embarcações offshore, plataformas e rebocadores',
				'Víveres, água potável e consumíveis de convés e máquina',
				'PPE, material de segurança e ferramentas',
				'Lubrificantes, cabos, mangueiras e material eléctrico',
				'Entregas time-critical dentro das janelas portuárias e exigências HSSE'
			]
		},
		{
			num: '03', id: 'crew-change',
			title: 'Crew Change & Mobilização',
			subtitle: 'Rotação de tripulação e mobilização de equipas técnicas',
			img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop',
			imgAlt: 'Equipa técnica offshore',
			items: [
				'Transporte terrestre e marítimo, transfers porto/aeroporto/base',
				'Gestão de bagagens, ferramentas e documentação de viagem',
				'Coordenação de janelas operacionais e suporte administrativo',
				'Acompanhamento door-to-site, sem downtime'
			]
		}
	];
</script>

<svelte:head>
	<title>Serviços — Ondas Marítimas</title>
	<meta name="description" content="Procurement, shipchandler e suporte marítimo, e crew change & mobilização — a classe de serviços integrada da Ondas Marítimas." />
</svelte:head>

<!-- HERO -->
<section class="py-16 bg-gray-50 border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<p class="section-eyebrow mb-3">Serviços & Classe</p>
		<h1 class="section-title max-w-2xl">Excelência numa classe de serviços integrada</h1>
		<p class="text-gray-500 text-base mt-4 max-w-xl leading-relaxed">
			Todos os serviços coordenados sob um único interlocutor, reduzindo o número de fornecedores que a vossa operação precisa de gerir.
		</p>
		<div class="mt-8">
			<Stripes count={22} height="h-10" />
		</div>
	</div>
</section>

<!-- LABEL CLASSE -->
<div class="bg-white border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-6 py-4">
		<p class="section-eyebrow">Serviços Marítimos e de Procurement</p>
	</div>
</div>

<!-- SERVICES -->
{#each services as svc, idx}
	<section id={svc.id} class="py-20 border-b border-gray-200 {idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
		<div class="max-w-7xl mx-auto px-6">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
				<!-- Text — alternates sides -->
				<div class="{idx % 2 !== 0 ? 'lg:order-2' : ''}">
					<div class="text-brand-navy/15 text-8xl font-display font-bold leading-none mb-1 select-none">{svc.num}</div>
					<h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">{svc.title}</h2>
					<p class="text-brand-navy text-[11px] font-semibold tracking-[0.2em] uppercase mb-8">{svc.subtitle}</p>
					<ul class="divide-y divide-gray-100">
						{#each svc.items as item}
							<li class="flex items-start gap-4 py-4">
								<svg class="w-4 h-4 text-brand-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
								<span class="text-gray-600 text-base leading-relaxed">{item}</span>
							</li>
						{/each}
					</ul>
					<div class="mt-8">
						<a href="/contactos" class="btn-primary">
							Solicitar proposta
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>
				</div>
				<!-- Image -->
				<div class="{idx % 2 !== 0 ? 'lg:order-1' : ''} aspect-[4/3] overflow-hidden">
					<img
						src={svc.img}
						alt={svc.imgAlt}
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- CTA -->
<section class="py-16 bg-brand-navy">
	<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
		<div>
			<h2 class="text-3xl font-display font-bold text-white">Todos os serviços, uma só equipa</h2>
			<p class="text-brand-cyan-pale text-sm mt-2 max-w-md">Cada linha opera com equipa própria mas partilha o mesmo padrão de rastreabilidade, compliance documental e cultura HSSE.</p>
		</div>
		<a href="/contactos" class="inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-brand-cyan-pale transition-colors whitespace-nowrap">
			Falar com a equipa
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
