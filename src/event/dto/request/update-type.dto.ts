import { IsString } from "class-validator";

export class UpdateTypeDTO{

    @IsString()
    private _id: string;

    @IsString()
    private _type: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }
}