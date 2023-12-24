import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as Leaflet from 'leaflet';;

@Component({
  selector: 'app-location-screen',
  templateUrl: './location-screen.component.html',
  styleUrls: ['./location-screen.component.scss']
})
export class LocationScreenComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl("Музеј на Град Скопје"),
    nameEn: new FormControl('Museum of the City of Skopje'),
    phone: new FormControl("+389 2 3114742"),
    opening_hours: new FormControl("Tu-Su 10:00-18:00"),
    website: new FormControl("http://www.mgs.org.mk/"),
    wikipediaLink: new FormControl("https://en.wikipedia.org/wiki/en:Museum%20of%20the%20City%20of%20Skopje?uselang=en"),
  });
  //Description
  
 
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
      } as Leaflet.MarkerOptions).on('click', (e) => {
        this.form.controls.name.setValue("Национална галерија на Македонија „Чифте-амам“");
        this.form.controls.nameEn.setValue('Chifte Hammam National Gallery of Macedonia');
        this.form.controls.phone.setValue("+389 2 3227986");
        this.form.controls.opening_hours.setValue("Tu-Su 10:00-18:00");
        this.form.controls.website.setValue("https://nationalgallery.mk/");
        this.form.controls.wikipediaLink.setValue("https://en.wikipedia.org/wiki/en:%C4%8Cifte%20Hammam?uselang=en");
        this.cd.detectChanges();
        console.log( this.form.controls.name.value);
      }),
      new Leaflet.Marker(new Leaflet.LatLng(41.99179962329014, 21.429115723270925), {
        icon: this.blueIcon,
        title: 'Museum of the City of Skopje'
      } as Leaflet.MarkerOptions).on('click', (e) =>  {
        this.form.controls.name.setValue("Музеј на Град Скопје");
        this.form.controls.nameEn.setValue('Museum of the City of Skopje');
        this.form.controls.phone.setValue("+389 2 3114742");
        this.form.controls.opening_hours.setValue("Tu-Su 10:00-18:00");
        this.form.controls.website.setValue("http://www.mgs.org.mk/");
        this.form.controls.wikipediaLink.setValue("https://en.wikipedia.org/wiki/en:Museum%20of%20the%20City%20of%20Skopje?uselang=en");
        this.cd.detectChanges();
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
  constructor(private cd: ChangeDetectorRef) { }

//MAP
}

