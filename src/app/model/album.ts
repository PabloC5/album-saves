import { User } from "./user";
export class Album {
    id!: string;
    name_album?: string;
    album_sing?: string;
    album_image?: string;
    user_id?: User["id"];
    constructor(name_album: string, album_sing: string, album_image: string, user_id: User["id"]) {
        this.id = String(Math.round(Math.random() * 1000));
        this.name_album = name_album;
        this.album_sing = album_sing;
        this.album_image = album_image;
        this.user_id = user_id;
    }
}