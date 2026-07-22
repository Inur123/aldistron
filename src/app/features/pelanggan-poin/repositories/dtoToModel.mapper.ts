import { PelangganPoinDto } from '../models/pelanggan-poin.dto';
import { PelangganPoin } from '../models/pelanggan-poin.model';

export class DtoToModelMapper {
  static toModel(dto: PelangganPoinDto): PelangganPoin {
    return {
      id: dto.id,
      idUserdata: dto.id_userdata,
      idPelanggan: dto.id_pelanggan,
      idJual: dto.id_jual,
      idTagih: dto.id_tagih,
      idEvent: dto.id_event,
      namaEvent: dto.nama_event,
      poinMasuk: dto.poin_masuk,
      poinKeluar: dto.poin_keluar,
      keterangan: dto.keterangan,
      poinSaldo: dto.poin_saldo,
      aktifEvent: dto.aktif_event,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: PelangganPoinDto[]): PelangganPoin[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
