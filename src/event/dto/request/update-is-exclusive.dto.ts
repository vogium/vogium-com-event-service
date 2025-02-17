import { IsString, IsBoolean } from "class-validator";

export class UpdateIsEventExclusiveDTO{
    @IsString()
    private _id: string;

    @IsBoolean()
    private _isExclusive: boolean;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get isExclusive(): boolean {
        return this._isExclusive;
    }

    public set isExclusive(value: boolean) {
        this._isExclusive = value;
    }
}
