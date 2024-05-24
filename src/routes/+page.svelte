<script>
    import { ProgressBar } from '@skeletonlabs/skeleton';
    
    import { Icon } from '@steeze-ui/svelte-icon'
    import { Email, Dns, Security, ArrowDownward } from '@steeze-ui/material-design-icons'
    import { Github, SignalMessenger } from '@steeze-ui/font-awesome'

    import photo from '../assets/photo.jpg';

    function scrollBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
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
                <div class="text-on-primary-token text-lg opacity-75">Software Developer</div>

                <div class="text-on-primary-token font-bold text-xl sm:text-3xl">Oskar</div>

                <div class="text-on-primary-token text-lg sm:text-2xl">Creating the Future</div>
            </div>
        </div>

        <ProgressBar rounded="rounded-none" value={0} />

        <footer class="grid grid-cols-3 place-items-center p-6 gap-10">
            <a class="btn-icon bg-surface-200 p-2" href="https://github.com/M3DZIK">
                <Icon src="{Github}" />
            </a>

            <a
                class="btn-icon bg-surface-200 p-2"
                href="https://signal.me/#eu/XIn9cgQ4+J9++45w66S350g29P7HWFAT3S9LOV18maUsbuxsZIFP5rAfJM1mtFW0"
            >
                <Icon src={SignalMessenger} />
            </a>

            <a class="btn-icon bg-surface-200 p-2" href="mailto:me@medzik.dev">
                <Icon src={Email} />
            </a>

            <!-- <a class="btn-icon bg-surface-200 p-2" href="https://liberapay.com/Medzik/">
                <FaCreditCard />
            </a> -->
        </footer>
    </div>

    <button class="absolute bottom-16 h-8 w-8 text-on-primary-token animate-bounce" on:click={scrollBottom}>
        <Icon src={ArrowDownward} />
    </button>
</div>

<div class="project-gradient mx-auto flex justify-center items-center p-16">
    <div class="container space-y-10">
        <h2 class="h2 text-center card-header">Featured Projects</h2>

        <div class="flex justify-center gap-8 flex-col md:flex-row">
            <a href="https://librepass.org" target="_blank" class="max-w-xl w-full">
                <div class="card variant-filled-error bg-opacity-25 p-4 md:p-10 shadow-lg space-y-4 text-center btn whitespace-normal grid h-full">
                    <div class="mx-auto variant-filled-error bg-opacity-50 rounded-2xl p-2" style="width: 50px; height: 50px;">
                        <Icon src={Security} />
                    </div>

                    <h3 class="h3">
                        LibrePass
                    </h3>

                    <p class="opacity-85">
                        An open-source password manager that prioritizes security and ease of use.
                    </p>
                </div>
            </a>

            <a href="https://hsauth.medzik.dev" target="_blank" class="max-w-xl w-full">
                <div class="card variant-filled-primary bg-opacity-25 p-4 md:p-10 shadow-lg space-y-4 text-center btn whitespace-normal grid h-full">
                    <div class="mx-auto variant-filled-primary bg-opacity-50 rounded-2xl p-2" style="width: 50px; height: 50px;">
                        <Icon src={Dns} />
                    </div>
                
                    <h3 class="h3">
                        HSAuth Library
                    </h3>
                
                    <p class="opacity-85">
                        A user authentication algorithm which was created to eliminate the need to send the password or even its hash to the server.
                    </p>
                </div>
            </a>
        </div>
    </div>
</div>

<style lang="postcss">
    .card-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 98% 1%, rgba(var(--color-success-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(var(--color-tertiary-500) / 0.33) 0px, transparent 50%);
    }

    .project-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(var(--color-tertiary-500) / 0.33) 0px, transparent 50%);
    }
</style>
