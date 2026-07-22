import { ProductDto } from '../models/product.dto';
import { Product } from '../models/product.model';

export class DtoToModelMapper {
  static toModel(dto: ProductDto): Product {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idVendor: dto.id_vendor,
      idProdukbrand: dto.id_produkbrand,
      idProdukkategori: dto.id_produkkategori,
      idAolprod: dto.id_aolprod,
      namaVendorProduk: dto.nama_vendor_produk,
      namaBrandProduk: dto.nama_brand_produk,
      namaKategoriProduk: dto.nama_kategori_produk,
      nomorProduk: dto.nomor_produk,
      namaProduk: dto.nama_produk,
      jenisProduk: dto.jenis_produk,
      barcodeProduk: dto.barcode_produk,
      keteranganProduk: dto.keterangan_produk,
      aktifProduk: dto.aktif_produk,
      konversiUnit1: dto.konversi_unit1,
      konversiUnit2: dto.konversi_unit2,
      konversiUnit3: dto.konversi_unit3,
      konversiUnit4: dto.konversi_unit4,
      konversiUnit5: dto.konversi_unit5,
      rasioUnit1: dto.rasio_unit1,
      rasioUnit2: dto.rasio_unit2,
      rasioUnit3: dto.rasio_unit3,
      rasioUnit4: dto.rasio_unit4,
      rasioUnit5: dto.rasio_unit5,
      gramasiProduk: dto.gramasi_produk,
      panjangProdukKecil: dto.panjang_produk_kecil,
      lebarProdukKecil: dto.lebar_produk_kecil,
      tinggiProdukKecil: dto.tinggi_produk_kecil,
      panjangProdukBesar: dto.panjang_produk_besar,
      lebarProdukBesar: dto.lebar_produk_besar,
      tinggiProdukBesar: dto.tinggi_produk_besar,
      gambarProduk: dto.gambar_produk,
      minimBeliUnit1: dto.minim_beli_unit1,
      minimStokUnit1: dto.minim_stok_unit1,
      logAolcatId: dto.log_aolcat_id,
      logAolvenId: dto.log_aolven_id,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: ProductDto[]): Product[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
