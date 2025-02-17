import { IsString, IsBoolean, IsDate, IsNumber, IsArray, IsDateString } from 'class-validator';
export class CreateEventDTO {
    @IsString()
    private _id: string;

    @IsString()
    private _authorId: string;

    @IsNumber()
    private _clickCount: number;

    @IsString()
    private _description: string;

    @IsDate()
    private _expirationDate: Date;

    @IsBoolean()
    private _isDeleted: boolean;

    @IsBoolean()
    private _isExclusive: boolean;

    @IsString()
    private _mediaThumbnail: string;

    @IsString()
    private _media: string;

    @IsDate()
    private _startDate: Date;

    @IsArray()
    @IsString({ each: true }) 
    private _taggedUsers: string[];

    @IsString()
    private _title: string;

    @IsString()
    private _type: string;

    @IsNumber()
    private _viewCount: number;

    @IsDateString()
    private _creationDate?: string;

    constructor(
        id: string,
        authorId: string,
        clickCount: number,
        description: string,
        expirationDate: Date,
        isDeleted: boolean,
        isExclusive: boolean,
        mediaThumbnail: string,
        media: string,
        startDate: Date,
        taggedUsers: string[],
        title: string,
        type: string,
        viewCount: number,
        creationDate?: string,
    ) {
        this._id = id;
        this._authorId = authorId;
        this._clickCount = clickCount;
        this._creationDate = creationDate;
        this._description = description;
        this._expirationDate = expirationDate;
        this._isDeleted = isDeleted;
        this._isExclusive = isExclusive;
        this._mediaThumbnail = mediaThumbnail;
        this._media = media;
        this._startDate = startDate;
        this._taggedUsers = taggedUsers;
        this._title = title;
        this._type = type;
        this._viewCount = viewCount;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get authorId(): string {
        return this._authorId;
    }

    set authorId(value: string) {
        this._authorId = value;
    }

    get clickCount(): number {
        return this._clickCount;
    }

    set clickCount(value: number) {
        this._clickCount = value;
    }

    get creationDate(): string {
        return this._creationDate;
    }

    set creationDate(value: string) {
        this._creationDate = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get expirationDate(): Date {
        return this._expirationDate;
    }

    set expirationDate(value: Date) {
        this._expirationDate = value;
    }

    get isDeleted(): boolean {
        return this._isDeleted;
    }

    set isDeleted(value: boolean) {
        this._isDeleted = value;
    }

    get isExclusive(): boolean {
        return this._isExclusive;
    }

    set isExclusive(value: boolean) {
        this._isExclusive = value;
    }

    get mediaThumbnail(): string {
        return this._mediaThumbnail;
    }

    set mediaThumbnail(value: string) {
        this._mediaThumbnail = value;
    }

    get media(): string {
        return this._media;
    }

    set media(value: string) {
        this._media = value;
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value: Date) {
        this._startDate = value;
    }

    get taggedUsers(): string[] {
        return this._taggedUsers;
    }

    set taggedUsers(value: string[]) {
        this._taggedUsers = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get viewCount(): number {
        return this._viewCount;
    }

    set viewCount(value: number) {
        this._viewCount = value;
    }
}