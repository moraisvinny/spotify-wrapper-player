import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('AlbumTracks', () => {

  const data = {
    "items": [{
      "duration_ms": 13440,
      "name": "Foreword",
      "preview_url": "https://p.scdn.co/mp3-preview/e7bf10d10ec669655d5e9a33f6e9aa58e5d54db0?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 1,
    }]
  };
  const markup = `
      <div class="music" data-track-preview="${data.items[0].preview_url}">
        <p class="music-number">${data.items[0].track_number}</p>
        <p class="music-title">${data.items[0].name}</p>
        <p class="music-duration">${convertToHumanTime(data.items[0].duration_ms)}</p>
      </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data.items, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
