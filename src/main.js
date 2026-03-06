import './style.css'
import { logIn } from './login.js'
import { $ } from "jquery"

$('#app').html(`
  <div>
    <h1>Login</h1>
    <div class="card">
      <form>
        <div class="form--group">
          <label for="username">Username</label>
          <input type="text" id="username" name="user_name" />
        </div>
        <button id="counter" class="button--state-success" type="button">Log in</button>
      </form>
    </div>
  </div>
`
)

logIn($('#counter'), $('#username'))
