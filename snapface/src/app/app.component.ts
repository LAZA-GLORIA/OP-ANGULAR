import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap

 ngOnInit() {
  this.mySnap = new FaceSnap(
    "Archibald",
    "Mon meilleur ami depuis tout petit! ",
    "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
    new Date(),
    0
  );  
 }
}
