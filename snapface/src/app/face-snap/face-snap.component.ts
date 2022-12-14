import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input()
  faceSnap!: FaceSnap;
  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.buttonText = "Like !";  
  }

  onSnap() {
    if (this.buttonText === "Like !") {
      this.faceSnapsService.getFaceSnapByIdLikes(this.faceSnap.id, 'Like !');
      this.buttonText = "DisLike !"
    } else {
        this.faceSnapsService.getFaceSnapByIdLikes(this.faceSnap.id, 'Like !');
        this.buttonText = "Like !"   
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
