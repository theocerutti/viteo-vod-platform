/* eslint-disable */
import type { Empty } from "../../google/protobuf/empty";
import type { StringValue } from "../../google/protobuf/wrappers";

export const protobufPackage = "basicstream.v1";

export interface AppService {
  getHello(request: Empty): Promise<StringValue>;
}
