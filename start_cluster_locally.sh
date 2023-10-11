#!/bin/bash

# Run minikube
minikube start
minikube eval $(minikube docker-env)
