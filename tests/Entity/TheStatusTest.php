<?php

namespace App\Tests\Entity;

use App\Entity\TheStatus;
use App\Entity\UserReadings;
use PHPUnit\Framework\TestCase;

class StatusTest extends TestCase
{
    public function testGetUserBooks(): void
    {
        $status = new TheStatus();
        $userBook1 = new UserReadings();
        $userBook2 = new UserReadings();
        $status->addUserReading($userBook1);
        $status->addUserReading($userBook2);
        $this->assertCount(2, $status->getUserReadings());
    }

    public function testAddUserBook(): void
    {
        $status = new TheStatus();
        $userBook = new UserReadings();
        $status->addUserReading($userBook);
        $this->assertTrue($status->getUserReadings()->contains($userBook));
        $this->assertSame($status, $userBook->getStatus());
    }

    public function testRemoveUserBook(): void
    {
        $status = new TheStatus();
        $userBook = new UserReadings();
        $status->addUserReading($userBook);
        $status->removeUserReading($userBook);
        $this->assertFalse($status->getUserReadings()->contains($userBook));
        $this->assertNull($userBook->getStatus());
    }
}