import { IsString, IsUrl } from "class-validator";

export class UpdateMediaThumbnailUrlDTO{
    
    @IsString()
    private _id: string;

    @IsUrl()
    private _mediaThumbnail: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get mediaThumbnail(): string {
        return this._mediaThumbnail;
    }

    public set mediaThumbnail(value: string) {
        this._mediaThumbnail = value;
    }
}