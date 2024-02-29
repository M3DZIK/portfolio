<script>
    import { ProgressBar } from '@skeletonlabs/skeleton';

    import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
    import FaCreditCard from 'svelte-icons/fa/FaCreditCard.svelte';
    import MdEmail from 'svelte-icons/md/MdEmail.svelte';
    import MdSecurity from 'svelte-icons/md/MdSecurity.svelte';

    import Card from '$lib/Card.svelte';

    import avatar from '../assets/avatar.svg';
    import SignalIcon from '../lib/Signal.svelte';
</script>

<svelte:head>
    <title>Medzik</title>
    <meta
        name="description"
        content="I'm a self-taught programmer with a passion for open-source software. Currently working on LibrePass, a password manager, and using Fedora with KDE. Explore my portfolio for more projects and achievements."
    />
    <meta
        name="keywords"
        content="self-taught programmer, open-source software, LibrePass, password manager, Fedora, KDE, portfolio, projects, achievements"
    />
</svelte:head>

<div class="card-gradient min-h-[100vh] mx-auto flex justify-center items-center">
    <div class="max-w-[640px] variant-glass rounded-container-token shadow-xl">
        <div class="grid grid-cols-3 gap-8 items-center p-6">
            <img src={avatar} class="w-full aspect-square rounded-full" alt="Avatar" />

            <div class="col-span-2 space-y-2">
                <div class="text-on-primary-token text-lg opacity-75">Self-Taught Programmer</div>

                <div class="text-on-primary-token font-bold text-xl sm:text-3xl">Oskar</div>

                <div class="text-on-primary-token text-lg sm:text-2xl">Creating the Future</div>
            </div>
        </div>

        <ProgressBar rounded="rounded-none" value={100} />

        <footer class="grid grid-cols-4 place-items-center p-6 gap-10">
            <a class="btn-icon bg-surface-200 p-2" href="https://github.com/M3DZIK">
                <FaGithub />
            </a>

            <a class="btn-icon bg-surface-200 p-2" href="https://signal.me/#eu/XIn9cgQ4+J9++45w66S350g29P7HWFAT3S9LOV18maUsbuxsZIFP5rAfJM1mtFW0">
                <SignalIcon />
            </a>

            <a class="btn-icon bg-surface-200 p-2" href="mailto:me@medzik.dev">
                <MdEmail />
            </a>

            <a class="btn-icon bg-surface-200 p-2" href="https://liberapay.com/Medzik/">
                <FaCreditCard />
            </a>
        </footer>
    </div>

    <div class="absolute bottom-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8 text-on-primary-token animate-bounce"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    </div>
</div>

<div class="project-gradient mx-auto flex justify-center items-center p-16">
    <div class="container space-y-10">
        <h2 class="h2 text-center card-header">My Project</h2>

        <div class="flex justify-center">
            <a href="https://librepass.org" target="_blank" class="max-w-xl">
                <Card
                    icon={MdSecurity}
                    title="LibrePass"
                    description="Currently, I'm developing LibrePass, a password manager, driven by the belief in online privacy and security. My goal is to create a secure and convenient tool for managing passwords."
                />
            </a>
        </div>
    </div>
</div>

<style lang="postcss">
    .card-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.5) 0px, transparent 50%);
    }

    .project-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.5) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
    }
</style>
