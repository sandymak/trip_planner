const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1Ijoic2FuZHltYWsiLCJhIjoiY2phOXV3MWRlMGxnNTMwcTlsNnFxZ3JqdiJ9.fy0YCfAn3rRR_bNpkwTnDg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker('hotel', [-74.009, 40.705]).addTo(map);

// const mapboxgl = require("mapbox-gl");

// mapboxgl.accessToken = "pk.eyJ1Ijoic2FuZHltYWsiLCJhIjoiY2phOXV3MWRlMGxnNTMwcTlsNnFxZ3JqdiJ9.fy0YCfAn3rRR_bNpkwTnDg";

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });
