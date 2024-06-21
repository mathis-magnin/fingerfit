#!/bin/bash


echo "Starting services with Docker Compose..."
docker compose -f docker-compose-e2e.yml up --build -d

echo "Services running:"
docker compose ps

echo "To stop services:"
echo "docker compose down"
echo "Running tests..."


docker compose -f docker-compose-e2e.yml logs -f playwright

echo "test results are available in test-results directory"