# Livrable FingerFit

## Sommaire 

- [Tests playwright](#tests-playwright)
    - [Critères de priorisation des tests](#critères-de-priorisation-des-tests)
    - [Scénarios des tests](#scénarios-des-tests)
        - [État d’implémentation](#etat-dimplémentation)
        - [Ordre de priorité du scénario en fonction de nos critères et justification](#ordre-de-priorité-du-scénario-en-fonction-de-nos-critères-et-justification)
- [Ops](#ops)
    - [Explication et status du livrable](#explication-et-status-du-livrable)
        - [run.sh](#runsh)
        - [run-e2e.sh](#run-e2esh)
    - [Healthchecks](#healthchecks)
        - [Back](#back)
        - [Front](#front)


## Tests playwright 

### Critères de priorisation des tests

Pour notre site, nous avons privilégié les critères suivants : 


- Impact utilisateur : Mesurer l'importance de la fonctionnalité pour l'utilisateur final, notamment les enfants et les encadrants. Une fonctionnalité fréquemment utilisée ou essentielle à l'expérience utilisateur doit être testée en priorité.

- Fréquence d'utilisation : Donner la priorité aux fonctionnalités les plus fréquemment utilisées par les utilisateurs pour s'assurer qu'elles fonctionnent parfaitement.

- Criticité : Évaluer les conséquences d'un dysfonctionnement de la fonctionnalité sur le fonctionnement global du site. Les fonctionnalités critiques pour le bon déroulement du jeu comme pour la gestion des profils nécessitent une attention particulière.


### Scénarios des tests

Nous avons identifié cinq scénarios de tests à implémenter : 
1.  Jouer au jeu avec différentes options proposées 
2. La création de quiz (nous l'avons dissocié de la création de quiz par simplicité)
3. La création de positions 
4. L'ajout/suppression de profils par l'encadrante
5. La consultation des statistiques relative à un enfant

#### Etat d’implémentation

1. [DONE]
2. [DONE]
3. [DONE]
4. [DONE]
5. [DONE]

#### Ordre de priorité du scénario en fonction de nos critères et justification

Nous avons décidé de prioriser nos tests de façon ordonnée de la façon suivante : 

- Jeu : Il est essentiel de tester le jeu et ses fonctionnalités pour le bon déroulement des parties et assurer l'expérience utilisateur de l'enfant accueilli.
[Critique, Très fréquent et Impact].

- Création de quiz et position : Notre jeu repose également sur le fait que l'encadrante ait la possibilité d'adapter le jeu à l'enfant qu'elle encadre. Pour cela, il est très important de pouvoir ajouter des quiz et positions pour adapter l'expérience à l'enfant en question.
[Critique, Assez fréquent et Impact important]

- Profils : La fonctionnalité d'ajout de profil est essentiel pour notre site pour assurer la possibilité d'ajouter un nouvel enfant bien qu'elle reste moins importante que les deux premiers axes ci-dessus.
[Critique, peu fréquent, Impact moyen]

- Consultation des statistiques : Contrairement à toutes les autres fonctionnalités citées ci-dessus, celle-ci n'est pas indispensable au bon fonctionnement du site, il reste tout de même important de pouvoir les consulter pour suivre l'évolution et amélioration de l'enfant.
[Impact moyen, peu fréquent, peu critique]


## Ops 

### Explication et statut du livrable 

Dans l'état actuel des choses, vous retrouverez dans ce dossier deux scripts shell pour exécuter le site en version dockerisé ([run.sh](run.sh)) ou exécuter les tests avec playwright dockerisé ([run-e2e.sh](run-e2e.sh)).

Chaque script appel un docker compose différent (respectivement [docker-compose](docker-compose.yml) et [docker-compose-e2e](docker-compose-e2e.yml)).

Vous retrouverez deux Dockerfiles (un pour les tests et un pour run normalement) dans le front et un dans le back.

Il est actuellement possible de run le site classiquement sans docker ou bien le run avec docker. 

Nous avons fait en sorte que le back puisse run différemment si c'est un test grâce à des arguments passés dans le compose ([Dockerfile du back](../backend/Dockerfile)) : 

```
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"e2e\" ]; then npm run start:e2e; else npm run start; fi"]
```

Nous avons également utilisé les arguments et environnements docker compose pour changer des URL différents en fonction de la version utilisée, en l'occurence nous avons changer la variable contenant l'[URL du back](../front-end/src/environments/environment.prod.ts) dans le front grâce au [Dockerfile](../front-end/Dockerfile) associé (grâce a un sed) qui va remplacer cette variable selon l'argument précisé dans le docker compose.



#### run.sh

Ce script va run le docker compose associé et vérifié que les healthchecks sont bien effectués

#### run-e2e.sh

Ce script va run le docker compose associé et vérifié que les healthchecks sont bien effectués puis va enregistrer le résultat des tests dans le dossier [test-results](test-results)

### Healthchecks

#### Front 

Pour le healthcheck du front, nous avons simplement vérifié que le localhost:80 est bien setup, cette vérification qui est répétée avec un intervalle de 10s

On remarque qu'on attend ici que le back soit healthy pour startup le front.

```
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:80"]
      interval: 10s
      timeout: 10s
      retries: 5
    depends_on:
      back:
        condition: service_healthy
```

#### Back
On fait de même pour le back en envoyant une requête au serveur pour la route status: 

```
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9428/api/status"]
      interval: 10s
      timeout: 10s
      retries: 5
```

