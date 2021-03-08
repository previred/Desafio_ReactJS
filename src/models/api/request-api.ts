import { RequestEnum } from "./request.enum";

interface RequestApi {
  name: RequestEnum;
  numberRequest?: number;
  params?: any;
  refreshLoading?: boolean;
}

export type { RequestApi };
