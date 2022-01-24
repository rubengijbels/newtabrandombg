const serverBaseUrl = "http://localhost:3099"

fetch(serverBaseUrl + "/api")
  .then(response => response.json())
  .then(wallpaperFileName => {

    var img = new Image()
    img.src = serverBaseUrl + "/img/" + wallpaperFileName

    img.onload = () => {

      const div = document.createElement("div")
      div.classList.add("overlay")
      div.style.backgroundImage = `url(${img.src})`

      document.querySelector("body").appendChild(div)

      setTimeout(() => {
        div.style.opacity = 1
      }, 10)
    }
  })
  .catch(error => {
    console.log(error)
  })
