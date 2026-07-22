import { EvenkalenderRinciDto } from '../models/evenkalender-rinci.dto';
import { EvenkalenderRinci } from '../models/evenkalender-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: EvenkalenderRinciDto): EvenkalenderRinci {
    return dto as unknown as EvenkalenderRinci;
  }

  static toModelList(dtos: EvenkalenderRinciDto[]): EvenkalenderRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
