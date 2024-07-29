<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\TheBook;
use App\Entity\TheStatus;
use App\Entity\BookAuthor;
use Faker\Factory as Faker;
use App\Entity\UserReadings;
use App\Entity\BookPublisher;
use App\Entity\UserInfo;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{

    private $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $faker = Faker::create('fr_FR');

        // création des auteurs

        $authors = [];
        for ($i = 0; $i < 10; $i++) {
            $author = new BookAuthor();
            $author->setName($faker->name);
            $manager->persist($author);
            $authors[] = $author;
        };

        // création des éditeurs

        $publishers = [];
        for ($i = 0; $i < 10; $i++) {
            $publisher = new BookPublisher();
            $publisher->setName($faker->name);
            $manager->persist($publisher);
            $publishers[] = $publisher;
        }

        // Création du statut
        
        $status = [];
        foreach (['to-read', 'reading', 'read'] as $value) {
            $oneStatus = new TheStatus();
            $oneStatus->setName($value);
            $manager->persist($oneStatus);
            $status[] = $oneStatus;
        }

        // Création des livres

        $books = [];
        for ($i = 0; $i < 100; ++$i) {
            $book = new TheBook();

            /** @phpstan-ignore-next-line */
            $isbn10 = $faker->isbn10;

            /** @phpstan-ignore-next-line */
            $isbn13 = $faker->isbn13;

            $book
                ->setGoogleBooksId($faker->uuid)
                ->setTitle($faker->sentence)
                ->setSubtitle($faker->sentence)
                ->setPublishDate($faker->dateTime)
                ->setDescription($faker->text)
                ->setIsbn10($isbn10)
                ->setIsbn13($isbn13)
                ->setPageCount($faker->numberBetween(100, 1000))
                ->setThumbnail('https://picsum.photos/200/300')
                ->setSmallThumbnail('https://picsum.photos/100/150')
                ->addBookAuthor($faker->randomElement($authors))
                ->addBookPublisher($faker->randomElement($publishers));
            $manager->persist($book);

            $books[] = $book;
        }

        // Création des utilisateurs

        $users = [];
        for ($i = 0; $i < 10; ++$i) {
            $user = new User();
            $user
                ->setEmail($faker->email)
                ->setPseudo($faker->userName);
            // ->setPassword($faker->password)
            $hashPassword = $this->hasher->hashPassword($user, 'password');
            $user->setPassword($hashPassword);
            $manager->persist($user);

            $users[] = $user;
        }

        // création d'un admin

        $user = new User();
        $user
            ->setEmail('nounouille@nounouille.com')
            ->setPseudo('nounouille')
            ->setRoles(['ROLE_ADMIN']);
        $hashPassword = $this->hasher->hashPassword($user, 'nounouille');
        $user->setPassword($hashPassword);
        $manager->persist($user);

        $users[] = $user;

        // création des infos personnelles des utilisateurs en fonction des utilisateurs créés

        foreach ($users as $user) {

            $userInfo = new UserInfo();
            $userInfo
                ->setUser($user)
                ->setNom($faker->name)
                ->setPrenom($faker->firstName)
                ->setTel($faker->phoneNumber)
                ->setAdresse($faker->address)
                ->setPays($faker->country)
                ->setRegDate(\DateTimeImmutable::createFromMutable($faker->dateTime))
                ->setArchDate(\DateTimeImmutable::createFromMutable($faker->dateTime))
                ->setUpdatedAt(\DateTimeImmutable::createFromMutable($faker->dateTime));

            $manager->persist($userInfo);
        }

        // Création des UserReadings, ici des livres, en fonction des utilisateurs

        foreach ($users as $user) {
            for ($i = 0; $i < 10; ++$i) {
                $userBook = new UserReadings();
                $userBook
                    ->setUser($user)
                    ->setStatus($faker->randomElement($status))
                    ->setRating($faker->numberBetween(0, 5))
                    ->setComment($faker->text)
                    ->setBook($faker->randomElement($books))
                    ->setCreaDate(\DateTimeImmutable::createFromMutable($faker->dateTime))
                    ->setUpdatedAt(\DateTimeImmutable::createFromMutable($faker->dateTime));

                $manager->persist($userBook);
            }
        }


        $manager->flush();
    }
}
