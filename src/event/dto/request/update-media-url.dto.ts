import { IsString, IsUrl } from "class-validator";

export class UpdateMediaUrlDTO{
    @IsString()
    private _id: string;

    @IsUrl()
    private _media: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get media(): string {
        return this._media;
    }

    public set media(value: string) {
        this._media = value;
    }
}