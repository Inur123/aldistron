export interface HttpStatus {
  id: number;
  jenis: string;
  status: string;
  statusIndo: string;
  kode: number | null;
  keterangan: string;
  createdAt?: Date;
  updatedAt?: Date;
}
