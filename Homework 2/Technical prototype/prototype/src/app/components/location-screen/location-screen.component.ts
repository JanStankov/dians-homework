import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';;

@Component({
  selector: 'app-location-screen',
  templateUrl: './location-screen.component.html',
  styleUrls: ['./location-screen.component.scss']
})
export class LocationScreenComponent {
  //Description
  name = "Музеј на Град Скопје"
  nameEn =	'Museum of the City of Skopje'
  phone =	"+389 2 3114742"
  opening_hours = "Tu-Su 10:00-18:00"
  website	= "http://www.mgs.org.mk/";
  wikipediaLink = "https://en.wikipedia.org/wiki/en:Museum%20of%20the%20City%20of%20Skopje?uselang=en";

  //Map
  blueIcon = Leaflet.icon({
    iconUrl: 'assets/blue-marker.svg',
    iconSize: [40, 31],
    iconAnchor: [13, 41]
  });
  getMarkers = (): Leaflet.Marker[] => {
    return [
      new Leaflet.Marker(new Leaflet.LatLng(42.001588750563734, 21.437307553512774), {
        icon: this.blueIcon,
        title: 'Chifte Hammam National Gallery of Macedonia'
      } as Leaflet.MarkerOptions).on('click', function(this: any,e) {
        this.name = "Национална галерија на Македонија „Чифте-амам“";
        this.nameEn =	'Chifte Hammam National Gallery of Macedonia'
        this.phone =	"+389 2 3227986"
        this.opening_hours = "Tu-Su 10:00-18:00"
        this.website	= "https://nationalgallery.mk/";
        this.wikipediaLink = "https://en.wikipedia.org/wiki/en:%C4%8Cifte%20Hammam?uselang=en"
      }),
      new Leaflet.Marker(new Leaflet.LatLng(41.99179962329014, 21.429115723270925), {
        icon: this.blueIcon,
        title: 'Museum of the City of Skopje'
      } as Leaflet.MarkerOptions).on('click', function(this: any,e) {
        this.name = "Музеј на Град Скопје";
        this.nameEn =	'Museum of the City of Skopje'
        this.phone =	"+389 2 3114742"
        this.opening_hours = "Tu-Su 10:00-18:00"
        this.website	= "http://www.mgs.org.mk/";
        this.wikipediaLink = "https://en.wikipedia.org/wiki/en:Museum%20of%20the%20City%20of%20Skopje?uselang=en"
      })
    ] as Leaflet.Marker[];
  };
  

  

  options: Leaflet.MapOptions = {
    layers: [
        ...this.getMarkers(),
        new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        } as Leaflet.TileLayerOptions),
      ],
    zoom: 15,
    center: new Leaflet.LatLng(41.9950, 21.4300)
  };
  constructor() { }

//MAP
}


