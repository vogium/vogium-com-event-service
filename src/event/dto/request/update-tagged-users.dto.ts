import { IsString } from "class-validator";

export class UpdateTaggedUsersDTO{
    
    @IsString()
    private _id: string;

    @IsString({ each: true })
    private _taggedUsers: string[];

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get taggedUsers(): string[] {
        return this._taggedUsers;
    }

    public set taggedUsers(value: string[]) {
        this._taggedUsers = value;
    }
}