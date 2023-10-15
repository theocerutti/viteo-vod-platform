#!/bin/bash

# Run minikube
minikube start --kubernetes-version=v1.26.3
eval $(minikube -p minikube docker-env --shell=bash)
echo "$(minikube ip) basic-stream-service.local basic-stream-service-grpc.local" | sudo tee -a /etc/hosts

./update_cluster_locally.sh

# TODO: should be removed
minikube mount /home/theo/GITHUB/viteo-vod-platform/grpc-proto-shared/services:/home/theo/GITHUB/viteo-vod-platform/grpc-proto-shared/services
