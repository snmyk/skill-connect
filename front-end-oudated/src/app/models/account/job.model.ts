export interface Job {
  id: string;
  jobId: string;
  client: string;
  service: string;
  completedDate: string;
  earnings: number;
  rating?: number;
  review?: string;
}
