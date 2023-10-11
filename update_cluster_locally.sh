#!/bin/bash

ENV=dev

./update_docker_image_locally.sh

# Install argocd
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl apply -k basic-stream-service/infra/overlays/$ENV
helm install -f values-$DEV.yaml kong-gateway/infra/helm
