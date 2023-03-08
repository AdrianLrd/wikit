# Test technique Wikit
Objectif du test technique : faire une page Web pour discuter avec l'IA conversationnelle d'OpenAI (le fameux ChatGPT).
## Table of Contents
* [Introduction](###Introduction)
* Technologies
* Installation
* Lancement
* Fonctionnalitée
* Exemple d'utilisation
* Status du projet
* Commentaire et Retour
* Sources

### Introduction
L'objectif de ce test technique était de pouvoir communiquer avec l'IA d'OpenAI (ChatGPT) via une page web.
Pour la partie front il devait y avoir :
* Un champ de saisie de message pour l'utilisateur
* Un bouton d'envoi de message
* L'affichage de la conversation avec les messages utilisateur et les réponses de ChatGPT.
Pour la partie back, il fallait utiliser l'API REST "Chat Completion" d'OpenAI

## Technologies
* Node.js v16.14.0
* JavaScript ES2015
* TypeScript v4.9.5
* @types/node v18.14.6
* Fastify v4.14.1
* @Fastify/static v6.9.0
* Openai v3.2.1
* HTML 5 
* CSS 3

## Installation
Pour installer le projet, vous devez utiliser Node.js 
```
https://nodejs.org/en/download/
```
Recopier le dépot git en local.
Lancez un IDE comme Visual Studio Code et dans l'onglet terminal il vous suffit d'installer les dépendances :
```
$ npm install
```
Il vous suffit maintenant de build le projet :
```
$ npm run build
```
Pour pouvoir utiliser l'application vous devez configurer votre clé d'API dans le fichier `server.js` remplacer `API_KEY` par votre clé à la ligne 10
![Change API KEY](./img/api_key.jpg)

## Lancement
Pour le lancement de l'application il vous suffit de taper la commande suivante :
```
$ npm run start
```
Le serveur est lancé sur votre port :3000, il vous suffit d'aller sur http://localhost:3000/ ou http://127.0.0.1:3000/

## Fonctionnalitée
* Possibilitée de conversé avec ChatGPT
![Chat Web Page](./img/chat.jpg)

## Exemple d'utilisation
L'utilisation du framework Fastify permet d'avoir des réponses rapide de l'API
![Exemple d'utilisation](./img/exempleUse.jpg)

## Status du projet
L'objectif du projet est terminer.
On pourrai rajouter des fonctionnalitées à l'application pour la rendre plus complète

## Commentaire et Retour
## Point de difficulté
-J'ai rencontré des difficulté principalement pour la création du serveur avec fastify, je n'avais jamais utilisé ce framework. Difficulté de trouver @fastify/static pour integrer ma page web

## Commentaire
J'avais déjà fais un projet similaire avec l'utilisation de socket.io.

## Sources
* https://platform.openai.com/docs/guides/chat 
* https://platform.openai.com/docs/api-reference/chat 
* https://www.npmjs.com/package/@fastify/static
* https://www.fastify.io/
