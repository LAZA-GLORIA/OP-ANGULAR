import { Injectable } from "@angular/core";
import { Article } from "../models/article.model";

@Injectable({
    providedIn: 'root'
})

export class ArticlesService {
    articles: Article[] = [
        {
            id: 1,
            categoryUrl: "category",
            title: "Housse de couette",
            description: "Kaki clair/Traits blancs",
            imageUrl: "https://i.ibb.co/cvf34Hb/pexels-cottonbro-5473957.jpg", 
            availablity: "Not available in store",
            selectSize: "160/200cm"
        }
    ]
        
}