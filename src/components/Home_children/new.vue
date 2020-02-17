<template>
  <div>我是新闻主体</div>
</template>

<script>
export default {
 name: 'new',
 created() {
     this.$axios.get('')
 }
}
</script>

<style>

</style>