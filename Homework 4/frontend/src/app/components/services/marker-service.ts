import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
 providedIn: 'root'
})
export class MarkerService {
 private markers: L.Marker[] = [];

 addMarker(lat: number, lng: number, map: L.Map) {
   const marker = L.marker([lat, lng]).addTo(map);
   this.markers.push(marker);
 }

 getMarkers() {
   return this.markers;
 }
}
