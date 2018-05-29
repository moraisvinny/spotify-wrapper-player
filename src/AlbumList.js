function createMarkup(data) {

  return data.map(album => `
    <div class="list-item" data-album-id="${album.id}">
      <img data-album-id="${album.id}" src="${album.images[2].url}" alt="${album.name}" class="list-image">
      <div data-album-id="${album.id}" class="list-description">
        <p data-album-id="${album.id}" class="list-title">${album.name}</p>
        <p data-album-id="${album.id}" class="list-subtitle">${album.artists[0].name}</p>
      </div>
    </div>`).join('');
}

export default function renderAlbums(data, element) {

  const markup = createMarkup(data);

  element.innerHTML = markup;
};
