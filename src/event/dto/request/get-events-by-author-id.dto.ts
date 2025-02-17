import { IsString } from "class-validator";

export class GetEventsByAuthorIdDTO{

    @IsString()
    private _authorId: string;

    public get authorId(): string {
        return this._authorId;
    }
    public set authorId(value: string) {
        this._authorId = value;
    }
    
    constructor(authorId: string){
        this._authorId = authorId;
    }
}