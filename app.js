import fetchUsers from "./fetchUsers.js";
import displayUsers from "./displayUsers.js";

const title = document.querySelector(".section-title h1");
let users, albums, photos;

const init = async () => {
  window.sortName = "A-Z";
  users = await fetchUsers();
  albums = await (
    await fetch("https://jsonplaceholder.typicode.com/albums")
  ).json();
  photos = await (
    await fetch("https://jsonplaceholder.typicode.com/photos")
  ).json();
  displayUsers(users, albums, photos);
  title.textContent = "Users List";
};

function sortByName() {
  if (window.sortName === "A-Z") {
    window.sortName = "Z-A";
  } else {
    window.sortName = "A-Z";
  }
  document.getElementById("sort-btn").innerHTML = window.sortName;
  displayUsers(users, albums, photos);
}

document.getElementById("sort-btn").addEventListener("click", sortByName);
window.addEventListener("load", init);
