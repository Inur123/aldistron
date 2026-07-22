export interface SiteLog {
  id: number;
  visitorId: string;
  userdata: number | null;
  visitsCount: number | null;
  ipAddress: string;
  requestedUrl: string;
  refererPage: string;
  pageName: string;
  queryString: string;
  userAgent: string;
  isUnique: boolean;
  accessDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
