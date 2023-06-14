import { BaseXHR } from "@/ultis/axios";

export const getArrApi = (data: string) =>
  BaseXHR.$get("/v2/news_list?" + data);
