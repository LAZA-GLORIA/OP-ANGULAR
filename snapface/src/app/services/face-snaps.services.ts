import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title: "Archibald Anne",
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
        },
        {
          title: "Archibald Anne",
          description: "Mon meilleur ami depuis tout petit! Bald ",
          imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg",
          createdDate: new Date(),
          snaps: 0,
          //pipe: 43.36,
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