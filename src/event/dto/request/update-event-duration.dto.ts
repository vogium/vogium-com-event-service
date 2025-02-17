import { IsDateString, IsString } from "class-validator";

export class UpdateEventDurationDTO{
    @IsString()
    private _id: string;

    @IsDateString()
    private _startDate: string;

    @IsDateString()
    private _expirationDate: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get startDate(): string {
        return this._startDate;
    }

    public set startDate(value: string) {
        this._startDate = value;
    }

    public get expirationDate(): string {
        return this._expirationDate;
    }

    public set expirationDate(value: string) {
        this._expirationDate = value;
    }
}