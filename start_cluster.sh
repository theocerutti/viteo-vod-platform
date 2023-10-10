#!/bin/bash

# Run minikube
minikube start -n 2
minikube addons configure registry-creds
minikube addons enable registry-creds

# Install argocd
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
