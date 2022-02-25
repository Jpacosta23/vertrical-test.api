import { Injectable } from '@nestjs/common';
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
    return this.photosRepository.findOne(id);
  }

  async getPhotosByTitle(title: any): Promise<Photo[]> {
    return this.photosRepository.getPhotosByTitle(title);
  }

  async createPhoto(photosDto: PhotosDto): Promise<Photo> {
    return await this.photosRepository.save(photosDto);
  }

  async updatePhotoById(id: number, body: any) {
    return await this.photosRepository.update(id, body);
  }
}
