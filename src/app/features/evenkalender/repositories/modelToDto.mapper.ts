import { EvenkalenderDto } from '../models/evenkalender.dto';
import { Evenkalender } from '../models/evenkalender.model';

export class ModelToDtoMapper {
  static toDto(model: Evenkalender): EvenkalenderDto {
    return model as unknown as EvenkalenderDto;
  }
}
