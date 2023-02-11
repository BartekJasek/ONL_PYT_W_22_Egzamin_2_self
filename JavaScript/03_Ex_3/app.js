const apiURL = 'https://fe-api-jquery.firebaseio.com/fe-api-jquery.json';

document.addEventListener("DOMContentLoaded", function (event) {
    const body = document.querySelector('body');

    fetch(`${apiURL}`)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            const movies = json;
                for (movie in movies) {
                    console.log(movie)
                    const newH2 = document.createElement("h2");
                    newH2.innerText = movies[movie].title
                    body.appendChild(newH2)


                    const newH3 = document.createElement("h3");
                    newH3.innerText = movies[movie].year
                    body.appendChild(newH3)
                }
        })
        .catch((error) => {
            console.error(error);
            })
    });