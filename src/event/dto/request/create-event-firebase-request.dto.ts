import { IsString, IsBoolean, IsDate, IsNumber, IsArray } from 'class-validator';
import { Timestamp } from 'firebase-admin/firestore';
export class CreateEventFirebaseRequestDTO {
    @IsString()
    private _authorId: string;

    @IsNumber()
    private _clickCount: number;

    @IsDate()
    private _creationDate: Timestamp;

    @IsString()
    private _description: string;

    @IsDate()
    private _expirationDate: Timestamp;

    @IsBoolean()
    private _isDeleted: boolean;

    @IsBoolean()
    private _isExclusive: boolean;

    @IsString()
    private _mediaThumbnailUrl: string;

    @IsString()
    private _mediaUrl: string;

    @IsDate()
    private _startDate: Timestamp;

    @IsArray()
    @IsString({ each: true }) 
    private _taggedUsers: string[];

    @IsString()
    private _title: string;

    @IsString()
    private _type: string;

    @IsNumber()
    private _viewCount: number;

    constructor(
        authorId: string,
        clickCount: number,
        creationDate: Timestamp,
        description: string,
        expirationDate: Timestamp,
        isDeleted: boolean,
        isExclusive: boolean,
        mediaThumbnailUrl: string,
        mediaUrl: string,
        startDate: Timestamp,
        taggedUsers: string[],
        title: string,
        type: string,
        viewCount: number
    ) {
        this._authorId = authorId;
        this._clickCount = clickCount;
        this._creationDate = creationDate;
        this._description = description;
        this._expirationDate = expirationDate;
        this._isDeleted = isDeleted;
        this._isExclusive = isExclusive;
        this._mediaThumbnailUrl = mediaThumbnailUrl;
        this._mediaUrl = mediaUrl;
        this._startDate = startDate;
        this._taggedUsers = taggedUsers;
        this._title = title;
        this._type = type;
        this._viewCount = viewCount;
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

    get creationDate(): Timestamp {
        return this._creationDate;
    }

    set creationDate(value: Timestamp) {
        this._creationDate = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get expirationDate(): Timestamp {
        return this._expirationDate;
    }

    set expirationDate(value: Timestamp) {
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

    get mediaThumbnailUrl(): string {
        return this._mediaThumbnailUrl;
    }

    set mediaThumbnailUrl(value: string) {
        this._mediaThumbnailUrl = value;
    }

    get mediaUrl(): string {
        return this._mediaUrl;
    }

    set mediaUrl(value: string) {
        this._mediaUrl = value;
    }

    get startDate(): Timestamp {
        return this._startDate;
    }

    set startDate(value: Timestamp) {
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