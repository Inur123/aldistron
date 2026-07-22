import { OtpDto } from '../models/otp.dto';
import { Otp } from '../models/otp.model';

export class ModelToDtoMapper {
  static toDto(model: Otp): OtpDto {
    return model as unknown as OtpDto;
  }
}
