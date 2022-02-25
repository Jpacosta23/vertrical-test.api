import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotosDto } from './dto/photos.dto';
import { PhotosRepository } from './repository/photos.repository';
import { Photo } from 'src/Entities/photos.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotosRepository)
    private photosRepository: PhotosRepository,
  ) {}

  async getAllPhotos(): Promise<Photo[]> {
    return this.photosRepository.find();
  }

  async getPhotoById(id: number): Promise<Photo> {
    const photo = await this.photosRepository.findOne(id);
    if (photo === undefined) {
      throw new HttpException(
        {
          status: 404,
          error:
            "we are sorry, but the photo you're looking for does not exist.",
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return photo;
  }

  async getPhotosByTitle(title: any): Promise<Photo[]> {
    const photos = await this.photosRepository.getPhotosByTitle(title);
    if (photos.length === 0) {
      throw new HttpException(
        {
          status: 404,
          error:
            "we are sorry, but the title you're looking for does not exist.",
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return photos;
  }

  async createPhoto(photosDto: PhotosDto): Promise<Photo> {
    return await this.photosRepository.save(photosDto);
  }

  async updatePhotoById(id: number, body: any) {
    return await this.photosRepository.update(id, body);
  }
}
