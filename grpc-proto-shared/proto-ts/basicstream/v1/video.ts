/* eslint-disable */

export const protobufPackage = "basicstream.v1";

export interface GetStreamVideoRequest {
  id: number | undefined;
}

export interface GetStreamVideoResponse {
  data: Uint8Array | undefined;
}

export interface VideoService {
  streamVideo(request: GetStreamVideoRequest): Promise<GetStreamVideoResponse>;
}
