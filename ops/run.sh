#!/bin/bash

echo "Starting services ..."
docker compose -f docker-compose.yml up --build -d

# Affiche le statut des services
echo "Services running :"
docker compose ps

service_name=front
echo "Waiting for $service_name to be healthy..."
while :
do
    health_status=$(docker inspect --format='{{.State.Health.Status}}' "$(docker compose ps -q "$service_name")")
    if [ "$health_status" == "healthy" ]; then
        echo "Back and front are both healthy."
        break
    else
        echo "Front is not healthy yet. Current status: $health_status"
        sleep 5
    fi
done

echo "To stop services, use command :"
echo "docker compose down"

