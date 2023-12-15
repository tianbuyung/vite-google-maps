import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
});

let map: google.maps.Map;
loader.importLibrary("maps").then(async ({ Map }) => {
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 0, lng: 0 },
    zoom: 1,
  });
});
