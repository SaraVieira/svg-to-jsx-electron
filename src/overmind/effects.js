export const persistedState = {
  set(state) {
    localStorage.setItem("state", JSON.stringify(state))
  },
  get() {
    return JSON.parse(localStorage.getItem("state") || "{}")
  }
}