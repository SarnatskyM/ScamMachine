<script lang="ts">
    import { notify } from "$lib/store/shop";

    $: {
        if ($notify) {
            setTimeout(()=>{
                notify.set(false)
            }, 3000)
        }
    }
</script>

{#if $notify}
    <div class="notify-container">
        <div class="notify-img">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                />
            </svg>
        </div>

        <span>Thanks for buy!</span>
    </div>
{/if}

<style>
    .notify-img {
        width: 20px;
        height: 20px;
    }

    .notify-container {
        display: flex;
        border-radius: 10px;
        animation: modal 0.3s alternate ease;
        gap: 10px;
        justify-content: center;
        align-items: center;
        min-width: 170px;
        height: 40px;
        position: absolute;
        top: 0;
        background-color: red;
    }

    @keyframes modal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
