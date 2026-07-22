import { UnitDto } from '../models/unit.dto';
import { Unit } from '../models/unit.model';

export class DtoToModelMapper {
  static toModel(dto: UnitDto): Unit {
    return dto as unknown as Unit;
  }

  static toModelList(dtos: UnitDto[]): Unit[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
