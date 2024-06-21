#!/bin/bash


echo "Starting services with Docker Compose..."
docker compose -f docker-compose-e2e.yml up --build -d

echo "Services running:"
docker compose ps

echo "To stop services:"
echo "docker compose down"

echo "test results will be available in test-results directory"
echo "Running tests..."
