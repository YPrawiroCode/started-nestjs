import { Expose, Transform } from 'class-transformer';
import { User } from '../../users/user.entity';

export class ReportDTO {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  mileage: number;
  @Expose()
  approved: boolean;

  @Transform(({ obj }) => {
    console.log('🚀 ~ file: report.dto.ts:25 ~ ReportDTO ~ obj', obj);
    return obj.user.id;
  })
  @Expose()
  userId: number;
}
