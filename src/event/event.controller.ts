import { Controller, Get, Post, Body, Put, Query } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './dto/request/create-event.dto';
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

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('create/event')
  createEvent(@Body() request: CreateEventDTO) {
    return this.eventService.createEvent(request);
  }

  @Get('find/all')
  findAllEvents() {
    return this.eventService.getAllEvents();
  }

  @Get('find/eventById')
  findEventById(@Body() request: GetEventByIdDTO) {
    return this.eventService.getEventById(request);
  }

  @Get('find/eventsByAuthorId')
  findEventsByAuthorId(@Body() request: GetEventsByAuthorIdDTO) {
    return this.eventService.getEventsByAuthorId(request);
  }

  @Put('update/description')
  updateDescription(@Body() request: UpdateDescriptionDTO) {
    return this.eventService.updateDescription(request);
  }

  @Put('update/isDeleted')
  updateIsDeleted(@Body() request: UpdateIsDeletedDTO) {
    return this.eventService.updateIsDeleted(request);
  }

  @Put('update/duration')
  updateDuration(@Body() request: UpdateEventDurationDTO) {
    return this.eventService.updateDuration(request);
  }

  @Put('update/isExclusive')
  updateIsExclusive(@Body() request: UpdateIsEventExclusiveDTO) {
    return this.eventService.updateIsExclusive(request);
  }

  @Put('update/media')
  updateMedia(@Body() request: UpdateMediaUrlDTO) {
    return this.eventService.updateMedia(request);
  }

  @Put('update/mediaThumbnail')
  updateMediaThumbnail(@Body() request: UpdateMediaThumbnailUrlDTO) {
    return this.eventService.updateMediaThumbnail(request);
  }

  @Put('update/taggedUsers')
  updateTaggedUsers(@Body() request: UpdateTaggedUsersDTO) {
    return this.eventService.updateTaggedUsers(request);
  }

  @Put('update/title')
  updateTitle(@Body() request: UpdateTitleDTO) {
    return this.eventService.updateTitle(request);
  }

  @Put('update/type')
  updateType(@Body() request: UpdateTypeDTO) {
    return this.eventService.updateType(request);
  }

  @Get('/find/filter')
  public async paginate(@Query() request: PaginationQueryDTO) {
    return await this.eventService.paginate(request);
  }
}
