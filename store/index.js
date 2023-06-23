export const state = () => ({
  isOpen: false
})

export const mutations = {
  toggleMenu(state) {
    state.isOpen = !state.isOpen
  }
}

export const actions = {
  toggleMenu({ commit }) {
    commit('toggleMenu')
  }
}
