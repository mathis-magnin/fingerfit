#!/bin/bash

wait_for_service_health() {
  service_name=$1
  echo "Waiting for $service_name to be healthy..."
  timeout=300  # Timeout set to 5 minutes (300 seconds)
  start_time=$(date +%s)
  
  while :
  do
    # Check if timeout has been reached
    current_time=$(date +%s)
    elapsed_time=$((current_time - start_time))
    if [ $elapsed_time -gt $timeout ]; then
      echo "Timeout exceeded while waiting for $service_name to become healthy."
      exit 1
    fi
    
    health_status=$(docker inspect --format='{{.State.Health.Status}}' "$(docker compose ps -q "$service_name")")
    if [ "$health_status" == "healthy" ]; then
      echo "$service_name is healthy."
      break
    elif [ "$health_status" == "unhealthy" ]; then
      echo "$service_name is unhealthy. Exiting."
      exit 1
    else
      echo "$service_name is not healthy yet. Current status: $health_status"
      sleep 5
    fi
  done
}

echo "Starting services with Docker Compose..."
docker compose -f docker-compose.yml up --build -d

wait_for_service_health back
wait_for_service_health front


echo "Both front and back services are healthy."

# Affiche le statut des services
echo "Services running:"
docker compose ps

echo "To stop services:"
echo "docker compose down"
