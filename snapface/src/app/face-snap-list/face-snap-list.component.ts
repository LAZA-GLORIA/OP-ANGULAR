import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>;
  
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
}

/**
 * export class FaceSnapListComponent implements OnInit {

  faceSnaps! : FaceSnap[];


  private destroy$!: Subject<boolean>;
  
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    interval(500).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
 */