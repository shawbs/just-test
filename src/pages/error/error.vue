<template>
    <page :title="status">
        <container>
            <h1 class="text-center">{{status}}</h1>
            <p class="text-center">There's something wrong with the server.</p>
        </container>
    </page>
</template>

<script>
    export default {
        name: 'error',
        props: ['status'],
        data(){
            return {

            }
        },
    }
</script>

<style scoped>

</style>
