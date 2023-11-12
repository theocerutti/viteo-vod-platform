/* eslint-disable */

export const protobufPackage = "basicstream.v1";

export interface GetStreamVideoRequest {
  id: string;
}

export interface GetStreamVideoResponse {
}

export interface VideoService {
  streamVideo(request: GetStreamVideoRequest): Promise<GetStreamVideoResponse>;
}
