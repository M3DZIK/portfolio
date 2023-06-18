<script lang="ts">
    export let icon: any;
    export let title: string;
    export let description: string;
</script>

<div class="card variant-glass p-4 md:p-10 shadow-lg space-y-4 text-center">
    <svg
        class="mx-auto variant-glass rounded-2xl p-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px" height="50px"
    >
        <svelte:component this={icon} />
    </svg>

    <h3 class="h3">{title}</h3>

    <p>{description}</p>
</div>
