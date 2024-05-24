<div class="project-gradient mx-auto flex justify-center items-center p-16">
    <div class="container space-y-10">
        <h2 class="h2 text-center card-header">Featured Projects</h2>

        <div class="flex justify-center gap-8 flex-wrap">
            <slot />
        </div>
    </div>
</div>

<style lang="postcss">
    .project-gradient {
        background-image: radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(var(--color-tertiary-500) / 0.33) 0px, transparent 50%);
    }
</style>
