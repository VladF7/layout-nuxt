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
    document.querySelector('body').style.overflow = 'auto'
  },
  openModal(state) {
    state.isOpenModalWindow = true
    document.querySelector('body').style.overflow = 'hidden'
  }
}
