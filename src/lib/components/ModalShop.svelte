<script lang="ts">
    import { notify, shopItems } from "$lib/store/shop";

    export let isVisible: boolean = true;

    function buyItem(id: number) {
        if (!id) return;

        $shopItems.forEach((item) => {
            if (item.id === id) item.isBuying = true;
        });

        isVisible = false;
        notify.set(true);
    }
</script>

{#if isVisible}
    <div class="modal">
        <h2>Shop</h2>
        <div class="modal-container">
            {#each $shopItems as item}
                <button
                    class="shop-item"
                    on:click={() => buyItem(item.id)}
                    disabled={item.isBuying}
                >
                    <img class="shop-img" src={item.image} alt={item.title} />
                    <span class="shop-title">{item.title}</span>
                    <span class="shop-price">{item.price}</span>
                </button>
            {/each}
        </div>
        <button class="modal-close" on:click={() => (isVisible = !isVisible)}
            >Close</button
        >
    </div>
{/if}

<style>
    .modal-close {
        height: 30px;
        width: 200px;
        background-color: green;
        border-radius: 10px;
        color: white;
        margin-bottom: 10px;
        border-color: rgb(1, 188, 1);
    }

    .modal-close:hover {
        scale: 1.1;
        transition: 5mss ease-in-out;
    }

    .modal {
        -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        animation: modal 0.3s alternate ease;
        min-height: 400px;
        width: 300px;
        position: absolute;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        color: white;
        background-color: chocolate;
    }

    @keyframes modal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .modal-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .shop-img {
        border-radius: 8px;
        height: 50px;
        width: 50px;
    }

    .shop-item {
        display: flex;
        border: 1px solid black;
        border-radius: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
        width: 100px;
        height: 100px;
        cursor: pointer;
    }

    .shop-item:hover {
        scale: 1.1;
    }

    .shop-price {
        font-size: 10px;
    }
</style>
