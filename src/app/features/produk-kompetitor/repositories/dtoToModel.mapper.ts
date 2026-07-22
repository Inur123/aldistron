import { ProdukKompetitorDto } from '../models/produk-kompetitor.dto';
import { ProdukKompetitor } from '../models/produk-kompetitor.model';

export class DtoToModelMapper {
  static toModel(dto: ProdukKompetitorDto): ProdukKompetitor {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idCabang: dto.id_cabang,
      idUserdata: dto.id_userdata,
      namaAdministrator: dto.nama_administrator,
      emailAdministrator: dto.email_administrator,
      jenisProduk: dto.jenis_produk,
      namaProduk: dto.nama_produk,
      produsenProduk: dto.produsen_produk,
      alamatProdusen: dto.alamat_produsen,
      konversiProduk: dto.konversi_produk,
      barcodeProduk: dto.barcode_produk,
      gambarProduk: dto.gambar_produk,
      keteranganProduk: dto.keterangan_produk,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: ProdukKompetitorDto[]): ProdukKompetitor[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
