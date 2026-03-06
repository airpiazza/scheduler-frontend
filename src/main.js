import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Login</h1>
    <div class="card">
      <form>
        <div class="form--group">
          <label for="username">Username</label>
          <input type="text" id="name" />
        </div>
        <button id="counter" class="button--state-success" type="button">Log in</button>
      </form>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
