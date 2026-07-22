import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PengaturanService } from '../services/pengaturan.service';
import { Pengaturan } from '../models/pengaturan.model';
import { PengaturanMapper } from './pengaturan.mapper';


@Injectable({
  providedIn: 'root'
})
export class PengaturanRepository {
  constructor(private pengaturanService: PengaturanService) {}

  getPengaturans(): Observable<Pengaturan[]> {
    return this.pengaturanService.getPengaturans().pipe(
      map(dtos => PengaturanMapper.toModelList(dtos))
    );
  }
}
