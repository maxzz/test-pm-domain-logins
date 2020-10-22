<template>
  <div class="home">
      Login B
      <LoginView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginView from "@/components/LoginView.vue";

export default defineComponent({
    components: { LoginView },
});
</script>
