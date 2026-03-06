import { schedule } from "./schedule.js"

export function logIn(button, username) {
  button.on('click', () => schedule(username.val()))
}
