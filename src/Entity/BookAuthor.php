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
    #[ORM\OneToMany(targetEntity: TheBook::class, mappedBy: 'author')]
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
            $theBook->setAuthor($this);
        }

        return $this;
    }

    public function removeTheBook(TheBook $theBook): static
    {
        if ($this->theBooks->removeElement($theBook)) {
            // set the owning side to null (unless already changed)
            if ($theBook->getAuthor() === $this) {
                $theBook->setAuthor(null);
            }
        }

        return $this;
    }
}
