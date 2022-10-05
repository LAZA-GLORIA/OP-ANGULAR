import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  //faceSnap!: FaceSnap;

  faceSnap$!: Observable<FaceSnap>;

  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = "Like !";  
    const faceSnapParamsId = +this.route.snapshot.params["id"];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapParamsId);
    //this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapParamsId);

  }

  onSnap(id: number) {
     if (this.buttonText === "Like !") {
      this.faceSnap$ = this.faceSnapsService.setSnapLikes(id, 'Like !').pipe(
        tap(() => {
          //Une autre implémentation plus simple 
          //this.faceSnap$ = this.faceSnapsService.getFaceSnapById(id);
          this.buttonText = "DisLike !";
        })
      )
      //plus besoin de souscription
   //   ).subscribe();
     
    } else {
        this.faceSnapsService.setSnapLikes(id, 'Dislike !').pipe(
          tap(() => {
            this.faceSnap$ = this.faceSnapsService.getFaceSnapById(id);
            this.buttonText = "Like !";
          })
        ).subscribe();
       
    }
    
  }

}
