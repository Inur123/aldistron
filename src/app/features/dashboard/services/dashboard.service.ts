import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DashboardResponseDto } from '../models/dashboard.dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboardSummary(): Observable<DashboardResponseDto> {
    // Return dummy data (nanti bisa diganti dengan call backend HTTP)
    return of({
      status: true,
      message: 'Success fetch dashboard summary',
      data: {
        stats: {
          totalModules: 87,
          totalUsers: 1420,
          totalProducts: 520,
          totalTransactions: 9850,
        },
        categories: [
          { category: 'User & System Admin', moduleCount: 12 },
          { category: 'Master Produk & Harga', moduleCount: 15 },
          { category: 'Vendor & Pelanggan', moduleCount: 18 },
          { category: 'Operasional & Sales', moduleCount: 20 },
          { category: 'Keuangan & Piutang', moduleCount: 14 },
          { category: 'Pengaturan & System', moduleCount: 8 },
        ]
      }
    });
  }
}
