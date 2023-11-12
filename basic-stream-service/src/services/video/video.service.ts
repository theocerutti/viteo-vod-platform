import { BadRequestException, Injectable, StreamableFile } from "@nestjs/common";
import { createReadStream } from "fs";
import { stat } from "fs/promises";
import { join } from "path";
import * as rangeParser from "range-parser";

export type VideoMetadata = {
  path: string;
  filename: string;
  mimetype: string;
}

@Injectable()
export class VideoService {
  async getVideoMetadata(id: number): Promise<VideoMetadata> {
    return Promise.resolve({
      path: `src/assets/videos/${id}.mp4`,
      filename: "1.mp4",
      mimetype: "video/mp4"
    });
  }

  async getVideoStreamById(id: number) {
    const videoMetadata = await this.getVideoMetadata(id);

    const stream = createReadStream(join(process.cwd(), videoMetadata.path));

    return new StreamableFile(stream, {
      disposition: `inline; filename="${videoMetadata.filename}"`,
      type: videoMetadata.mimetype
    });
  }

  getContentRange(rangeStart: number, rangeEnd: number, fileSize: number) {
    return `bytes ${rangeStart}-${rangeEnd}/${fileSize}`;
  }

  async getPartialVideoStream(id: number, range: string) {
    const videoMetadata = await this.getVideoMetadata(id);
    const videoPath = join(process.cwd(), videoMetadata.path);
    const fileSize = await this.getFileSize(videoPath);

    const { start, end } = this.parseRange(range, fileSize);

    const stream = createReadStream(videoPath, { start, end });

    const streamableFile = new StreamableFile(stream, {
      disposition: `inline; filename="${videoMetadata.filename}"`,
      type: videoMetadata.mimetype
    });

    const contentRange = this.getContentRange(start, end, fileSize);

    return {
      streamableFile,
      contentRange
    };
  }

  parseRange(range: string, fileSize: number) {
    const parseResult = rangeParser(fileSize, range);
    if (parseResult === -1 || parseResult === -2 || parseResult.length !== 1) {
      throw new BadRequestException();
    }
    return parseResult[0];
  }

  async getFileSize(path: string) {
    const status = await stat(path);

    return status.size;
  }
}
