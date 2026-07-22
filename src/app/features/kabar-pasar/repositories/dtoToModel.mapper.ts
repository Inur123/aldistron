import { KabarPasarDto } from '../models/kabar-pasar.dto';
import { KabarPasar } from '../models/kabar-pasar.model';

export class DtoToModelMapper {
  static toModel(dto: KabarPasarDto): KabarPasar {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idCabang: dto.id_cabang,
      namaAdministrator: dto.nama_administrator,
      emailAdministrator: dto.email_administrator,
      idUserdata: dto.id_userdata,
      idProduk: dto.id_produk,
      idVendor: dto.id_vendor,
      shareVendor: dto.share_vendor,
      idProdukKompetitor: dto.id_produk_kompetitor,
      idPelanggan: dto.id_pelanggan,
      provinceId: dto.province_id,
      regencyId: dto.regency_id,
      districtId: dto.district_id,
      villageId: dto.village_id,
      namaPropinsi: dto.nama_propinsi,
      namaKabupaten: dto.nama_kabupaten,
      namaKecamatan: dto.nama_kecamatan,
      namaDesa: dto.nama_desa,
      kategori: dto.kategori,
      gambarKabar: dto.gambar_kabar,
      keterangan: dto.keterangan,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: KabarPasarDto[]): KabarPasar[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
