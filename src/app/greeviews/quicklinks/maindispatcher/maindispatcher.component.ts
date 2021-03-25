import { Component,  OnInit, ViewChild, ElementRef } from '@angular/core';
import { DriverService } from '../../../services/drivers.service';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

declare var google: any;
let maps: any;
let marker: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let infowindow: any;
const iconBase = 'http://maps.google.com/mapfiles/ms/icons/';

@Component({
  selector: 'app-maindispatcher',
  templateUrl: './maindispatcher.component.html',
  styleUrls: ['./maindispatcher.component.css']
})

export class MaindispatcherComponent implements OnInit {
  users:any;

  @ViewChild('maps', {static: false}) mapElement: ElementRef;

  constructor( private driverService: DriverService) {
  }

  ngOnInit(): void {

    setTimeout(() => {
      maps = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      this.mapElement.nativeElement.innerHTML = "Dom updated";
    }, 3000);



    this.retrieveUsers();
    this.initMap();

  }

  ///Retrive the Driver list of the system
  retrieveUsers(): void {
    this.driverService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.users = data;
      console.log("users ===> " + data);
      for (const donor of this.users) {
        this.createMarkers(donor);
      }
      console.log('data passing are   :====' + this.users);
    });
  }

  ///If user clicks on a driver
  click_on(user, i){
    console.log('click_on   user:====' + this.users + " Index  " + i);
  }

  createMarkers(place: any) {
    // const latitude = parseFloat(place.coords.latitude);
    // const longitude = parseFloat(place.coords.longitude);

    const latitude = parseFloat("6.901502065982516");
    const longitude = parseFloat("80.01377569011598");
    const donorMarker = new google.maps.Marker({
      maps,
      position: { lat: latitude, lng: longitude },
      icon: iconBase + 'green-dot.png'
    });

    google.maps.event.addListener(donorMarker, 'click', function() {
      infowindow.setContent('<h3>' + place.name + '</h3><p>Phone number: ' + place.phone + '<br>Email: ' + place.email + '</p>');
      infowindow.open(map, this);
    });
  }


  initMap() {
    console.log("initMap");
    navigator.geolocation.getCurrentPosition((location) => {
      console.log("initMap-->location " + location||JSON);
      maps = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: location.coords.latitude, lng: location.coords.longitude },
        zoom: 15
      });



      infowindow = new google.maps.InfoWindow();


      marker = new google.maps.Marker({
        position: { lat: location.coords.latitude, lng: location.coords.longitude },
        maps,
        title: 'Click to zoom',
        icon: iconBase + 'blue-dot.png'
      });

      maps.addListener('center_changed', () => {
        window.setTimeout(() => {
          maps.panTo(marker.getPosition());
        }, 3000);
      });

      marker.addListener('click', (event: any) => {
        infowindow.setPosition(event.latLng);
        infowindow.setContent('<h2>Yes, I wanna be a donor!</h2>' +
        '<h3><a href="/add-donor/' + marker.getPosition().lat() + '/' + marker.getPosition().lng()  + '">Register Here</a></h3>');
        infowindow.open(map, marker);
      });
    }, (error) => {
      console.log(error);
    }, options);
  }


}
