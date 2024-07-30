<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\BookAuthor;
use App\Entity\TheBook;
use App\Entity\BookPublisher;
use App\Entity\User;
use App\Entity\UserReadings;
use App\Repository\BookAuthorRepository;
use App\Repository\TheBookRepository;
use App\Repository\BookPublisherRepository;
use App\Repository\UserReadingsRepository;

class ProfileService
{
    public function __construct(
        private readonly GoogleBooksApiService $googleBooksApiService,
        private readonly TheBookRepository $bookRepository,
        private readonly BookAuthorRepository $authorRepository,
        private readonly BookPublisherRepository $publisherRepository,
        private readonly UserReadingsRepository $userBookRepository
    ) {
    }

    public function addBookToProfile(User $user, string $id): UserReadings
    {
        $book = $this->getOrCreateBook($id);

        $userBook = $this->userBookRepository->findOneBy([
            'reader' => $user,
            'book' => $book,
        ]);

        if (!$userBook) {
            $userBook = new UserReadings();

            $userBook
                ->setUser($user)
                ->setBook($book)
                ->setCreaDate(new \DateTimeImmutable())
            ;

            $this->userBookRepository->save($userBook, true);
        }

        return $userBook;
    }

    private function getOrCreateBook(string $id): TheBook
    {
        $bookFromGoogle = $this->googleBooksApiService->get($id);

        $book = $this->bookRepository->findOneBy([
            'googleBooksId' => $id,
        ]);

        if (!$book) {
            $book = new TheBook();

            $book
                ->setTitle($bookFromGoogle['volumeInfo']['title'] ?? null)
                ->setSubtitle($bookFromGoogle['volumeInfo']['subtitle'] ?? null)
                ->setDescription($bookFromGoogle['volumeInfo']['description'] ?? null)
                ->setGoogleBooksId($id)
                ->setIsbn10($bookFromGoogle['volumeInfo']['industryIdentifiers'][0]['identifier'] ?? null)
                ->setIsbn13($bookFromGoogle['volumeInfo']['industryIdentifiers'][1]['identifier'] ?? null)
                ->setPageCount($bookFromGoogle['volumeInfo']['pageCount'] ?? null)
                ->setPublishDate(new \DateTimeImmutable($bookFromGoogle['volumeInfo']['publishedDate'] ?? null))
                ->setSmallThumbnail($bookFromGoogle['volumeInfo']['imageLinks']['smallThumbnail'] ?? null)
                ->setThumbnail($bookFromGoogle['volumeInfo']['imageLinks']['thumbnail'] ?? null)
            ;

            foreach ($bookFromGoogle['volumeInfo']['authors'] ?? [] as $authorName) {
                $author = $this->getOrCreateAuthor($authorName);

                $book->addBookAuthor($author);
            }

            $publisher = $this->getOrCreatePublisher($bookFromGoogle['volumeInfo']['publisher'] ?? null);
            $book->addBookPublisher($publisher);

            $this->bookRepository->save($book, true);
        }

        return $book;
    }

    private function getOrCreateAuthor(string $name): BookAuthor
    {
        $author = $this->authorRepository->findOneBy([
            'name' => $name,
        ]);

        if (!$author) {
            $author = new BookAuthor();

            $author->setName($name);

            $this->authorRepository->save($author, true);
        }

        return $author;
    }

    private function getOrCreatePublisher(string $name): BookPublisher
    {
        $publisher = $this->publisherRepository->findOneBy([
            'name' => $name,
        ]);

        if (!$publisher) {
            $publisher = new BookPublisher();

            $publisher->setName($name);

            $this->publisherRepository->save($publisher, true);
        }

        return $publisher;
    }
}
