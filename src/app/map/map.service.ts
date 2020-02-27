import { Injectable } from "@angular/core";
import TrimbleMaps from "@trimblemaps/trimblemaps-js";

@Injectable({
  providedIn: "root"
})
export class MapService {
  map: TrimbleMaps.Map;
  style = TrimbleMaps.Common.Style.TRANSPORTATION;

  constructor() {}

  initMap(apiKey: string, options: any) {
    TrimbleMaps.APIKey = apiKey;

    if (options.style) {
      this.style = options.style;
    }

    this.map = new TrimbleMaps.Map(options);

    this.map.addControl(new TrimbleMaps.NavigationControl());

    const scale = new TrimbleMaps.ScaleControl({
      maxWidth: 80,
      unit: 'imperial'
    });
    this.map.addControl(scale);

    return this.map;
  }

  setApiKey(apiKey: string) {
    TrimbleMaps.APIKey = apiKey;
  }

  setStyle(style: string) {
    this.style = style;
    this.map.setStyle(style);
  }

  getStyle() {
    return this.style;
  }

  setRegion(region: string) {
    this.map.setRegion(region);
  }

  getRegion() {
    return this.map.getRegion();
  }

  on(event: string, listener) {
    this.map.on(event, listener);
  }

  off(event: string, listener) {
    this.map.off(event, listener);
  }

  getMap() {
    return this.map;
  }

  setMapCenter(
    lngLat: { lng: number; lat: number } | [number, number],
    panTo?: boolean
  ) {
    if (panTo) {
      this.map.panTo(lngLat);
    } else {
      this.map.setCenter(lngLat);
    }
  }

  getMapCenter() {
    return this.map.getCenter();
  }

  flyTo(options) {
    this.map.flyTo(options);
  }

  addLayer(layer) {
    this.map.addLayer(layer);
  }

  removeLayer(layerId) {
    this.map.removeLayer(layerId);
  }

  toggleLayerVis(layerName) {
    const current = this.map.getLayoutProperty(layerName, "visibility");
    const visibility = current === "visible" ? "none" : "visible";
    this.map.setLayoutProperty(layerName, "visibility", visibility);
    return visibility === "visible" ? true : false;
  }

  getStyleLayers() {
    return this.map.getStyle().layers;
  }

  setTrafficVisibility(isVisible: boolean) {
    this.map.setTrafficVisibility(isVisible);
  }

  setWeatherRadarVisibility(isVisible: boolean) {
    this.map.setWeatherRadarVisibility(isVisible);
  }

  setWeatherAlertVisibility(isVisible: boolean) {
    this.map.setWeatherAlertVisibility(isVisible);
  }

  setRoadSurfaceVisibility(isVisible: boolean) {
    this.map.setRoadSurfaceVisibility(isVisible);
  }

  setPOIVisibility(isVisible: boolean) {
    this.map.setPOIVisibility(isVisible);
  }

  setBuildingVisibility(isVisible: boolean) {
    this.map.set3dBuildingVisibility(isVisible);
  }
}
