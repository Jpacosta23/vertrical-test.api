import { Photo } from '../../entities/photos.entity';
import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Photo)
export class PhotosRepository extends Repository<Photo> {
  async getPhotosByTitle(title: any): Promise<Photo[]> {
    const query = this.createQueryBuilder('photo').where(
      'photo.title like :title',
      { title: `%${title.title}%` },
    );
    try {
      return await query.getMany();
    } catch (e) {
      throw new InternalServerErrorException(
        `failed to get titles like ${title}`,
      );
    }
  }
}
