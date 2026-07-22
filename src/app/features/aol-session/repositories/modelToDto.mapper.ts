import { AolSessionDto } from '../models/aol-session.dto';
import { AolSession } from '../models/aol-session.model';

export class ModelToDtoMapper {
  static toDto(model: AolSession): AolSessionDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      dataversion_aol: model.dataversionAol,
      licenseend_aol: model.licenseendAol.toISOString(),
      session_aol: model.sessionAol,
      host_aol: model.hostAol,
      admin_aol: model.adminAol,
      accessibleuntil_aol: model.accessibleuntilAol.toISOString(),
      trial_aol: model.trialAol,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
