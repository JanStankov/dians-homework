import { Component } from '@angular/core';
import * as L from 'leaflet';
import { ArtGalleryOrMuseum } from 'src/app/models/art-gallery-or-museum';
import { ArtGalleryOrMuseumService } from 'src/app/services/art-gallery-or-museum-service';

@Component({
 selector: 'app-root',
 templateUrl: './location-screen.component.html',
 styleUrls: ['./location-screen.component.css']
})
export class AppComponent {
 searchTerm: string;
 selectedItem: ArtGalleryOrMuseum;
 options = {};
 layers = [];

 constructor(private artGalleryOrMuseumService: ArtGalleryOrMuseumService) {
   this.options = {
     layers: [
       L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '...' })
     ],
     zoom: 5,
     center: L.latLng(46.87916, -114.00597)
   };
 }

 onSearch() {
    this.artGalleryOrMuseumService.getByName(this.searchTerm).subscribe((item: ArtGalleryOrMuseum) => {
      this.selectedItem = item;
      const marker = L.marker([item.latitude, item.longitude]).addTo(this.layers[0]);
    });
 }

 onSearch2() {
    this.artGalleryOrMuseumService.getByName(this.searchTerm).subscribe((item: ArtGalleryOrMuseum) => {
      this.selectedItem = item;
      const marker = L.marker([item.latitude, item.longitude], {
        riseOnHover: true
      }).addTo(this.layers[0]);

      marker.bindPopup(`<b>${item.name}</b><br>${item.address}<br><a href="${item.website}">Website</a>`);
      marker.on('click', () => {
        this.selectedItem = item;
      });
    });
}
}