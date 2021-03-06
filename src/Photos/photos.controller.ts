import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PhotosDto } from './dto/photos.dto';
import { PhotosService } from './photos.service';

@Controller('photo')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}
  private logger = new Logger('UserController');
  @Get()
  getPhotos() {
    return this.photosService.getAllPhotos();
  }

  @Get(':id')
  getPhotoById(@Param('id') id: number) {
    return this.photosService.getPhotoById(id);
  }

  @Post()
  getPhotosByTitle(@Body() title: any) {
    return this.photosService.getPhotosByTitle(title);
  }

  @Post()
  createPhoto(@Body() photosDto: PhotosDto) {
    this.logger.log('creating photo...');
    return this.photosService.createPhoto(photosDto);
  }

  @Patch()
  async updatePhoto(@Query() id: number, @Body() body) {
    return await this.photosService.updatePhotoById(id, body);
  }
}
