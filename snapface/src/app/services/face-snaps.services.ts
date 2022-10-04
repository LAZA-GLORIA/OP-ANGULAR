import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: "Archibald Anne",
          description: "Mon meilleur ami depuis tout petit! Bald ",
          imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
          createdDate: new Date(),
          snaps: 0,
       },
      {
          id: 2,
          title: "Archimède",
          description: "Mon meilleur ami depuis tout petit! Mède",
          imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
          createdDate: new Date(),
          snaps: 20,
          location: "Paris"
        },
       {
          id: 3,
          title: "ArchiBolt",
          description: "Mon meilleur ami depuis tout petit! Bolt",
          imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
          createdDate: new Date(),
          snaps: 140,
        },
        {
          id: 4,
          title: "Archibald Anne",
          description: "Mon meilleur ami depuis tout petit! Bald ",
          imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
          createdDate: new Date(),
          snaps: 0,
          //pipe: 43.36,
       }
      ];

      getAllFaceSnaps(): FaceSnap[] {
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

      getFaceSnapByIdLikes(id: number, likes: 'Like !' | 'Dislike !'): void {
        const faceSnapId = this.getFaceSnapById(id);
            likes === 'Like !' ? faceSnapId.snaps++ : faceSnapId.snaps--;
        }

      AddFaceSap(formValue: { title: string, description: string, imageUrl: string, location?: string}): void {
        const faceSnap: FaceSnap = {
          ...formValue,
          createdDate: new Date(),
          snaps: 0,
          id: this.faceSnaps[this.faceSnaps.length -1].id +1

        };
        this.faceSnaps.push(faceSnap);
      }

}