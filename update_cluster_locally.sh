#!/bin/bash

env=$1

./update_docker_image_locally.sh "$env"

# ArgoCD Applications (not used in dev)
# Install argocd
#kubectl create namespace argocd
#kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
# Install argocd applications
#kubectl apply -k "argocd/applications/kustomize/overlays/$env"

# Install microservices
helm install kong --namespace kong --create-namespace --values "kong/infra/helm/values-$env.yaml" kong/infra/helm
kubectl create namespace basic-stream-service
kubectl apply -k "basic-stream-service/infra/kustomize/overlays/$env"
