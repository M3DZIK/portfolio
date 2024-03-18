<script>
    import { ProgressBar } from '@skeletonlabs/skeleton';

    import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
    import FaCreditCard from 'svelte-icons/fa/FaCreditCard.svelte';
    import MdEmail from 'svelte-icons/md/MdEmail.svelte';
    import MdSecurity from 'svelte-icons/md/MdSecurity.svelte';

    import Card from '$lib/Card.svelte';

    import photo from '../assets/photo.jpg';
    import SignalIcon from '../lib/Signal.svelte';
    import Arrow from '$lib/Arrow.svelte';
</script>

<svelte:head>
    <title>Medzik</title>

    <meta
        name="description"
        content="16-year-old software developer and high school student, passionate about building secure applications. Mastermind behind LibrePass, your key to digital freedom."
    />
</svelte:head>

<div class="card-gradient min-h-[100vh] mx-auto flex justify-center items-center">
    <div class="max-w-[640px] variant-glass rounded-container-token shadow-xl">
        <div class="grid grid-cols-3 gap-8 items-center p-6">
            <img src={photo} class="w-full aspect-square rounded-full" alt="" />

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

            <a
                class="btn-icon bg-surface-200 p-2"
                href="https://signal.me/#eu/XIn9cgQ4+J9++45w66S350g29P7HWFAT3S9LOV18maUsbuxsZIFP5rAfJM1mtFW0"
            >
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

    <div class="absolute bottom-4 h-8 w-8 text-on-primary-token animate-bounce">
        <Arrow />
    </div>
</div>

<div class="project-gradient mx-auto flex justify-center items-center p-16">
    <div class="container space-y-10">
        <h2 class="h2 text-center card-header">Featured Project</h2>

        <div class="flex justify-center">
            <a href="https://librepass.org" target="_blank" class="max-w-xl">
                <Card
                    icon={MdSecurity}
                    title="LibrePass"
                    description="LibrePass is an open-source password manager that prioritizes security and ease of use."
                />
            </a>
        </div>
    </div>
</div>

<style lang="postcss">
    .card-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 98% 1%, rgba(var(--color-success-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(var(--color-success-500) / 0.5) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(var(--color-warning-500) / 0.5) 0px, transparent 50%);
    }

    .project-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-success-500) / 0.5) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(var(--color-warning-500) / 0.5) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(var(--color-error-500) / 0.5) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.5) 0px, transparent 50%);
    }
</style>
