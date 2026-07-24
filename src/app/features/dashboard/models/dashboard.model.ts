export interface DashboardStats {
  totalModules: number;
  totalUsers: number;
  totalProducts: number;
  totalTransactions: number;
}

export interface DashboardCategory {
  category: string;
  moduleCount: number;
}

export interface DashboardSummary {
  stats: DashboardStats;
  categories: DashboardCategory[];
}
