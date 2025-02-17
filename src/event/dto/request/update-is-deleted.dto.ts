import { IsBoolean, IsString } from "class-validator";

export class UpdateIsDeletedDTO{
    @IsString()
    private _id: string;

    @IsBoolean()
    private _isDeleted: boolean;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get isDeleted(): boolean {
        return this._isDeleted;
    }

    public set isDeleted(value: boolean) {
        this._isDeleted = value;
    }
}