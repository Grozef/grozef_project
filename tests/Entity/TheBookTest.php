<?php

namespace App\Tests\Entity;

use App\Entity\BookAuthor;
use App\Entity\TheBook;
use App\Entity\BookPublisher;
use App\Entity\UserReadings;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use PHPUnit\Framework\TestCase;

class BookTest extends TestCase
{
    public function testGettersAndSetters(): void
    {
        $book = new TheBook();

        $this->assertNull($book->getId());

        $book->setGoogleBooksId('google_books_id');
        $this->assertSame('google_books_id', $book->getGoogleBooksId());

        $book->setTitle('title');
        $this->assertSame('title', $book->getTitle());

        $book->setSubtitle('subtitle');
        $this->assertSame('subtitle', $book->getSubtitle());

        $publishDate = new DateTime();
        $book->setPublishDate($publishDate);
        $this->assertSame($publishDate, $book->getPublishDate());

        $book->setDescription('description');
        $this->assertSame('description', $book->getDescription());

        $book->setIsbn10('isbn10');
        $this->assertSame('isbn10', $book->getIsbn10());

        $book->setIsbn13('isbn13');
        $this->assertSame('isbn13', $book->getIsbn13());

        $book->setPageCount(100);
        $this->assertSame(100, $book->getPageCount());

        $book->setSmallThumbnail('small_thumbnail');
        $this->assertSame('small_thumbnail', $book->getSmallThumbnail());

        $book->setThumbnail('thumbnail');
        $this->assertSame('thumbnail', $book->getThumbnail());

        $author = new BookAuthor();
        $book->addBookAuthor($author);
        $this->assertSame($author, $book->getBookAuthor()->first());

        $publisher = new BookPublisher();
        $book->addBookPublisher($publisher);
        $this->assertSame($publisher, $book->getBookPublisher()->first());

        $userBook = new UserReadings();
        $book->addUserBook($userBook);
        $this->assertSame($userBook, $book->getUserBooks()->first());

    }
 
    public function testAddAndRemoveUserBook(): void
    {
        $book = new TheBook();
        $userBook1 = new UserReadings();
        $userBook2 = new UserReadings();

        $book->addUserBook($userBook1);
        $this->assertTrue($book->getUserBooks()->contains($userBook1));
        $this->assertSame($book, $userBook1->getBook());

        $book->addUserBook($userBook2);
        $this->assertTrue($book->getUserBooks()->contains($userBook2));
        $this->assertSame($book, $userBook2->getBook());

        $book->removeUserBook($userBook1);
        $this->assertFalse($book->getUserBooks()->contains($userBook1));
        $this->assertNull($userBook1->getBook());
    }

    public function testGetAndSetBookAuthor(): void
    {
        $book = new TheBook();
        $author1 = new BookAuthor();
        $author2 = new BookAuthor();

        $book->addBookAuthor($author1);
        $this->assertTrue($book->getBookAuthor($author1)->contains($author1));
        $book->removeBookAuthor($author1);
        $this->assertFalse($book->getBookAuthor($author1)->contains($author1));

        $book->addBookAuthor($author2);
        $this->assertTrue($book->getBookAuthor($author2)->contains($author2));
        $book->removeBookAuthor($author2);
        $this->assertFalse($book->getBookAuthor($author2)->contains($author2));
    }

    public function testAddAndRemoveBookPublisher(): void
    {
        $book = new TheBook();
        $publisher1 = new BookPublisher();
        $publisher2 = new BookPublisher();
        $book->addBookPublisher($publisher1);
        $this->assertTrue($book->getBookPublisher()->contains($publisher1));
        $book->removeBookPublisher($publisher1);
        $this->assertFalse($book->getBookPublisher()->contains($publisher1));

        $book->addBookPublisher($publisher2);
        $this->assertTrue($book->getBookPublisher()->contains($publisher2));
        $book->removeBookPublisher($publisher2);
        $this->assertFalse($book->getBookPublisher()->contains($publisher2));
    }

}