import { CustomGoogleMap } from "./CustomGoogleMap";

const customGoogleMap = new CustomGoogleMap("map");

customGoogleMap.addMarker({
  location: {
    lat: 0,
    lng: 0,
  },
  markerContent: `
      <div>
        <h1>Company Name: Septian</h1>
        <h3>Catchphrase: Hello</h3>
      </div>
    `,
  color: "blue",
});
