# Livrable FingerFit

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

**État d’implémentation**

1. [IN PROGRESS]
2. [IN PROGRESS]
3. [IN PROGRESS]
4. [DONE]
5. [IN PROGRESS]

**Ordre de priorité du scénario en fonction de nos critères et justification**

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


