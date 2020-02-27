import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import TrimbleMaps from "@trimblemaps/trimblemaps-js";
import { MapService } from "./map.service";

@Component({
  selector: "trimble-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  // tslint:disable:no-input-rename
  @Input("api-key") apiKey: string;
  @Input("map-style") mapStyle = "TRANSPORTATION";
  @Input("map-center") mapCenter = {
    lon: -95,
    lat: 38,
    zoom: 4.7
  };
  @ViewChild("map", { static: true }) mapElement: ElementRef;

  map: object;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.map = this.mapService.initMap(this.apiKey, {
      container: this.mapElement.nativeElement,
      style: TrimbleMaps.Common.Style[this.mapStyle],
      center: [this.mapCenter.lon, this.mapCenter.lat],
      zoom: this.mapCenter.zoom,
      hash: false
    });
  }
}
