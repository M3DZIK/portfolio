<script>
	import { ProgressBar } from "@skeletonlabs/skeleton";

	import DiJava from 'svelte-icons/di/DiJava.svelte'
	import DiGo from 'svelte-icons/di/DiGo.svelte'
	import DiJavascript from 'svelte-icons/di/DiJavascript1.svelte'
	import FaGithub from "svelte-icons/fa/FaGithub.svelte";
	import FaGitlab from "svelte-icons/fa/FaGitlab.svelte";
	import FaCreditCard from "svelte-icons/fa/FaCreditCard.svelte";
	import FaYoutube from "svelte-icons/fa/FaYoutube.svelte";
	import FaTelegram from "svelte-icons/fa/FaTelegram.svelte";
	import MdEmail from "svelte-icons/md/MdEmail.svelte";
	import MdSecurity from "svelte-icons/md/MdSecurity.svelte";

	import SkillCard from "$lib/SkillCard.svelte";
	import Svelte from "$lib/icons/Svelte.svelte";

	import avatar from '../assets/avatar.avif'
</script>

<svelte:head>
	<title>Medzik</title>
	<meta name="description" content="I'm a self-taught programmer with a passion for open-source software. Currently working on LibrePass, a password manager, and using Fedora with KDE. Explore my portfolio for more projects and achievements.">
	<meta name="keywords" content="self-taught programmer, open-source software, LibrePass, password manager, Fedora, KDE, portfolio, projects, achievements">
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="max-w-[640px] variant-glass rounded-container-token shadow-xl">
		<div class="grid grid-cols-3 gap-8 items-center p-6">
			<img src={avatar} class="w-full aspect-square rounded-full" alt="Avatar" />

			<div class="col-span-2 space-y-2">
				<div class="text-on-primary-token text-lg opacity-75">Self-Taught Programmer</div>

				<div class="text-on-primary-token font-bold text-xl sm:text-3xl">Oskar</div>

				<div class="text-on-primary-token text-lg sm:text-2xl">Creating the Future</div>
			</div>
		</div>

		<ProgressBar rounded="rounded-none" />

		<footer class="grid grid-cols-4 place-items-center p-6 gap-10">
			<a class="btn-icon bg-surface-200 p-2" href="https://github.com/M3DZIK">
				<FaGithub />
			</a>

			<a class="btn-icon bg-surface-200 p-2" href="https://gitlab.com/Medzik">
				<FaGitlab />
			</a>

			<a class="btn-icon bg-surface-200 p-2" href="mailto:me@medzik.dev">
				<MdEmail />
			</a>

			<a class="btn-icon bg-surface-200 p-2" href="https://liberapay.com/Medzik/">
				<FaCreditCard />
			</a>
		</footer>
	</div>
</div>

<div class="mx-auto flex justify-center items-center bg-primary-100 p-16">
	<div class="container space-y-10">
		<h2 class="h2 text-center card-header">Languages</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<SkillCard
				icon={DiJava}
				title="Java/Kotlin"
				description="After several years of writing code, Java and Kotlin seem to work best for me."
			/>

			<SkillCard
				icon={DiGo}
				title="Go"
				description="Golang is my second favorite language because it is fast and friendly to write."
			/>

			<SkillCard
				icon={DiJavascript}
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

<div class="mx-auto flex justify-center items-center bg-secondary-100 p-16">
	<div class="container space-y-10">
		<h2 class="h2 text-center card-header">My Project</h2>

		<div class="grid grid-cols-1 gap-4">
			<a href="https://librepass.medzik.dev" target="_blank">
				<SkillCard
					icon={MdSecurity}
					title="LibrePass"
					description="Currently, I'm developing LibrePass, a password manager, driven by the belief in online privacy and security. My goal is to create a secure and convenient tool for managing passwords."
				/>
			</a>
		</div>
	</div>
</div>

<div class="mx-auto flex justify-center items-center bg-tertiary-100 p-16">
	<div class="container space-y-10">
		<h2 class="h2 text-center card-header">Instances</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<a href="https://piped.medzik.dev" target="_blank">
				<SkillCard
					icon={FaYoutube}
					title="Piped"
					description="An alternative privacy-friendly YouTube frontend."
				/>
			</a>

			<a href="https://teledrive.medzik.dev" target="_blank">
				<SkillCard
					icon={FaTelegram}
					title="TeleDrive"
					description="Your free unlimited cloud storage service using the Telegram API."
				/>
			</a>
		</div>
	</div>
</div>

<footer class="container mx-auto flex justify-center items-center p-6">
	<div class="text-on-primary-token opacity-75">
		&copy; 2023 Medzik
	</div>
</footer>
