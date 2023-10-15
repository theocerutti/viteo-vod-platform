import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { GrpcOptions, MicroserviceOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";

const protoImportPath = "../node_modules/grpc-proto-shared/services";
const protoPath = "basicstream/v1/app.proto";
const protoPackage = "basicstream.v1";

export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: "0.0.0.0:3000",
    package: protoPackage,
    protoPath: [join(__dirname, protoImportPath, protoPath)],
    loader: {
      includeDirs: [join(__dirname, protoImportPath)]
    }
  }
});


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, grpcClientOptions);
  await app.listen();
}

bootstrap();
