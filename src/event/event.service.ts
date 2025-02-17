import { Injectable } from '@nestjs/common';

import { FirebaseService } from 'src/firebase/firebase.service';
import { CreateEventDTO } from './dto/request/create-event.dto';
import { Timestamp } from 'firebase-admin/firestore';
import { COLLECTION_NAMES } from 'src/constants/firebase.constants';
import { CreateEventFirebaseRequestDTO } from './dto/request/create-event-firebase-request.dto';
import { GetEventByIdDTO } from './dto/request/get-event-by-id.dto';
import { GetEventsByAuthorIdDTO } from './dto/request/get-events-by-author-id.dto';
import { UpdateDescriptionDTO } from './dto/request/update-description.dto';
import { UpdateIsDeletedDTO } from './dto/request/update-is-deleted.dto';
import { UpdateEventDurationDTO } from './dto/request/update-event-duration.dto';
import { UpdateIsEventExclusiveDTO } from './dto/request/update-is-exclusive.dto';
import { UpdateMediaUrlDTO } from './dto/request/update-media-url.dto';
import { UpdateMediaThumbnailUrlDTO } from './dto/request/update-media-thumbnail-url.dto';
import { UpdateTaggedUsersDTO } from './dto/request/update-tagged-users.dto';
import { UpdateTitleDTO } from './dto/request/update-title-dto';
import { UpdateTypeDTO } from './dto/request/update-type.dto';
import { PaginationQueryDTO } from 'src/firebase/dto/pagination-query.dto';

@Injectable()
export class EventService {
  constructor(readonly firebaseService: FirebaseService){}

  public async getAllEvents() {
    const result = await this.firebaseService.getEventFromFirestore();
    return result.response;
  }
  // Create a new account
  public async createEvent(request: CreateEventDTO): Promise<any> {

    const mediaUrl = await this.handleFiles(request.media, 'mediaUrl');
    const mediaThumbnailUrl = await this.handleFiles(request.mediaThumbnail, 'mediaThumbnailUrl');
    const eventData = new CreateEventFirebaseRequestDTO(
      request.authorId,
      request.clickCount,
      Timestamp.fromDate(new Date()),
      request.description,
      Timestamp.fromDate(request.expirationDate),
      request.isDeleted,
      request.isExclusive,
      mediaThumbnailUrl,
      mediaUrl,
      Timestamp.fromDate(request.startDate),
      request.taggedUsers,
      request.title,
      request.type,
      request.viewCount
    );

    return await this.firebaseService.createOnFirestore(
      COLLECTION_NAMES.EVENT_COLLECTION,
      eventData,
    );
  }

  public async getEventById(request: GetEventByIdDTO){
    return await this.firebaseService.getEventFromFirestore(
      [ { field: 'id', operator: '==', value: request.id}]
    )
  }

  public async getEventsByAuthorId(request: GetEventsByAuthorIdDTO){
    return await this.firebaseService.getEventFromFirestore(
      [ { field: 'authorId', operator: '==', value: request.authorId}]
    )
  }

  public async updateDescription(request: UpdateDescriptionDTO){
    const { id, description} = request;
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.description = description;
    return await firebaseResponse.ref.update(response);
  }

  public async updateIsDeleted(request: UpdateIsDeletedDTO){
    const { id, isDeleted} = request;
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.isDeleted = isDeleted;
    return await firebaseResponse.ref.update(response);
  } 
  
  public async updateDuration(request: UpdateEventDurationDTO){
    const { id, startDate, expirationDate} = request;
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.startDate = this.firebaseService.convertDateToTimestamp(startDate);
    response.expirationDate = this.firebaseService.convertDateToTimestamp(expirationDate);
    return await firebaseResponse.ref.update(response);
  }
  
  public async updateIsExclusive(request: UpdateIsEventExclusiveDTO){
    const { id, isExclusive} = request;
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.isExclusive = isExclusive;
    return await firebaseResponse.ref.update(response);
  }

  public async updateMedia(request: UpdateMediaUrlDTO){
    const { id, media} = request;
    const mediaUrl = await this.handleFiles(media, 'mediaUrl');
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.mediaUrl = mediaUrl;
    return await firebaseResponse.ref.update(response);
  }  
  
  public async updateTaggedUsers(request: UpdateTaggedUsersDTO){
    const { id, taggedUsers} = request;
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.taggedUsers = taggedUsers;
    return await firebaseResponse.ref.update(response);
  }

  public async updateTitle(request: UpdateTitleDTO){
    const { id, title} = request;
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.title = title;
    return await firebaseResponse.ref.update(response);
  }

  public async updateType(request: UpdateTypeDTO){
    const { id, type} = request;
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.type = type;
    return await firebaseResponse.ref.update(response);
  }

  public async updateMediaThumbnail(request: UpdateMediaThumbnailUrlDTO){
    const { id, mediaThumbnail: mediaThumbnail} = request;
    const mediaThumbnailUrl = await this.handleFiles(mediaThumbnail, 'mediaThumbnailUrl');
    const {firebaseResponse, response} = await this.getEventById(new GetEventByIdDTO(id));
    response.mediaThumbnailUrl = mediaThumbnailUrl;
    return await firebaseResponse.ref.update(response);
  }

  public async paginate(query: PaginationQueryDTO){
    return await this.firebaseService.paginate(COLLECTION_NAMES.EVENT_COLLECTION, query);
  }

  private async handleFiles(fileBase64: string, fieldName: string, id?: string): Promise<string> {
    return await this.firebaseService.uploadFileFromBase64( fieldName, fileBase64, id);
  }
}
