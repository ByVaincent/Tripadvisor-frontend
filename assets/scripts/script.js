document.addEventListener("DOMContentLoaded", () => {
  //Response's elements
  const formElement = document.querySelector(".modal form");
  const responseElement = document.querySelector(".response");

  const modalElement = document.querySelector(".modal");
  //open the connection window
  const connectButtonElement = document.getElementById("connection-button");

  connectButtonElement.addEventListener("click", () => {
    modalElement.classList.toggle("hide");
    formElement.classList.remove("hide");
    responseElement.classList.add("hide");
  });

  //close the modal window
  const crossModalElement = document.getElementById("exit-modal");

  crossModalElement.addEventListener("click", () => {
    modalElement.classList.toggle("hide");
  });

  modalElement.addEventListener("mousedown", (event) => {
    if (event.target === modalElement) {
      modalElement.classList.toggle("hide");
    }
  });

  //send the form

  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const responseMessageElement = document.querySelector(".response p");
    const responseIconElement = document.getElementById("response-icon");

    try {
      const response = await axios.post(
        "https://site--backend-mailer-tripadvisor-replica--t2qjkc2tpc24.code.run/connection",
        {
          firstName,
          name,
          email,
          subject,
          message,
        }
      );

      //display positive response
      formElement.classList.toggle("hide");
      responseElement.classList.toggle("hide");

      responseIconElement.classList.add("fa-solid", "fa-check");

      responseMessageElement.textContent = response.data;
      formElement.reset();
    } catch (error) {
      //display failed response
      responseIconElement.classList.add("fa-solid", "fa-exclamation");
      responseMessageElement.textContent =
        "Impossible de se connecté au serveur... \nVeuillez essayer de nouveau dans quelques instants";
      formElement.classList.toggle("hide");
      responseElement.classList.toggle("hide");
    }
  });
});
