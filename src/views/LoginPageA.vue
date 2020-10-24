<template>
  <div class="page-a top-container"> <LoginView form-name="A" /> </div>
  <!-- <div class="container"> <h2>Welcome to this app!</h2> </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginView from "@/components/LoginView.vue";

export default defineComponent({
    components: { LoginView },
});
</script>

<style lang="scss" scoped>
    .page-a {
        background-color: green;
        //height: 100%;
    }

</style>
