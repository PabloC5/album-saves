import { User } from "./user";
export class Album {
    id!: number;
    name_album?: string;
    album_image?: string;
    userId?: User["id"];
    constructor(name_album: string, album_image: string, userId: User["id"]) {
        this.id = Math.round(Math.random() * 1000);
        this.name_album = name_album;
        this.album_image = album_image;
        this.userId = userId;
    }
}