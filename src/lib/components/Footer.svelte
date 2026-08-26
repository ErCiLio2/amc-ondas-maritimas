<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="bg-brand-navy text-white">
	<div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
		<!-- Brand -->
		<div class="sm:col-span-2 lg:col-span-1">
			<a href="/" class="flex flex-col leading-none mb-6">
				<span class="text-white font-display font-normal text-xl tracking-tight">Ondas Marítimas</span>
				<span class="text-brand-cyan-light text-[9px] tracking-[0.18em] uppercase mt-1">Serviços Marítimos, Lda</span>
			</a>
			<p class="text-brand-cyan-pale text-sm leading-relaxed max-w-xs">
				Procurement, shipchandler e mobilização logística para operações marítimas e offshore na costa angolana.
			</p>
		</div>

		<!-- Sobre -->
		<div>
			<h4 class="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Sobre a Empresa</h4>
			<ul class="space-y-2.5">
				{#each [['Sobre Nós', '/sobre-nos'], ['Serviços', '/servicos'], ['Cobertura', '/cobertura'], ['Clientes', '/clientes']] as [label, href]}
					<li><a {href} class="text-brand-cyan-pale hover:text-white text-sm transition-colors">{label}</a></li>
				{/each}
			</ul>
		</div>

		<!-- Links úteis -->
		<div>
			<h4 class="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Links Úteis</h4>
			<ul class="space-y-2.5">
				{#each [['Contactos', '/contactos'], ['Compromisso & Qualidade', '/compromisso'], ['Insights', '/insights'], ['Compliance', '/compliance']] as [label, href]}
					<li><a {href} class="text-brand-cyan-pale hover:text-white text-sm transition-colors">{label}</a></li>
				{/each}
			</ul>
		</div>

		<!-- Contacto -->
		<div>
			<h4 class="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Contacto</h4>
			<ul class="space-y-3">
				<li class="flex items-start gap-3">
					<svg class="w-4 h-4 text-brand-cyan-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span class="text-brand-cyan-pale text-sm leading-relaxed">Rua dos Heróis, Ed. 18, 2º Esq.<br />Bairro Azul, Luanda</span>
				</li>
				<li class="flex items-center gap-3">
					<svg class="w-4 h-4 text-brand-cyan-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					<div>
						<a href="tel:+244934556090" class="text-brand-cyan-pale hover:text-white text-sm block transition-colors">+244 934 556 090</a>
						<a href="tel:+244942716804" class="text-brand-cyan-pale hover:text-white text-sm block transition-colors">+244 942 716 804</a>
					</div>
				</li>
				<li class="flex items-center gap-3">
					<svg class="w-4 h-4 text-brand-cyan-light shrink-0" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
					<a href="https://www.linkedin.com" target="_blank" rel="noopener" class="text-brand-cyan-pale hover:text-white text-sm transition-colors">LinkedIn</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-brand-cyan">
		<div class="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
			<p class="text-brand-cyan-light text-xs">Copyright © Ondas Marítimas {year}</p>
			<div class="flex gap-5">
				<a href="/compliance#anticorrupcao" class="text-brand-cyan-light hover:text-white text-xs transition-colors">Política Anticorrupção</a>
				<a href="/compliance#dados" class="text-brand-cyan-light hover:text-white text-xs transition-colors">Protecção de Dados</a>
			</div>
		</div>
	</div>
</footer>
