<script>
	import SkillCard from "$lib/SkillCard.svelte";
	import Java from "$lib/icons/Java.svelte";
	import Golang from "$lib/icons/Golang.svelte";
	import JavaScript from "$lib/icons/JavaScript.svelte";
	import Svelte from "$lib/icons/Svelte.svelte";

	import avatar from '../assets/avatar.avif'
</script>

<svelte:head>
	<title>Medzik</title>
	<meta name="description" content="I'm a self-taught programmer with a passion for open-source software. Currently working on LibrePass, a password manager, and using Fedora with KDE. Explore my portfolio for more projects and achievements.">
	<meta name="keywords" content="self-taught programmer, open-source software, LibrePass, password manager, Fedora, KDE, portfolio, projects, achievements">
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="max-w-[640px] variant-glass rounded-container-token p-6 grid grid-cols-3 gap-8 items-center shadow-xl">
		<img src={avatar} class="w-full aspect-square rounded-full" alt="Avatar" />

		<div class="col-span-2 space-y-2">
			<div class="text-on-primary-token text-lg opacity-75">Self-Taught Programmer</div>

			<div class="text-on-primary-token font-bold text-xl sm:text-3xl">Oskar</div>

			<div class="text-on-primary-token text-lg sm:text-2xl">Creating the Future</div>
		</div>
	</div>
</div>

<div class="min-h-full mx-auto flex justify-center items-center variant-filled-primary p-16">
	<div class="container space-y-10">
		<h2 class="h2 text-center card-header">Languages</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<SkillCard
				icon={Java}
				title="Java/Kotlin"
				description="After several years of writing code, Java and Kotlin seem to work best for me."
			/>

			<SkillCard
				icon={Golang}
				title="Go"
				description="Golang is my second favorite language because it is fast and friendly to write."
			/>

			<SkillCard
				icon={JavaScript}
				title="JavaScript"
				description="Unfortunately, the use of JavaScript is a must in web development."
			/>

			<SkillCard
				icon={Svelte}
				title="Svelte"
				description="However, sometimes when I need to write a website, I use Svelte."
			/>
		</div>
	</div>
</div>
