<script>
    import AboutCard from '$lib/sections/AboutCard.svelte';
    import ProjectsCard from '$lib/sections/ProjectsCard.svelte';
    import HSAuthProjectCard from '$lib/sections/projects/HSAuthProjectCard.svelte';
    import LibrePassProjectCard from '$lib/sections/projects/LibrePassProjectCard.svelte';
</script>

<svelte:head>
    <title>Medzik</title>

    <meta
        name="description"
        content="16-year-old software developer and high school student, passionate about building secure applications. Mastermind behind LibrePass, your key to digital freedom."
    />
</svelte:head>

<AboutCard />

<ProjectsCard>
    <LibrePassProjectCard />
    <HSAuthProjectCard />
</ProjectsCard>
