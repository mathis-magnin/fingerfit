
echo "Démarrage des services avec Docker Compose..."
docker compose up --build -d

docker compose logs back

# Affiche le statut des services
echo "Les services en cours d'exécution:"
docker compose ps

echo "Pour arrêter les services, utilisez la commande suivante:"
echo "docker compose down"

