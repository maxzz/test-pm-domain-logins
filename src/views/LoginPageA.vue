<template>
  <div class="home">
      <LoginView form-name="A" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginView from "@/components/LoginView.vue";

export default defineComponent({
    components: { LoginView },
});
</script>
