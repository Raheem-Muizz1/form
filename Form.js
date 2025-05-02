document
  .getElementById("#userForm")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          "Accept ": "appliction/json",
        },
      });
      const messageBox = document.getElementById("#message");
      if (response.ok) {
        messageBox.innerText = "Thanks for signing up!";
        form.reset();
      } else {
        messageBox.innerText = "Oops! There was a problem.";
      }
    } catch (error) {
      document.getElementById("message").innerText = "Network error";
    }
  });
