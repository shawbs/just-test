<template>
    <!-- App -->
    <div id="app" class="app">
      <div class="pages">
        <transition
          :name="transitionName"
          >
          <router-view/>
        </transition>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "",
    };
  }
};
</script>
<style scoped>
</style>


