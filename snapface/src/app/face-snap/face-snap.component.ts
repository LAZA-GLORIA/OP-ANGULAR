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
  buttonText!: string;

  ngOnInit() {
    this.buttonText = "Like !";
    
  }

  onSnap() {
    if (this.buttonText === "Like !") {
      this.faceSnap.snaps++;
      this.buttonText = "DisLike !"
    } else {
        this.faceSnap.snaps--;
        this.buttonText = "Like !"   
    }
  }

}
