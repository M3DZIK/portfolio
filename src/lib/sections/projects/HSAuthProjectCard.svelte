<script>
    import { Dns } from "@steeze-ui/material-design-icons";
    import { Icon } from "@steeze-ui/svelte-icon";
</script>

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
