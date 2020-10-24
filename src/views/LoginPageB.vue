<template>
  <div class="page-b top-container"> <LoginView form-name="B" /> </div>
  <!-- <div class="container">
    <h2>Our Users</h2>
    <ul>
      <li>Max</li>
      <li>Manuel</li>
      <li>Julie</li>
    </ul>
  </div> -->

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginView from "@/components/LoginView.vue";

export default defineComponent({
    components: { LoginView },
});
</script>

<style lang="scss" scoped>
    .page-b {
        background-color: yellow;
        //height: 100%;
    }

</style>
