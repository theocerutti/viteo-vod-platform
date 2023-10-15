import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { grpcClientOptions } from "./main";
import { GrpcReflectionModule } from "nestjs-grpc-reflection";

@Module({
  imports: [
    GrpcReflectionModule.registerAsync({
      imports: undefined,
      useFactory: async () => {
        return grpcClientOptions;
      },
      inject: []
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
