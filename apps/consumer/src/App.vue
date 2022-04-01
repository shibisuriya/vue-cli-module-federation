<template>
  <div>
    <ConsumerComponent></ConsumerComponent>
    <microFrontendComponentVue></microFrontendComponentVue>
  </div>
</template>

<script>
  import ConsumerComponent from './components/ConsumerComponent.vue'
  export default {
    components: {
      ConsumerComponent,
      microFrontendComponentVue: () => import('mfe/microFrontendComponentVue')
    } 
  }
</script>

<style lang="scss" scoped>

</style>