function lettersOnly(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("#user");
  const dateInput = document.getElementById("#date");
  const errorMessage = document.getElementById("#error-message");

  userForm.addEventListener("submit", function (event) {
    const selectedDate = new Date(dateInput.value);
    const minDate = new Date("1980-01-01");
    const maxDate = new Date("2015- 12-31");

    if (!dateInput.value) {
      errorMessage.textContent = "Please select date.";
      event.preventDefault();
    } else if (selectedDate < minDate || selectedDate > maxDate) {
      errorMessage.textContent = "You must be at least 15years";
      event.preventDefault();
    } else {
      errorMessage.textContent = "";
    }
  });
});
