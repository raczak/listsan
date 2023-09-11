# Projet ListSan

ListSan est un projet qui suit une architecture hexagonale. Il est conçu pour fournir des informations sur les jeux et gérer les préférences des utilisateurs.

## Architecture

Le projet est divisé en trois dossiers principaux reflétant l'architecture hexagonale :

### 1. Application

C'est le cœur du domaine métier. Il contient :

- **Entités** :
  - `adminUser.model.ts`
  - `console.model.ts`
  - `game.model.ts`
  - `offer.model.ts`
  - `shop.model.ts`
  - `user.model.ts`

- **Fonctionnalités** :
  - `getCheapestGamePrices.feature.ts`
  - `favoriteGames.feature.ts`
  - `userPreferences.feature.ts`

- **Adaptateurs** :
  - `gameApi.adapter.ts`
  - `userApi.adapter.ts`

### 2. Clients

Il contient les interfaces utilisateur :

- **React Native** (`listsan-react-native`) : Application mobile.
  - Adaptateurs : `game.adapter.ts` et `user.adapter.ts`

- **Vue.js** (`listsan-vuejs`) : Application web.

### 3. Infrastructure

Il gère les interactions avec les sources de données externes :

- **Firebase** :
  - `userApi.adapter.ts`

- **Rawg.io** :
  - `gameApi.adapter.ts`

## Fonctionnement

- Le domaine métier (`application`) définit les entités, les fonctionnalités et les adaptateurs.
  
- Les clients (`clients`) utilisent ces adaptateurs pour interagir avec le domaine métier.

- L'infrastructure (`infrastructure`) fournit les détails de mise en œuvre pour les sources de données externes.

## Remarques
  
- Les fichiers `package.json` dans chaque dossier fournissent des détails sur la configuration et les scripts.
