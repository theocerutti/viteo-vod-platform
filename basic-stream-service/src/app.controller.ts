import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from "@nestjs/microservices";
import { StringValue } from "grpc-proto-shared/proto-ts/google/protobuf/wrappers";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @GrpcMethod('AppService', 'GetHello')
  getHello(): StringValue {
    return {
      value: "yes"
    }
  }
}
