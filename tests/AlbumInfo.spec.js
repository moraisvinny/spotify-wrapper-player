import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumInfo from '../src/AlbumInfo';

describe('AlbumInfo', () => {

  const data = {
    "album_type": "album",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz"
        },
        "href": "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
        "id": "6XyY86QOPPrYVGvF9ch6wz",
        "name": "Linkin Park",
        "type": "artist",
        "uri": "spotify:artist:6XyY86QOPPrYVGvF9ch6wz"
      }
    ],
    "id": "0f7R0jf0pcTb6K6IVVPcMD",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/fe26cf70090dbd2898307ca5f6fd65cd837fe995",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/3a9bad60f804dc28ec8864dcd763ebe75984a7c8",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/2ea58dd384a20c8cac3040a2429ad15f504072b7",
        "width": 64
      }
    ],
    "name": "Meteora (Bonus Track Version)",
    "tracks": {
      "total": 16
    },
    "type": "album",
  };
  const markup = `
      <img class="album-image" src="${data.images[0].url}" alt="${data.name}">
      <p class="album-title">${data.name}</p>
      <p class="album-artist">${data.artists[0].name}</p>
      <p class="album-counter">${data.tracks.total}</p>
  `

  it('should crate and append the markup give a correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should return the data', () => {

    const element2 = document.createElement('div');
    expect(renderAlbumInfo(data, element2)).to.be.eql(data);

  });
});
