const joke1 = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const resp = await fetch("https://icanhazdadjoke.com", config);

  const data = await resp.json();

  joke1.innerHTML = data.joke;
}
