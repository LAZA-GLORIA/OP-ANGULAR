import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input()
  faceSnap!: FaceSnap;
  
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
  snapped!: boolean;

  ngOnInit() {
    //requêtes serveurs pour les données dynamiques
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis tout petit !";
    this.createdDate = new Date(); //crée à l'instant où l'instance de la classe est générée
    this.snaps = 6;
    this.imageUrl = "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg"
    this.buttonText = "Oh snap";
    
  }

  onSnap() {

    if (this.buttonText === "Oh snap") {
      this.faceSnap.snaps++;
      this.buttonText = "Oops, unSnap!"
    } else {
        this.faceSnap.snaps--;
        this.buttonText = "Oh, Snap!"
     
    }
  }

}
