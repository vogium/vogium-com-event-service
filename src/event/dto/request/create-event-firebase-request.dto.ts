import {
  IsString,
  IsBoolean,
  IsDate,
  IsNumber,
  IsArray,
} from 'class-validator';
import { Timestamp } from 'firebase-admin/firestore';
export class CreateEventFirebaseRequestDTO {
  @IsString()
  public authorId: string;

  @IsNumber()
  public clickCount: number;

  @IsDate()
  public creationDate: Timestamp;

  @IsString()
  public description: string;

  @IsDate()
  public expirationDate: Timestamp;

  @IsBoolean()
  public isDeleted: boolean;

  @IsBoolean()
  public isExclusive: boolean;

  @IsString()
  public mediaThumbnailUrl: string;

  @IsString()
  public mediaUrl: string;

  @IsDate()
  public startDate: Timestamp;

  @IsArray()
  @IsString({ each: true })
  public taggedUsers: string[];

  @IsString()
  public title: string;

  @IsString()
  public type: string;

  @IsNumber()
  public viewCount: number;

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
    viewCount: number,
  ) {
    this.authorId = authorId;
    this.clickCount = clickCount;
    this.creationDate = creationDate;
    this.description = description;
    this.expirationDate = expirationDate;
    this.isDeleted = isDeleted;
    this.isExclusive = isExclusive;
    this.mediaThumbnailUrl = mediaThumbnailUrl;
    this.mediaUrl = mediaUrl;
    this.startDate = startDate;
    this.taggedUsers = taggedUsers;
    this.title = title;
    this.type = type;
    this.viewCount = viewCount;
  }
}
