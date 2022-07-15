let baseUrl = "http://localhost:4232";
let path = "movies";
let movies = {};
let carousel = document.getElementById("carousel");
let item_width;
let left = document.getElementById("left");
let right = document.getElementById("right");
let max_width;
const get_movies = () =>
  fetch([baseUrl, path].join("/"))
    .then((response) => response.json())
    .then((list) => {
      init(list);
    });

get_movies();
function create_item(url, text, id, name) {
  raw_text = `
    <div id = ${id} class = "item">
    <img src=${url} >
    <span><b>${name}</b></span>
    <span>${text}</span>
    <div/>
    `;
  carousel.innerHTML += raw_text;
}
function init(list) {
  movies = list;
  for (let e of movies) {
    create_item(e.imgUrl, e.outlineInfo, e.id, e.name);
  }
  item_width = document.getElementById("1").offsetWidth;
  max_width = item_width * (movies.length - 1) - carousel.offsetWidth;
  left.style.visibility = "hidden";
}
left.addEventListener("click", (e) => {
  if (carousel.scrollLeft >= 0) {
    carousel.scrollLeft -= item_width;
  }
  if (carousel.scrollLeft <= 0) {
    left.style.visibility = "hidden";
  }
  if (carousel.scrollLeft < max_width) {
    right.style.visibility = "visible";
  }
});
right.addEventListener("click", (e) => {
  if (carousel.scrollLeft < max_width) {
    carousel.scrollLeft += item_width;
  }
  if (carousel.scrollLeft >= max_width) {
    right.style.visibility = "hidden";
  }
  if (carousel.scrollLeft >= 0) {
    left.style.visibility = "visible";
  }
});
