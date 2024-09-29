function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: ["sur cette photo prise quelques secondes après"],
        autoStart: true,
        cursor: "",
      delay:1,
    });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem)