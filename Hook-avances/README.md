# Exemple de Navigation entre Champs Input dans React Native

Ce projet démontre comment implémenter une navigation fluide entre les champs `TextInput` dans une application React Native en utilisant des références et la gestion d'événements.

## Fonctionnalités

- Transition automatique du focus entre les champs de saisie en fonction de la longueur de l'entrée utilisateur.
- Utilisation de `useRef` pour gérer les références des champs de saisie.
- Intégration de `SafeAreaProvider` et `SafeAreaView` pour un rendu adapté sur différents appareils.

## Explication du Code

L'application contient trois champs `TextInput` :

1. **Champ Numéro de Carte** : Le focus passe automatiquement au champ "Code secret" après la saisie de 16 caractères.
2. **Champ Code Secret** : Le focus passe au champ "Date d'expiration" après la saisie de 3 caractères.
3. **Champ Date d'Expiration** : Le dernier champ de saisie de la séquence.

### Fonctionnalités Principales

- `useRef` : Utilisé pour créer des références vers les champs de saisie pour gérer le focus de manière programmatique.
- `onCardNumberChange` et `onCodeChange` : Gestionnaires d'événements qui déterminent quand passer au champ suivant.

### Exemple de Flux de Travail
1. L'utilisateur saisit 16 caractères dans le champ "Numéro de carte".
2. Le focus passe automatiquement au champ "Code secret".
3. Après avoir saisi 3 caractères dans le champ "Code secret", le focus passe au champ "Date d'expiration".

## Installation et Utilisation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/react-native-input-navigation.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd react-native-input-navigation
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Lancez le bundler Metro :
   ```bash
   npm expo start
   ```

## Structure des Fichiers

```
react-native-input-navigation/
├── App.js
├── index.js
├── components/
├── assets/
└── styles/
```

## Dépendances

- **React Native** : Framework pour créer des applications natives en utilisant React.
- **react-native-safe-area-context** : Assure un rendu adapté dans les zones sécurisées des appareils.

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus de détails.
