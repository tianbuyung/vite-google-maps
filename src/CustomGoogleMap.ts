import { Loader } from "@googlemaps/js-api-loader";

export class CustomGoogleMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.initMap(divId);
  }

  private async initMap(divId: string): Promise<void> {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.importLibrary("maps").then(async ({ Map }) => {
      this.googleMap = new Map(document.getElementById(divId) as HTMLElement, {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      });
    });
  }
}
