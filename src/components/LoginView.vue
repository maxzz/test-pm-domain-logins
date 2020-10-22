<template>
  <div class="login">
      <label for="user"> Username
      </label>
      <input id="user" type="text" value="name">
      <label for="pass"> Password
      </label>
      <input id="pass" type="text" value="password">
      <button>
          <router-link to="/">Login</router-link>
      </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss" scoped>
    .login {
        background-color: tomato;
        padding: 2em;

        max-width: 20em;
        display: grid;
        gap: 1em .4em;
        grid-template-columns: auto 1fr;
        align-items: center;

        input[type=text] {
            padding: .4em;
            border-radius: 3px;
            border: 1px solid #eee;
        }

        a {
            text-decoration: none;
        }

        $btn: #efefef;

        button {
            padding: .4em 1em;
            grid-column: 1 / -1;
            justify-self: right;

            border-radius: 3px;
            border: 1px solid #eee;

            background-color: $btn;
            outline: none;

            &:hover {
                background-color: darken($btn, 10%);
                outline: none;
                box-shadow: 1px 1px teal;
            }
        }

    }
</style>
