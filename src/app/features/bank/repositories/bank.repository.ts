import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BankService } from '../services/bank.service';
import { Bank } from '../models/bank.model';
import { BankMapper } from './bank.mapper';

@Injectable({
  providedIn: 'root'
})
export class BankRepository {
  constructor(private service: BankService) {}

  getBanks(): Observable<Bank[]> {
    return this.service.getBanks().pipe(
      map(dtos => BankMapper.toModelList(dtos))
    );
  }
}
