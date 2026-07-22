import { ApiAolDto } from '../models/api-aol.dto';
import { ApiAol } from '../models/api-aol.model';

export class ModelToDtoMapper {
  static toDto(model: ApiAol): ApiAolDto {
    return {
      id: model.id,
      nama_apiaol: model.namaApiaol,
      url_apiaol: model.urlApiaol,
      method_apiaol: model.methodApiaol,
      scope_apiaol: model.scopeApiaol,
      keterangan_apiaol: model.keteranganApiaol,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
