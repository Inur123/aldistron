import { ApiAolDto } from '../models/api-aol.dto';
import { ApiAol } from '../models/api-aol.model';

export class DtoToModelMapper {
  static toModel(dto: ApiAolDto): ApiAol {
    return {
      id: dto.id,
      namaApiaol: dto.nama_apiaol,
      urlApiaol: dto.url_apiaol,
      methodApiaol: dto.method_apiaol,
      scopeApiaol: dto.scope_apiaol,
      keteranganApiaol: dto.keterangan_apiaol,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: ApiAolDto[]): ApiAol[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
