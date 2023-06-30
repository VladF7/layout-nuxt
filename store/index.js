export const state = () => ({
  isOpenBurgerMenu: false,
  isOpenModalWindow: false
})

export const mutations = {
  toggleMenu(state) {
    state.isOpenBurgerMenu = !state.isOpenBurgerMenu
  },
  closeModal(state) {
    state.isOpenModalWindow = false
  },
  openModal(state) {
    state.isOpenModalWindow = true
  }
}
