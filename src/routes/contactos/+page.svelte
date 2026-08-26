<script lang="ts">
	let name = $state('');
	let company = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let sent = $state(false);
	let sending = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		sending = true;
		await new Promise((r) => setTimeout(r, 1000));
		sent = true;
		sending = false;
	}

	const locations = [
		{
			city: 'Luanda',
			entity: 'Ondas Marítimas — Serviços Marítimos, Lda',
			address: 'Rua dos Heróis, Edifício 18, 2º Andar Esq., Bairro Azul, Ingombota, Luanda',
			phones: ['+244 934 556 090', '+244 942 716 804', '+244 921 717 744']
		}
	];
</script>

<svelte:head>
	<title>Contactos — Ondas Marítimas</title>
</svelte:head>

<!-- HERO -->
<section class="py-16 bg-gray-50 border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-6">
		<p class="section-eyebrow mb-3">Contactos</p>
		<h1 class="section-title max-w-2xl">Vamos agendar uma reunião de apresentação</h1>
	</div>
</section>

<!-- FORM + INFO -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
			<!-- Info left -->
			<div>
				<p class="text-gray-500 text-base leading-relaxed mb-10">
					Colocamos à disposição a nossa experiência, capacidade logística e profissionalismo para integrar a vossa base de fornecedores e parceiros de serviço. Preencha o formulário e a nossa equipa responderá no prazo de 24 horas úteis.
				</p>
				<div class="space-y-6">
					<div>
						<p class="section-eyebrow mb-2">Morada</p>
						<p class="text-gray-600 text-sm leading-relaxed">
							Rua dos Heróis, Edifício 18, 2º Andar Esq.<br />
							Bairro Azul, Ingombota<br />
							Luanda, Angola
						</p>
					</div>
					<div>
						<p class="section-eyebrow mb-2">Telefones</p>
						<div class="space-y-1">
							{#each ['+244 934 556 090', '+244 942 716 804', '+244 921 717 744'] as p}
								<a href="tel:{p.replace(/\s/g, '')}" class="block text-gray-600 hover:text-red-600 text-sm transition-colors">{p}</a>
							{/each}
						</div>
					</div>
					<div>
						<p class="section-eyebrow mb-2">Cobertura operacional</p>
						<div class="flex flex-wrap gap-2">
							{#each ['Cabinda', 'Soyo', 'Ambriz', 'Luanda', 'Lobito'] as c}
								<span class="px-3 py-1 border border-gray-200 text-gray-500 text-xs">{c}</span>
							{/each}
						</div>
					</div>
					<div class="border-t border-gray-100 pt-6">
						<p class="text-gray-400 text-xs leading-relaxed">
							Operamos sob acordos de confidencialidade. Toda a informação partilhada é tratada de acordo com a nossa Política de Protecção de Dados.
						</p>
					</div>
				</div>
			</div>

			<!-- Form right -->
			<div>
				<p class="section-eyebrow mb-6">Como podemos ajudar?</p>
				{#if sent}
					<div class="border border-gray-200 bg-gray-50 p-8">
						<div class="text-gray-900 font-bold text-lg mb-2">Mensagem recebida</div>
						<p class="text-gray-500 text-sm leading-relaxed">
							Entraremos em contacto no prazo de 24 horas úteis para confirmar a reunião.
						</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-4">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label class="block text-gray-500 text-xs mb-1.5" for="name">Nome</label>
								<input id="name" type="text" required bind:value={name} placeholder="Nome" class="w-full border border-gray-200 focus:border-red-500 px-4 py-3 text-gray-900 text-sm placeholder-gray-300 outline-none transition-colors bg-white" />
							</div>
							<div>
								<label class="block text-gray-500 text-xs mb-1.5" for="company">Empresa</label>
								<input id="company" type="text" bind:value={company} placeholder="Empresa" class="w-full border border-gray-200 focus:border-red-500 px-4 py-3 text-gray-900 text-sm placeholder-gray-300 outline-none transition-colors bg-white" />
							</div>
						</div>
						<div>
							<label class="block text-gray-500 text-xs mb-1.5" for="email">E-mail</label>
							<input id="email" type="email" required bind:value={email} placeholder="O seu e-mail" class="w-full border border-gray-200 focus:border-red-500 px-4 py-3 text-gray-900 text-sm placeholder-gray-300 outline-none transition-colors bg-white" />
						</div>
						<div>
							<label class="block text-gray-500 text-xs mb-1.5" for="phone">Telefone</label>
							<input id="phone" type="tel" bind:value={phone} placeholder="+244 9xx xxx xxx" class="w-full border border-gray-200 focus:border-red-500 px-4 py-3 text-gray-900 text-sm placeholder-gray-300 outline-none transition-colors bg-white" />
						</div>
						<div>
							<label class="block text-gray-500 text-xs mb-1.5" for="message">Mensagem</label>
							<textarea id="message" rows="5" bind:value={message} placeholder="Descreva a vossa operação e necessidades..." class="w-full border border-gray-200 focus:border-red-500 px-4 py-3 text-gray-900 text-sm placeholder-gray-300 outline-none transition-colors resize-none bg-white"></textarea>
						</div>
						<p class="text-gray-400 text-xs">* Todos os campos são obrigatórios</p>
						<button type="submit" disabled={sending} class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
							{sending ? 'A enviar...' : 'Enviar mensagem'}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- LOCATIONS -->
<section class="border-t border-gray-200 bg-gray-50">
	<div class="max-w-7xl mx-auto px-6 py-4">
		<p class="section-eyebrow mb-0 inline-block">As nossas localizações</p>
	</div>
	{#each locations as loc}
		<div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-gray-200">
			<h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900">{loc.city}</h2>
			<div>
				<p class="text-gray-900 font-semibold text-sm mb-1">{loc.entity}</p>
				<p class="text-gray-500 text-sm mb-3">{loc.address}</p>
				<div class="flex flex-wrap gap-4">
					{#each loc.phones as p}
						<a href="tel:{p.replace(/\s/g, '')}" class="text-red-600 hover:text-red-700 text-sm font-medium transition-colors">{p}</a>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</section>
