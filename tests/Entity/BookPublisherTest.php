<?php

namespace App\Tests\Entity;

use App\Entity\TheBook;
use App\Entity\BookPublisher;
use PHPUnit\Framework\TestCase;

class PublisherTest extends TestCase
{
    public function testGetBooksReturnsEmptyCollectionByDefault()
    {
        $publisher = new BookPublisher();
        $this->assertEmpty($publisher->getTheBooks());
    }

    public function testAddBookAddsBookToCollection()
    {
        $publisher = new BookPublisher();
        $book = new TheBook();
        $publisher->addTheBook($book);
        $this->assertCount(1, $publisher->getTheBooks());
        $this->assertSame($book, $publisher->getTheBooks()->first());
    }

    public function testAddBookDoesNotAddSameBookTwice()
    {
        $publisher = new BookPublisher();
        $book = new TheBook();
        $publisher->addTheBook($book);
        $publisher->addTheBook($book);
        $this->assertCount(1, $publisher->getTheBooks());
    }

    public function testRemoveBookRemovesBookFromCollection()
    {
        $publisher = new BookPublisher();
        $book = new TheBook();
        $publisher->addTheBook($book);
        $publisher->removeTheBook($book);
        $this->assertEmpty($publisher->getTheBooks());
    }

    public function testRemoveBookDoesNothingIfBookNotInCollection()
    {
        $publisher = new BookPublisher();
        $book = new TheBook();
        $publisher->removeTheBook($book);
        $this->assertEmpty($publisher->getTheBooks());
    }
}