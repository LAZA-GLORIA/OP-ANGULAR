import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}

  //faceSnaps: FaceSnap[] = [];

      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
      }

      getFaceSnapById(id: number): Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
      }

     /**
      *  getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }
      

      getFaceSnapById(id: number): FaceSnap{
        const findfaceSnapId = this.faceSnaps.find(element => element.id === id);
        if(!findfaceSnapId) {
            throw new Error("FaceSnap not found!"); 
        } else {
            return findfaceSnapId;
        }
      }
      */

      // getFaceSnapByIdLikes(id: number, likes: 'Like !' | 'Dislike !'): void {
      //   const faceSnap: FaceSnap = this.getFaceSnapById(id);
      //       likes === 'Like !' ? faceSnap.snaps++ : faceSnap.snaps--;
      //   }

        setSnapLikes(id: number, likes: 'Like !' | 'Dislike !'): Observable<FaceSnap> {
            return this.getFaceSnapById(id).pipe(
              map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (likes === 'Like !' ? 1 : -1)
              })),
             switchMap(faceSnapMisaJour => 
              this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${id}`, faceSnapMisaJour))
            )}
      

      
      
      //   AddFaceSnap(formValue: FaceSnap): void {
      //   const faceSnap: FaceSnap = {
      //     ...formValue,
      //     createdDate: new Date(),
      //     snaps: 0,
      //     id: this.faceSnaps[this.faceSnaps.length -1].id +1

      //   };
      //   this.faceSnaps.push(faceSnap);
      // }
      

}