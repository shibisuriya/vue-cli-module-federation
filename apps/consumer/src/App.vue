<template>
  <div>
    <ConsumerComponent></ConsumerComponent>
    <microFrontendComponentVue></microFrontendComponentVue>
  </div>
</template>

<script>
  import ConsumerComponent from './components/ConsumerComponent.vue'
  import microFrontendComponentVue from 'mfe/microFrontendComponentVue'
  export default {
    components: {
      ConsumerComponent,
      microFrontendComponentVue
    } 
  }
</script>

<style lang="scss" scoped>

</style>