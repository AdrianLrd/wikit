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
Ensuite il vous suffit d'installer les dépendances :
```
$ npm install tsc
$ npm install fastify
$ npm install @fastify/static
$ npm install openai
```
