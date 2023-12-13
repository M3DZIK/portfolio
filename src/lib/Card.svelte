<script lang="ts">
    export let icon: any;
    export let title: string;
    export let description: string;
</script>

<div class="card variant-glass md:p-10 shadow-lg space-y-4 text-center btn whitespace-normal grid">
    <div class="mx-auto variant-glass rounded-2xl p-2" style="width: 50px; height: 50px;">
        <svelte:component this={icon} />
    </div>

    <h3 class="h3">{title}</h3>

    <p>{description}</p>
</div>
