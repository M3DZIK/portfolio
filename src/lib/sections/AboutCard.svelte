<script>
    import { ProgressBar } from '@skeletonlabs/skeleton';
    
    import { Icon } from '@steeze-ui/svelte-icon'
    import { Email, ArrowDownward } from '@steeze-ui/material-design-icons'
    import { Github, SignalMessenger } from '@steeze-ui/font-awesome'

    function scrollBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
</script>

<div class="card-gradient min-h-[100vh] mx-auto flex justify-center items-center">
    <div class="max-w-[640px] variant-glass rounded-container-token shadow-xl">
        <div class="grid grid-cols-3 gap-8 items-center p-6">
            <img src="https://avatars.githubusercontent.com/u/87065584" class="w-full aspect-square rounded-full" alt="" />

            <div class="col-span-2 space-y-2">
                <div class="text-on-primary-token text-lg opacity-75">Software Developer</div>

                <div class="text-on-primary-token font-bold text-xl sm:text-3xl">Oskar Karpiński</div>

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
        </footer>
    </div>

    <button class="absolute bottom-16 h-8 w-8 text-on-primary-token animate-bounce" on:click={scrollBottom}>
        <Icon src={ArrowDownward} />
    </button>
</div>

<style lang="postcss">
    .card-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 98% 1%, rgba(var(--color-success-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(var(--color-tertiary-500) / 0.33) 0px, transparent 50%);
    }
</style>
