<script setup>
import foto from "@/assets/foto.webp";

</script>

<template>
    <div class="grid">
        <svg height="300" width="300" viewBox="0 0 300 300" class="self-center col-start-1 row-start-1">
            <circle cx="150" cy="150" r="120" stroke-width="3" stroke="var(--secondary)" fill="none" stroke-dasharray="1000" stroke-linecap="round" stroke-opacity="0">
                <animate id="a" attributeName="stroke-dashoffset" values="1000;0" dur=".5s" repeatCount="1"></animate>
                <animate id="b" attributeName="stroke-opacity" values="0;1" dur=".25s" repeatCount="1" fill="freeze"></animate>
            </circle>
        </svg>
        <img :src="foto" alt="Foto de Jose Pérez Domínguez" height="250" width="250" class="rounded-full p-3 self-center col-start-1 row-start-1 justify-self-center">
    </div>
</template>