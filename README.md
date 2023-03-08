# Test technique Wikit
Objectif du test technique : faire une page Web pour discuter avec l'IA conversationnelle d'OpenAI (le fameux ChatGPT).
## Table of Contents
* Introduction
* Technologies
* Installation
* Lancement
* Fonctionnalitées
* Exemple d'utilisation
* Status du projet
* Sources

## Introduction
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
Il vous suffit maintenant de build le projet 
```
$ npm run build
```
Et pour finir de le lancer
```
$ npm run start
```
Le serveur est lancé sur votre port :3000, il vous suffit d'aller sur http://localhost:3000/ ou http://127.0.0.1:3000/

