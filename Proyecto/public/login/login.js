  const objectToSend = {};
  function getInputValues() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (objectToSend[input.id] = input.value));
  }

  const redirect = () => {
      window.location.href = `../../`;
    };

  const loginUser = async (e) => {
    e.preventDefault();
    getInputValues();
    try {
      
      const response = await axios.post("http://localhost:3000/login", objectToSend);
      console.log(response, "respuesta");
      redirect()
    } catch (error) {
      console.log(error.message)
    }
  };

  const loginButton = document.querySelector("#login")
  loginButton.addEventListener("click", (e) => loginUser(e))