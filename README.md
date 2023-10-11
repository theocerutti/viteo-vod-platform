# Viteo Platform

## Steps

### Step 1

Deploy an API Gateway and micro services to stream a video
-> argocd for the continous deployment of the kubernetes cluster
-> github actions to build images of microservices and tests all microservices
-> kong gateway setup
-> micro service of basic stream video
-> no authentication
-> stream a video on react app without any styling
-> no processing of the video (the video is already in the right format and already in the server)
-> full TCP
-> no GraphQL
-> no CDN
-> no hystrix
-> no monitoring

### Step 2

-> authentication
-> processing of the video (+admin panel to upload videos)

### Step 3

-> GRPC
-> GraphQL

### Step 4

-> monitoring
-> video process info service + kafka
-> DRM

### Step 5

-> CDN
-> Redis
-> Hystrix

### Step 6

-> DRM implementation

### Step 7

-> React app + send events to Video Process Info Service

### Step 8

-> Mobile app + send events to Video Process Info Service

### Step 9
-> use video process info service and analyze data
-> video recommendation

### Step 10

-> deploy to production (this step should be easy as everything as been done to do so)

## Getting started

### Required

```bash
minikube
```

### Run the project

```bash
./start_cluster_locally.sh
```

## Services

## ArgoCD

Access it:

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

Get Admin Password (user is 'admin'):

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

Deploy an application

```bash
kubectl apply -n argocd -k argocd/applications/kustomize/overlays/dev
```

## How to add a microservice ?

### Create a new microservice

```bash
nest new <microservice-name>
npm install --save @nestjs/microservices
```

### Add the microservice to the kubernetes cluster with argocd

Add the microservice to the argocd/applications/
Then deploy it the application:

```yaml
kubectl apply -n argocd -k argocd/applications/kustomize/overlays/dev
```

### Link your microservice to CI

Add a new job in the .github/actions/test.yml

Example:

```yaml
name: Test
description: Test <microservice-name>

runs:
  using: "composite"
  steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: "18"
    - run: npm test
      shell: bash
```
