<script>
    import { Security } from "@steeze-ui/material-design-icons";
    import { Icon } from "@steeze-ui/svelte-icon";
</script>

<a href="https://librepass.org" target="_blank" class="max-w-xl w-full">
    <div class="card variant-filled-error bg-opacity-25 p-6 md:p-10 shadow-lg space-y-4 text-center btn whitespace-normal grid h-full">
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
