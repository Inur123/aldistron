import { DashboardResponseDto } from '../models/dashboard.dto';
import { DashboardSummary } from '../models/dashboard.model';

export class DashboardMapper {
  static toModel(dto: DashboardResponseDto['data']): DashboardSummary {
    return {
      stats: {
        totalModules: dto.stats.totalModules,
        totalUsers: dto.stats.totalUsers,
        totalProducts: dto.stats.totalProducts,
        totalTransactions: dto.stats.totalTransactions,
      },
      categories: dto.categories.map(c => ({
        category: c.category,
        moduleCount: c.moduleCount
      }))
    };
  }
}
