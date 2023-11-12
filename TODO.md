* build image only if microservice has changed
* github actions: set shared list of microservice to be use on all workflows
* github actions: build phase
* versioning of docker images and npm packages
* does npm publish package action should be on the repo side rather than .github root folder
* setup HTTPS/GRPCS
* apply ci/cd rules only if files has been updated
* handle error exception in nestjs grpc microservice (make a npm package?)
  -> https://github.com/mohsenbostan/nestjs-grpc-exceptions/blob/main/lib/interceptors/grpc-to-http.interceptor.ts
  -> https://stackoverflow.com/questions/72152120/how-to-handle-rpcexception-in-nestjs
* understand how to hotreload/autocompile proto files in kube-gateway
* make sure to generate proto ts files in CI
