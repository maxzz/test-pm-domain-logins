<template>
    <div class="login-form">
        <div class="page-title" :class="[formName === 'A' ? 'login-a' : 'login-b']"><span>{{formName}}</span></div>
    
        <form class="login" :class="[formName === 'A' ? 'login-a' : 'login-b']">
            <label for="user"> Username</label>
            <input id="user" type="text" placeholder="Username" autocomplete="username">
            
            <label for="pass"> Password</label>
            <input id="pass" type="password" placeholder="Password" autocomplete="current-password">
    
            <router-link to="/">Login</router-link>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        formName: {
            type: String,
            required: true
        }
    },
});
</script>

<style lang="scss" scoped>
    .page-title {
        text-align: left;
        height: 7em;
        margin-bottom: 2em;

        span {
            font-size: 3em;
            padding: .2em .5em;
            

            border: 2px solid gray;
            background-color: red;
            border-radius: 7px;
            border: 1px solid maroon;
        }
    }

    .login {
        padding: 2em;
        margin: 0 auto;
        max-width: 20em;

        border-radius: 3px;

        display: grid;
        gap: 1em .4em;
        grid-template-columns: auto 1fr;
        align-items: center;

        input {
            padding: .4em;
            border-radius: 3px;
            border: 1px solid #eee;
            
            &:focus {
                outline: 1px solid red;
            }
        }

        $btn: #efefef;

        a {
            grid-column: 1 / -1;
            justify-self: right;

            text-decoration: none;
            padding: .4em 1em;

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

    .login-a {
        background-color: rebeccapurple;
        color: #eee;
        border: 1px solid #eee;
    }

    .login-b {
        background-color: darkolivegreen;
        color: #eee;
        border: 1px solid red;
    }
</style>
