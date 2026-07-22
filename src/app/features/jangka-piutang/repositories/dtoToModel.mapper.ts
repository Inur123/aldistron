import { JangkaPiutangDto } from '../models/jangka-piutang.dto';
import { JangkaPiutang } from '../models/jangka-piutang.model';

export class DtoToModelMapper {
  static toModel(dto: JangkaPiutangDto): JangkaPiutang {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idAolterm: dto.id_aolterm,
      namaJangkapiutang: dto.nama_jangkapiutang,
      hariJangkapiutang: dto.hari_jangkapiutang,
      suspendedAol: dto.suspended_aol,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: JangkaPiutangDto[]): JangkaPiutang[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
