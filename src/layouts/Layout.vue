<script setup>
import { ref } from 'vue';

const menus = ref([
    {
        to: '',
        label: "goodsadsfasdfasdfasdfasf"
    }
]);
</script>
<template>
    <div class="flex w-screen h-screen text-white">
        <div class="w-full">
            <!-- header -->
            <header class="h-[50px] flex items-center justify-center bg-gray-800">
                Admin Panel Header
            </header>
            <main class="h-[calc(100vh-50px)] bg-gray-700 p-2">
                <RouterView/>
            </main>
        </div>
    </div>
</template>