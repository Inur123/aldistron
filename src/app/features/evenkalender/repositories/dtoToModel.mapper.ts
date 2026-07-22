import { EvenkalenderDto } from '../models/evenkalender.dto';
import { Evenkalender } from '../models/evenkalender.model';

export class DtoToModelMapper {
  static toModel(dto: EvenkalenderDto): Evenkalender {
    return dto as unknown as Evenkalender;
  }

  static toModelList(dtos: EvenkalenderDto[]): Evenkalender[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
