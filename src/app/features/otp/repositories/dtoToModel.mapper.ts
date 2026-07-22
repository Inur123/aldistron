import { OtpDto } from '../models/otp.dto';
import { Otp } from '../models/otp.model';

export class DtoToModelMapper {
  static toModel(dto: OtpDto): Otp {
    return dto as unknown as Otp;
  }

  static toModelList(dtos: OtpDto[]): Otp[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
