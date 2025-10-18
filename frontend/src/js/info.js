const image = document.getElementById("image");
const time = document.getElementById("time");
const place = document.getElementById("place");

//DOG GET
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    //imgタグに取得したURLを入れる
    image.src = myJson["message"];
  });

//TIME GET
fetch("https://worldtimeapi.org/api/ip")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    time.innerText = myJson["utc_datetime"];
  })

async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);

    fetch(res["url"])
        .then(response => {
            return response.json();
        })
        .then((myJson) => {
            place.innerText = myJson[1]["username"];
        })
}


callApi();