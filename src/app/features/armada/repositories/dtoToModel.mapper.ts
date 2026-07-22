import { ArmadaDto } from '../models/armada.dto';
import { Armada } from '../models/armada.model';

export class DtoToModelMapper {
  static toModel(dto: ArmadaDto): Armada {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idCabang: dto.id_cabang,
      kodeArmada: dto.kode_armada,
      namaArmada: dto.nama_armada,
      jenisArmada: dto.jenis_armada,
      kategoriArmada: dto.kategori_armada,
      tahunArmada: dto.tahun_armada,
      panjangArmada: dto.panjang_armada,
      lebarArmada: dto.lebar_armada,
      tinggiArmada: dto.tinggi_armada,
      volumeArmada: dto.volume_armada,
      tonaseArmada: dto.tonase_armada,
      nopolArmada: dto.nopol_armada,
      stnkExpired: new Date(dto.stnk_expired),
      picArmada: dto.pic_armada,
      aktif: dto.aktif,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: ArmadaDto[]): Armada[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
