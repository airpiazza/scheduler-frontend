import './style.css'
import { $ } from "jquery"


export function schedule(username) {
    $('#app').html(`
    <h1>Available appointments</h1>
    <form>
      <fieldset>
        <legend>Select a time slot </legend>
        <div>
            <input type="radio" id="nine_am" name="time_slot" value="nine_am" checked />
            <label for="nine_am">9:00 AM</label>
        </div>
        <div>
            <input type="radio" id="ten_am" name="time_slot" value="ten_am" />
            <label for="ten_am">10:00 AM</label>
        </div>
        <div>
            <input type="radio" id="eleven_am" name="time_slot" value="eleven_am" />
            <label for="eleven_am">11:00 AM</label>
        </div>
        <div>
            <input type="radio" id="twelve_pm" name="time_slot" value="twelve_pm" />
            <label for="twelve_pm">12:00 PM</label>
        </div>
        <div>
            <input type="radio" id="one_pm" name="time_slot" value="one_pm" />
            <label for="one_pm">1:00 PM</label>
        </div>
        <div>
            <input type="radio" id="two_pm" name="time_slot" value="two_pm" />
            <label for="two_pm">2:00 PM</label>
        </div>
        <div>
            <input type="radio" id="three_pm" name="time_slot" value="three_pm" />
            <label for="three_pm">3:00 PM</label>
        </div>
        <div>
            <input type="radio" id="four_pm" name="time_slot" value="four_pm" />
            <label for="four_pm">4:00 PM</label>
        </div>
        <div>
            <input type="radio" id="five_pm" name="time_slot" value="five_pm" />
            <label for="five_pm">5:00 PM</label>
        </div>
      </fieldset>
      <button type=button class="button--state-success">Submit</button>
    <form/>
  `
  )
}