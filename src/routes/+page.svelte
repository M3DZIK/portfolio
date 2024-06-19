<script>
    import AboutCard from '$lib/sections/AboutCard.svelte';
    import ProjectsCard from '$lib/sections/ProjectsCard.svelte';
    import HSAuthProjectCard from '$lib/sections/projects/HSAuthProjectCard.svelte';
    import LibrePassProjectCard from '$lib/sections/projects/LibrePassProjectCard.svelte';
    import JavaOTPProjectCard from '$lib/sections/projects/JavaOTPProjectCard.svelte';
    import AndroidUtilsCard from '$lib/sections/projects/AndroidUtilsCard.svelte';
</script>

<svelte:head>
    <title>Oskar Karpiński</title>

    <meta
        name="description"
        content="16-year-old software developer and high school student, passionate about building secure applications. Mastermind behind LibrePass, your key to digital freedom."
    />
</svelte:head>

<AboutCard />

<ProjectsCard>
    <LibrePassProjectCard />
    <HSAuthProjectCard />
    <JavaOTPProjectCard />
    <AndroidUtilsCard />
</ProjectsCard>
