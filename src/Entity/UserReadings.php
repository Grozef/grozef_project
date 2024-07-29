<?php

namespace App\Entity;

use App\Repository\UserReadingsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserReadingsRepository::class)]
class UserReadings
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $crea_date = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;

    #[ORM\Column(nullable: true)]
    private ?int $rating = null;

    #[ORM\ManyToOne(inversedBy: 'userReadings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'status')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TheBook $book = null;

    #[ORM\ManyToOne(inversedBy: 'userReadings')]
    private ?TheStatus $status = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreaDate(): ?\DateTimeImmutable
    {
        return $this->crea_date;
    }

    public function setCreaDate(\DateTimeImmutable $crea_date): static
    {
        $this->crea_date = $crea_date;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updated_at): static
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): static
    {
        $this->comment = $comment;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(?int $rating): static
    {
        $this->rating = $rating;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getBook(): ?TheBook
    {
        return $this->book;
    }

    public function setBook(?TheBook $book): static
    {
        $this->book = $book;

        return $this;
    }

    public function getStatus(): ?TheStatus
    {
        return $this->status;
    }

    public function setStatus(?TheStatus $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function __toString()
    {
        return $this->getBook()->getTitle();
    }

}
