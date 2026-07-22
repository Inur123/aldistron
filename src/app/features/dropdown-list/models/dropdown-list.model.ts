export interface DropdownList {
  id: number;
  namaParam: string;
  stringParam: string;
  aliasParam: string;
  dateParam: Date;
  integerParam: number | null;
  floatParam: number | null;
  textParam: string;
  keteranganParam: string;
  createdAt?: Date;
  updatedAt?: Date;
}
