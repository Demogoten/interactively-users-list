const container = document.querySelector(".container");

const display = (users, albums, photos) => {
  const firstAlbums = {};
  const firstPhotos = {};
  albums.forEach((album) => {
    if (!firstAlbums[album.userId]) {
      firstAlbums[album.userId] = album;
    }
  });
  photos.forEach((photo) => {
    if (!firstPhotos[photo.albumId]) {
      firstPhotos[photo.albumId] = photo;
    }
  });
  const usersView = users
    .sort(function (a, b) {
      if (a.name < b.name) {
        return window.sortName === "A-Z" ? -1 : 1;
      }
      if (a.name > b.name) {
        return window.sortName === "A-Z" ? 1 : -1;
      }
      return 0;
    })
    .map((person) => {
      const {
        id,
        name,
        username,
        email,
        address: { street, city },
        phone,
        website,
        company,
      } = person;
      const album = firstAlbums[id];
      const photo = firstPhotos[album.id];

      return `<article class="card">
      <img src="${photo.thumbnailUrl}" alt="${photo.title}"/>
    <h4>${name}</h4>
    <h4>${username}</h4>
    <h4>${street}, ${city}</h4>
    <a href="http://${website}" class="btn" target="_blank">view website</a>
    </article>`;
    })
    .join("");
  container.innerHTML = usersView;
};

export default display;
