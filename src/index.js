function displayPoem(responce) {
  new Typewriter("#poem", {
    strings: responce.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#instruction");
  let apiKey = "ef0t819co4fbb2a23ffa030681b76557";
  let prompt = `User instruction: Create a shot French poem about ${instructionElement.value}`;
  let context =
    "Your mission is to generate a four line poem in basic HTML and separate each line with <br />. Make sure to follow user instruction. Do not include a title of poem. Sign a poem with 'SheCodes' inside a <strong> element at the end of the poem and not at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
