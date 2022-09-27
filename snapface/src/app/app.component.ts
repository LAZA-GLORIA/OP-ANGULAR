import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps! : FaceSnap[];

 ngOnInit() {
  this.faceSnaps = [
    {
      title: "Archibald",
      description: "Mon meilleur ami depuis tout petit! Bald ",
      imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
      createdDate: new Date(),
      snaps: 0,
   },
  {
      title: "Archimède",
      description: "Mon meilleur ami depuis tout petit! Mède",
      imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
      createdDate: new Date(),
      snaps: 20,
      location: "Paris"
    },
   {
      title: "ArchiBolt",
      description: "Mon meilleur ami depuis tout petit! Bolt",
      imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
      createdDate: new Date(),
      snaps: 140,
    }
  ]
 }
}
