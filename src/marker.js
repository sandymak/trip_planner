const mapboxgl = require("mapbox-gl");

let icons = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
};


function buildMarker(type, coordinates) {
  const markerDomEl = document.createElement("div");
  let url = `url(${icons[type]})`;
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = url.toString();
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
};

module.exports = buildMarker;
