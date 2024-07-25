<?php

namespace App\Tests\Entity;

use App\Entity\BookAuthor;
use App\Entity\TheBook;
use PHPUnit\Framework\TestCase;

class AuthorTest extends TestCase
{
    public function testGetId(): void
    {
        $author = new BookAuthor();
        $this->assertNull($author->getId());
    }

    public function testName(): void
    {
        $author = new BookAuthor();
        $author->setName('Jean Bon');
        $this->assertSame('Jean Bon', $author->getName());
    }

    public function testBooks(): void
    {
        $author = new BookAuthor();
        $book1 = new TheBook();
        $book2 = new TheBook();

        $author->addTheBook($book1);
        $this->assertTrue($author->getTheBooks()->contains($book1));

        $author->addTheBook($book2);
        $this->assertTrue($author->getTheBooks()->contains($book2));

        $author->removeTheBook($book1);
        $this->assertFalse($author->getTheBooks()->contains($book1));
    }
}