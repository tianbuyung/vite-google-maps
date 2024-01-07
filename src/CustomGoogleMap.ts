import { Loader } from "@googlemaps/js-api-loader";

export interface AddMarker {
  location: {
    lat: number;
    lng: number;
  };
  markerContent: string;
  color: string;
}

export class CustomGoogleMap {
  private googleMap: google.maps.Map;
  private loader: Loader;

  constructor(divId: string) {
    this.googleMap = {} as google.maps.Map; // Initialize here
    this.loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });
    this.initMap(divId);
  }

  private async initMap(divId: string): Promise<void> {
    this.loader.importLibrary("maps").then(async ({ Map }) => {
      this.googleMap = new Map(document.getElementById(divId) as HTMLElement, {
        center: { lat: 0, lng: 0 },
        zoom: 1,
        mapId: "test",
      });
    });
  }

  async addMarker(payload: AddMarker): Promise<void> {
    const { AdvancedMarkerElement, PinElement } =
      await this.loader.importLibrary("marker");

    const customPin = new PinElement({
      background: payload.color,
    });

    const marker = new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: payload.location.lat,
        lng: payload.location.lng,
      },
      content: customPin.element,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: payload.markerContent,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
