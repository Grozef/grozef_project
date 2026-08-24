# grozef_project

Application Symfony de suivi de lectures : catalogue d'ouvrages et journal de lecture,
administres via un back-office EasyAdmin.

## Modele

Entites (`src/Entity/`) : `TheBook`, `BookAuthor`, `BookPublisher`, `TheStatus`,
`UserReadings`, `User`, `UserInfo`.

`TheStatus` porte l'etat de lecture, `UserReadings` associe un utilisateur a un ouvrage.

## Back-office

`src/Controller/Admin/` expose un CRUD EasyAdmin par entite : `DashboardController`,
`TheBookCrudController`, `BookAuthorCrudController`, `BookPublisherCrudController`,
`TheStatusCrudController`, `UserReadingsCrudController`, `UserCrudController`,
`UserInfoCrudController`.

## Stack

Symfony, Doctrine ORM avec migrations, `easycorp/easyadmin-bundle`, AssetMapper, Twig,
Messenger sur transport Doctrine. Tests PHPUnit.

## Lancer

```sh
composer install
```

Configurer `DATABASE_URL`, puis :

```sh
php bin/console doctrine:migrations:migrate
php bin/console asset-map:compile
```

`compose.yaml` et `compose.override.yaml` fournissent les services de developpement.
