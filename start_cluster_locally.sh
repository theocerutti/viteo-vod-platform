#!/bin/bash

usage()
{
  echo -e "Usage: ./$(basename "$0") [...OPTIONS]:\n"
  echo "  --full-setup: Additional config (add /etc/hosts config...)"
  exit 0
}

envs=("staging" "prod" "dev")

is_in_or_exit()
{
  local value="$1"
  shift
  local values=("$@")

  if [[ -z $value || ! "${values[*]}" =~ $value ]]; then
    echo -e "$(basename "$0"): '$value': Parameter value doesn't exists in possible values: ${values[*]}."
    exit 1
  fi
}

get_opts()
{
  if ! options=$(getopt -o h --long full-setup,env: -n 'start_cluster_locally' -- "$@"); then
      exit 1
  fi

  eval set -- "$options"

  while [ $# -gt 0 ]; do
    if [ "$1" = "-h" ]; then
      usage
    fi
    shift
  done

  eval set -- "$options"

  while [ $# -gt 0 ]; do
      case $1 in
      --full-setup) full_setup=True ;;
      --env)
        is_in_or_exit "$2" "${envs[@]}"
        env="$2" ; shift ;;
      (--) shift; break;;
      (-*) echo "$0: error - unrecognized option $1" 1>&2; exit 1;;
      (*) break;;
    esac
    shift
  done
}

full_setup=False
env="dev"
build_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

get_opts "$@"

if [ $full_setup = "True" ]; then
  echo "Starting full setup in '$env' environment"
else
  echo "Starting cluster (not full setup: skipping /etc/hosts update) in '$env' environment"
fi

# Run minikube
minikube start \
  --kubernetes-version=v1.26.3 \
  --mount=true \
  --mount-string="$build_dir/grpc-proto-shared/services:/usr/include/grpc-proto-shared/services"

eval $(minikube -p minikube docker-env --shell=bash)

if [ "$full_setup" = "True" ]; then
  echo "$(minikube ip) basic-stream-service.local basic-stream-service-grpc.local" | sudo tee -a /etc/hosts
fi

./update_cluster_locally.sh "$env"
