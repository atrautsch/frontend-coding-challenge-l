<template>
  <div class="home-container">
    <h3 v-if="$store.state.winners.length > 0">Winners:</h3>
    <ul>
      <li v-for="winner, idx in $store.state.winners" :key="idx">{{ winner }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListWinners'
}
</script>

<style scoped lang="scss">
.home-container {
  width: 50vw;
  display: grid;
  justify-items: center;
}
</style>
