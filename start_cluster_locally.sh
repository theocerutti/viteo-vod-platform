#!/bin/bash

# Run minikube
minikube start --kubernetes-version=v1.26.3
eval $(minikube -p minikube docker-env --shell=bash)

./update_cluster_locally.sh
