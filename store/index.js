export const state = () => ({
  isOpen: false
})

export const mutations = {
  toggleMenu(state) {
    state.isOpen = !state.isOpen
  }
}
