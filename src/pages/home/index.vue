<template>
  <div class="page">
    <el-container style="height:100%;">
      <h1>hello world</h1>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return {
      }
    },
    created(){
      this.$store.dispatch('user/getUserData')
    }
  }
</script>
