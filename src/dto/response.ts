import { UrlsModelAttributes } from "../models/Urls";

export interface FailResponseBody {
  code: "fail";
  error: { message: string };
}

export interface SuccessResponseBody<T extends Record<string, unknown>> {
  code: "success";
  data: T;
}

// NOTES: To restrict a type to plain object
// T extends Record<string, unknown> --> to restrict the type of T into plain object
// <string, unknown> --> plain object

export interface SerializableUrlsModelAttributes {
  shortenedUrl: string;
  originalUrl: string;
  isCustom: boolean;
  visitCount: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type ShortUrlResponseData = Pick<
  SerializableUrlsModelAttributes,
  "originalUrl" | "shortenedUrl"
>;

export type StatisticsResponseData = Pick<
  SerializableUrlsModelAttributes,
  "createdAt" | "isCustom" | "originalUrl" | "shortenedUrl" | "visitCount"
>;
