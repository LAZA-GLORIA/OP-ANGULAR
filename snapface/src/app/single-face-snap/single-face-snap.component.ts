import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = "Like !";  
    const faceSnapParamsId = +this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapParamsId);
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

}
