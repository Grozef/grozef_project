<?php

namespace App\Tests\Entity;

use App\Entity\TheBook;
use App\Entity\TheStatus;
use App\Entity\User;
use App\Entity\UserReadings;
use DateTimeImmutable;
use PHPUnit\Framework\TestCase;

class UserBookTest extends TestCase
{
    public function testGettersAndSetters(): void
    {
        $userBook = new UserReadings();

        $createdAt = new DateTimeImmutable();
        $userBook->setCreaDate($createdAt);
        $this->assertSame($createdAt, $userBook->getCreaDate());

        $updatedAt = new DateTimeImmutable();
        $userBook->setUpdatedAt($updatedAt);
        $this->assertSame($updatedAt, $userBook->getUpdatedAt());

        $comment = 'This is a comment';
        $userBook->setComment($comment);
        $this->assertSame($comment, $userBook->getComment());

        $rating = 4;
        $userBook->setRating($rating);
        $this->assertSame($rating, $userBook->getRating());

        $reader = new User();
        $userBook->setUser($reader);
        $this->assertSame($reader, $userBook->getUser());

        $book = new TheBook();
        $userBook->setBook($book);
        $this->assertSame($book, $userBook->getBook());

        $status = new TheStatus();
        $userBook->setStatus($status);
        $this->assertSame($status, $userBook->getStatus());

        $this->assertNull($userBook->getId());
    }
}