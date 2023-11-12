#!/bin/bash

env="$1"

# TODO: this resolve the issue where I want to build a docker image for this microservice without publishing the npm package
rm -rf ./basic-stream-service/node_modules/grpc-proto-shared && mkdir -p ./basic-stream-service/node_modules/grpc-proto-shared && cp -r grpc-proto-shared/ basic-stream-service/node_modules
docker build -t theocerutti/viteo-basic-stream-service:latest basic-stream-service
