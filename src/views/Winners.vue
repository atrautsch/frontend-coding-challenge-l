<template>
  <div class="container">
    <list-winners />
  </div>
</template>

<script>
import ListWinners from '@/components/ListWinners.vue'

export default {
  name: 'Winners',
  components: {
    ListWinners,
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
}
</style>
