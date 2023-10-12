#!/bin/bash

ENV=dev

./update_docker_image_locally.sh

# ArgoCD Applications (not used in dev)
# Install argocd
#kubectl create namespace argocd
#kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
# Install argocd applications
#kubectl apply -k "argocd/applications/kustomize/overlays/$ENV"

# Install microservices
kubectl create namespace basic-stream-service
kubectl apply -k "basic-stream-service/infra/kustomize/overlays/$ENV"
helm install kong-gateway --namespace kong-gateway --create-namespace --values "kong-gateway/infra/helm/values-$ENV.yaml" kong-gateway/infra/helm
