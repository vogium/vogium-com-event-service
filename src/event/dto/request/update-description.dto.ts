import { IsString } from "class-validator";

export class UpdateDescriptionDTO{
    @IsString()
    private _id: string;

    @IsString()
    private _description: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }
}