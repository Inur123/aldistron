export interface DashboardStatsDto {
  totalModules: number;
  totalUsers: number;
  totalProducts: number;
  totalTransactions: number;
}

export interface DashboardCategoryDto {
  category: string;
  moduleCount: number;
}

export interface DashboardResponseDto {
  status: boolean;
  message?: string;
  data: {
    stats: DashboardStatsDto;
    categories: DashboardCategoryDto[];
  };
}
