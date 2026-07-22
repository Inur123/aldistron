import { ProdukKompetitorDto } from '../models/produk-kompetitor.dto';
import { ProdukKompetitor } from '../models/produk-kompetitor.model';

export class ModelToDtoMapper {
  static toDto(model: ProdukKompetitor): ProdukKompetitorDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_cabang: model.idCabang,
      id_userdata: model.idUserdata,
      nama_administrator: model.namaAdministrator,
      email_administrator: model.emailAdministrator,
      jenis_produk: model.jenisProduk,
      nama_produk: model.namaProduk,
      produsen_produk: model.produsenProduk,
      alamat_produsen: model.alamatProdusen,
      konversi_produk: model.konversiProduk,
      barcode_produk: model.barcodeProduk,
      gambar_produk: model.gambarProduk,
      keterangan_produk: model.keteranganProduk,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
