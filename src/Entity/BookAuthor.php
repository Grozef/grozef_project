<?php

namespace App\Entity;

use App\Repository\BookAuthorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BookAuthorRepository::class)]
class BookAuthor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    /**
     * @var Collection<int, TheBook>
     */
    #[ORM\ManyToMany(targetEntity: TheBook::class, mappedBy: 'authors')]
    private Collection $theBooks;

    public function __construct()
    {
        $this->theBooks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, TheBook>
     */
    public function getTheBooks(): Collection
    {
        return $this->theBooks;
    }

    public function addTheBook(TheBook $theBook): static
    {
        if (!$this->theBooks->contains($theBook)) {
            $this->theBooks->add($theBook);
            $theBook->addBookAuthor($this);
        }

        return $this;
    }

    public function removeTheBook(TheBook $theBook): static
    {
        if ($this->theBooks->removeElement($theBook)) {
            $theBook->removeBookAuthor($this);
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->name;
    }
}
