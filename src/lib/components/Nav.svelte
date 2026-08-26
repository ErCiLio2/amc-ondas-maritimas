<script lang="ts">
	import { page } from '$app/state';

	let mobileOpen = $state(false);

	const nav = [
		{
			label: 'Sobre Nós',
			href: '/sobre-nos',
			children: [
				{ label: 'Visão, Missão e Valores', href: '/sobre-nos#visao' },
				{ label: 'Nossa História', href: '/sobre-nos#historia' },
				{ label: 'Governação Corporativa', href: '/sobre-nos#governacao' }
			]
		},
		{
			label: 'Serviços',
			href: '/servicos',
			children: [
				{ label: 'Procurement', href: '/servicos#procurement' },
				{ label: 'Shipchandler & Suporte Marítimo', href: '/servicos#shipchandler' },
				{ label: 'Crew Change & Mobilização', href: '/servicos#crew-change' }
			]
		},
		{ label: 'Cobertura', href: '/cobertura' },
		{ label: 'Clientes', href: '/clientes' },
		{ label: 'Compromisso & Qualidade', href: '/compromisso' },
		{ label: 'Insights', href: '/insights' },
		{ label: 'Compliance', href: '/compliance' }
	];

	function isActive(href: string) {
		return page.url.pathname.startsWith(href);
	}
</script>

<!-- Utility bar — brand navy -->
<div class="bg-brand-navy text-white text-[11px] tracking-wide">
	<div class="max-w-7xl mx-auto px-6 h-9 flex items-center justify-end gap-6">
		<a href="/compromisso" class="text-brand-cyan-light hover:text-white transition-colors">Compromisso & Qualidade</a>
		<span class="text-white/20">|</span>
		<a href="/compliance" class="text-brand-cyan-light hover:text-white transition-colors">Compliance</a>
	</div>
</div>

<!-- Main nav -->
<header class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
	<div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

		<!-- Logo -->
		<a href="/" class="flex items-center gap-3 shrink-0">
			<img
				src="/logo.png"
				alt="Ondas Marítimas"
				class="h-9 w-auto object-contain"
			/>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden lg:flex items-center gap-7">
			{#each nav as item}
				{#if item.children}
					<div class="relative group">
						<a
							href={item.href}
							class="text-sm font-medium flex items-center gap-1 transition-colors {isActive(item.href) ? 'text-brand-navy' : 'text-gray-700 hover:text-brand-navy'}"
						>
							{item.label}
							<svg class="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</a>
						<div class="absolute top-full left-0 mt-1 w-60 bg-white border border-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 translate-y-1 group-hover:translate-y-0">
							{#each item.children as child}
								<a
									href={child.href}
									class="block px-5 py-3 text-sm text-gray-600 hover:text-brand-navy hover:bg-gray-50 transition-colors"
								>
									{child.label}
								</a>
							{/each}
						</div>
					</div>
				{:else}
					<a
						href={item.href}
						class="text-sm font-medium transition-colors {isActive(item.href) ? 'text-brand-navy' : 'text-gray-700 hover:text-brand-navy'}"
					>
						{item.label}
					</a>
				{/if}
			{/each}
		</nav>

		<!-- Right -->
		<div class="flex items-center gap-3">
			<a href="/contactos" class="hidden md:inline-flex btn-primary text-[11px] py-2 px-5">
				Agendar Reunião
			</a>
			<button class="hidden lg:flex w-9 h-9 items-center justify-center text-gray-400 hover:text-brand-navy transition-colors" aria-label="Pesquisar">
				<svg class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>
			<button class="lg:hidden text-gray-700 p-1" onclick={() => (mobileOpen = !mobileOpen)} aria-label="Menu">
				{#if mobileOpen}
					<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile nav -->
	{#if mobileOpen}
		<div class="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
			{#each nav as item}
				<a href={item.href} class="block py-2.5 text-sm text-gray-700 hover:text-brand-navy transition-colors" onclick={() => (mobileOpen = false)}>
					{item.label}
				</a>
			{/each}
			<div class="pt-3">
				<a href="/contactos" class="btn-primary w-full justify-center" onclick={() => (mobileOpen = false)}>
					Agendar Reunião
				</a>
			</div>
		</div>
	{/if}
</header>
