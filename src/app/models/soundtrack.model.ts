import { VideoGame } from './videogame.model';
export class SoundTrack{
    _id: string;
    name: string;
    information: string;
    url: string;
    videogame: VideoGame;
    createdAt: string;
    updatedAt: string;
}