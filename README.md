Step 1:

Deploy an API Gateway and micro services to stream a video 
-> no authentication
-> fully local
-> stream a video on react app without any styling
-> no processing of the video

# Required

minikube

# Getting started

```bash
minikube start --static-ip=192.168.49.2
eval $(minikube docker-env)
cd scripts/build-service-docker-images.sh
cd ..
kubectl apply -R -f K8s

echo -e "$(minikube ip) api.minikube.com" | sudo tee -a /etc/hosts
echo -e "$(minikube ip) minikube.com" | sudo tee -a /etc/hosts
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
