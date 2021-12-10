<template>
    <div style="margin-left: 1rem; display: flex; align-items: center;">
    
        <div style="display: flex; align-items: center; text-shadow: none;"> <!-- className="mr-2 flex space-x-2" -->

            <a class="cross-link" href="https://maxzz.github.io/test-pm">
                <div class="boxed-link" title="Reload this page">1</div>
            </a>

            <a class="cross-link" href="https://maxzz.github.io/test-pm-second">
                <div class="boxed-link" title="Open pm-test-second">2</div>
            </a>

            <a class="cross-link" href="https://maxzz.github.io/test-pm-domain-logins">
                <div class="boxed-link" title="Open test-pm-domain-logins">3</div>
            </a>

        </div>

        <a class="cross-link" href="https://github.com/maxzz/test-pm-domain-logins" target="_blank" title="Open GitHub source code">
            <svg class="boxed-link boxed-github" width="24" hieght="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
        </a>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
    });
</script>

<style lang="scss" scoped>
    .cross-link {
        margin: 0;
        padding: 0 .15rem;
    }
    .boxed-link {
        // <!-- className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" -->
        //padding: 0 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 0.75rem;
        line-height: 1rem;
        border-radius: 0.25rem;
        border: 1px solid #82868a;
        color: #82868a;
        display: grid;
        place-items: center;
    }
    .boxed-github {
        box-sizing: border-box;
        padding: 5px;
        border-radius: 50%;
    }
</style>
