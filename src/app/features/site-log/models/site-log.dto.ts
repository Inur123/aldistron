export interface SiteLogDto {
  id: number;
  visitor_id: string;
  userdata: number | null;
  visits_count: number | null;
  ip_address: string;
  requested_url: string;
  referer_page: string;
  page_name: string;
  query_string: string;
  user_agent: string;
  is_unique: boolean;
  access_date: string;
  created_at?: string;
  updated_at?: string;
}
