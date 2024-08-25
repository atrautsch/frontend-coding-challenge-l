import { createStore } from 'vuex'

function getWinners() {
  const item = localStorage.getItem('winners')
  if(item != null) {
    const winners = JSON.parse(item)
    const date = new Date()

    // only return current winners
    if(winners.date == date.toLocaleDateString()) {
      return winners.winners
    }else {
      return []
    }
  }
  return []
}

export default createStore({
  state: () => ({
    winners: getWinners()
  }),
  getters: {},
  actions: {},
  mutations: {
    addWinner (state, winner) {
      state.winners.push(winner)

      // put to local storage
      const date = new Date()
      localStorage.setItem('winners', JSON.stringify({date: date.toLocaleDateString(), winners: state.winners}))
    }
  },
  modules: {}
})
