document.addEventListener("DOMContentLoaded", () => {
  const modalElement = document.querySelector(".modal");
  //open the connection window
  const connectButtonElement = document.getElementById("connection-button");

  connectButtonElement.addEventListener("click", () => {
    modalElement.classList.toggle("hide");
  });

  //clode the modal window
  const crossModalElement = document.getElementById("exit-modal");

  crossModalElement.addEventListener("click", () => {
    modalElement.classList.toggle("hide");
  });

  modalElement.addEventListener("click", (event) => {
    if (event.target === modalElement) {
      modalElement.classList.toggle("hide");
    }
  });

  //send the form
  const formElement = document.querySelector(".modal form");

  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const reponse = await axios.post("http://localhost:3000", {
      firstName,
      name,
      email,
      subject,
      message,
    });
    console.log(response);
  });
});
