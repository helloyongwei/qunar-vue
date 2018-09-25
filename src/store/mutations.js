function changeCity (state, value) {
  state.city = value
  try {
    localStorage.city = state.city
  } catch (e) {}
}
export default {
  changeCity
}
