import { AolSessionDto } from '../models/aol-session.dto';
import { AolSession } from '../models/aol-session.model';

export class DtoToModelMapper {
  static toModel(dto: AolSessionDto): AolSession {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      dataversionAol: dto.dataversion_aol,
      licenseendAol: new Date(dto.licenseend_aol),
      sessionAol: dto.session_aol,
      hostAol: dto.host_aol,
      adminAol: dto.admin_aol,
      accessibleuntilAol: new Date(dto.accessibleuntil_aol),
      trialAol: dto.trial_aol,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: AolSessionDto[]): AolSession[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
