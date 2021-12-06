<template>
    <div class="page-b top-container">
        <LoginView form-name="b" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import LoginView from "../components/LoginView.vue";

    export default defineComponent({
        components: { LoginView },
    });
</script>

<style lang="scss" scoped>
    // .page-b {
    //     background-color: yellow;
    //     height: 100%;
    // }
</style>
