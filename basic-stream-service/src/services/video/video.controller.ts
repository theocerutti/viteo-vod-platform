import { Controller, Get } from "@nestjs/common";
import { VideoService } from "./video.service";
import { GetStreamVideoRequest, GetStreamVideoResponse } from "grpc-proto-shared/proto-ts/basicstream/v1/video";
import { GrpcStreamMethod } from "@nestjs/microservices";
import { Metadata, ServerDuplexStream } from "@grpc/grpc-js";
import { Observable, Subject } from "rxjs";

@Controller("v1/video")
export class VideoController {
  constructor(private readonly videoService: VideoService) {
  }

  @Get(":id")
  // @Header('Accept-Ranges', 'bytes')
  @GrpcStreamMethod("VideoService", "StreamVideo")
  streamVideo(
    data: Observable<GetStreamVideoRequest>, metadata: Metadata, call: ServerDuplexStream<any, any>
  ): Observable<GetStreamVideoResponse> {
    const subject = new Subject();
    return subject.asObservable();
    // if (!id) {
    //   throw new HttpException("Video ID is required", HttpStatus.BAD_REQUEST);
    // }
    // if (!range) {
    //   return this.videoService.getVideoStreamById(id);
    // }
    // const { streamableFile, contentRange } =
    //   await this.videoService.getPartialVideoStream(id, range);
    //
    // response.status(206);
    //
    // response.set({
    //   'Content-Range': contentRange,
    // });
    //
    // return streamableFile;
  }
}
