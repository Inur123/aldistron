export interface Bank {
  id: number;
  namaParam: string;
  stringParam: string;
  aliasParam: string;
  dateParam: Date;
  integerParam: number | null;
  floatParam: number | null;
  keteranganParam: string;
  createdAt?: Date;
  updatedAt?: Date;
}
