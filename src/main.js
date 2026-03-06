import './style.css';
import { $ } from "jquery";

$('#app').html(`
  <div id="login">
    <h1>Login</h1>
    <div class="card">
      <form>
        <div class="form--group">
          <label for="username">Username</label>
          <input type="text" id="username" name="user_name" />
        </div>
        <button id="login-button" class="button--state-success" type="button">Log in</button>
      </form>
    </div>
  </div>
  <div id="schedule">
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
      <button type=button id="schedule-button" class="button--state-success">Schedule</button>
    <form/>
  </div>
  <div id="confirmation">
    <h1>Confirmation</h1>
    <p>Your appointment has been scheduled.</p>
  </div>
  <div id="error">
    <h1>Error</h1>
    <p>There was an error scheduling your appointment.</p>
  </div>
`
);

const timeMap = {
  "nine_am": "09:00:00",
  "ten_am": "10:00:00",
  "eleven_am": "11:00:00",
  "twelve_pm": "12:00:00",
  "one_pm": "13:00:00",
  "two_pm": "14:00:00",
  "three_pm": "15:00:00",
  "four_pm": "16:00:00",
  "five_pm": "17:00:00"
}

$("#schedule").hide();
$("#confirmation").hide();
$("#error").hide();
$("#login-button").on("click", () => {
  $("#login").hide();
  $("#schedule").show()
});
$("#schedule-button").on("click", () => {
  let todaysDate = new Date();
  console.log(todaysDate.getFullYear() + "-" + ((todaysDate.getMonth() + 1) < 10 ? '0' + (todaysDate.getMonth() + 1) : (todaysDate.getMonth() + 1)) + "-" + (todaysDate.getDate() < 10 ? '0' + todaysDate.getDate() : todaysDate.getDate()) + "T" + timeMap[$("input[name='time_slot']:checked").val()]);

  console.log($("#username").val() + " " + $("input[name='time_slot']:checked").val());
  $.ajax({
    url: "http://localhost:8080/appointment",
    method: "POST",
    contentType: "application/json",
    data:JSON.stringify({
      username: $("#username").val(),
      time: todaysDate.getFullYear() + "-" + ((todaysDate.getMonth() + 1) < 10 ? '0' + (todaysDate.getMonth() + 1) : (todaysDate.getMonth() + 1)) + "-" + (todaysDate.getDate() < 10 ? '0' + todaysDate.getDate() : todaysDate.getDate()) + "T" + timeMap[$("input[name='time_slot']:checked").val()],
      minutes: 60
    }),
    success: (response) => {
      $("#schedule").hide();
      $("#confirmation").show();
      $("#confirmation p").text("Your appointment is scheduled for " + response.time);
    },
    error: (error) => {
      console.error(error);
      $("#error").show();
      $("#schedule").hide();
    }
  })
  console.log($("#username").val() + " " + $("input[name='time_slot']:checked").val());
});