const cat_btn = document.getElementById("cat-btn");
const dog_btn = document.getElementById("dog-btn");
const cat_result = document.getElementById("cat-rnd");
const dog_result = document.getElementById("dog-rnd");

cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);

function getRandomCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data[0].url} alt="cat" />`;
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
}
