<?php

namespace App\Tests\Entity;

use App\Entity\User;
use App\Entity\UserReadings;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testGetId()
    {
        $user = new User();
        $this->assertNull($user->getId());
    }

    public function testGetEmail()
    {
        $user = new User();
        $user->setEmail('test@example.com');
        $this->assertSame('test@example.com', $user->getEmail());
    }

    public function testGetUserIdentifier()
    {
        $user = new User();
        $user->setEmail('test@example.com');
        $this->assertSame('test@example.com', $user->getUserIdentifier());
    }

    public function testGetRoles()
    {
        $user = new User();
        $this->assertContains('ROLE_USER', $user->getRoles());
    }

    public function testSetRoles()
    {
        $user = new User();
        $user->setRoles(['ROLE_ADMIN']);
        $this->assertContains('ROLE_ADMIN', $user->getRoles());
    }

    public function testGetPassword()
    {
        $user = new User();
        $user->setPassword('password');
        $this->assertSame('password', $user->getPassword());
    }

    public function testGetPseudo()
    {
        $user = new User();
        $user->setPseudo('test');
        $this->assertSame('test', $user->getPseudo());
    }

    public function testAddUserBook()
    {
        $user = new User();
        $userReading = new UserReadings();
        $user->addUserReading($userReading);
        $this->assertTrue($user->getUserReadings()->contains($userReading));
    }

    public function testRemoveUserBook()
    {
        $user = new User();
        $userReading = $this->createMock(UserReadings::class);
        $user->addUserReading($userReading);
        $user->removeUserReading($userReading);
        $this->assertFalse($user->getUserReadings()->contains($userReading));
    }
}