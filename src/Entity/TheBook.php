<?php

namespace App\Entity;

use App\Repository\TheBookRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TheBookRepository::class)]
class TheBook
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $googleBooksId = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $subtitle = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $publishDate = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $isbn10 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $isbn13 = null;

    #[ORM\Column(nullable: true)]
    private ?int $pageCount = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $smallThumbnail = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $thumbnail = null;

    #[ORM\ManyToOne(inversedBy: 'theBooks')]
    #[ORM\JoinColumn(nullable: false)]
    private ?BookAuthor $author = null;

    /**
     * @var Collection<int, BookPublisher>
     */
    #[ORM\ManyToMany(targetEntity: BookPublisher::class, inversedBy: 'theBooks')]
    private Collection $publisher;

    /**
     * @var Collection<int, UserReadings>
     */
    #[ORM\OneToMany(targetEntity: UserReadings::class, mappedBy: 'book')]
    private Collection $book;

    public function __construct()
    {
        $this->publisher = new ArrayCollection();
        $this->book = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGoogleBooksId(): ?string
    {
        return $this->googleBooksId;
    }

    public function setGoogleBooksId(string $googleBooksId): static
    {
        $this->googleBooksId = $googleBooksId;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getSubtitle(): ?string
    {
        return $this->subtitle;
    }

    public function setSubtitle(?string $subtitle): static
    {
        $this->subtitle = $subtitle;

        return $this;
    }

    public function getPublishDate(): ?\DateTimeInterface
    {
        return $this->publishDate;
    }

    public function setPublishDate(?\DateTimeInterface $publishDate): static
    {
        $this->publishDate = $publishDate;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getIsbn10(): ?string
    {
        return $this->isbn10;
    }

    public function setIsbn10(?string $isbn10): static
    {
        $this->isbn10 = $isbn10;

        return $this;
    }

    public function getIsbn13(): ?string
    {
        return $this->isbn13;
    }

    public function setIsbn13(?string $isbn13): static
    {
        $this->isbn13 = $isbn13;

        return $this;
    }

    public function getPageCount(): ?int
    {
        return $this->pageCount;
    }

    public function setPageCount(?int $pageCount): static
    {
        $this->pageCount = $pageCount;

        return $this;
    }

    public function getSmallThumbnail(): ?string
    {
        return $this->smallThumbnail;
    }

    public function setSmallThumbnail(?string $smallThumbnail): static
    {
        $this->smallThumbnail = $smallThumbnail;

        return $this;
    }

    public function getThumbnail(): ?string
    {
        return $this->thumbnail;
    }

    public function setThumbnail(?string $thumbnail): static
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    public function getAuthor(): ?BookAuthor
    {
        return $this->author;
    }

    public function setAuthor(?BookAuthor $author): static
    {
        $this->author = $author;

        return $this;
    }

    /**
     * @return Collection<int, BookPublisher>
     */
    public function getPublisher(): Collection
    {
        return $this->publisher;
    }

    public function addPublisher(BookPublisher $publisher): static
    {
        if (!$this->publisher->contains($publisher)) {
            $this->publisher->add($publisher);
        }

        return $this;
    }

    public function removePublisher(BookPublisher $publisher): static
    {
        $this->publisher->removeElement($publisher);

        return $this;
    }

    /**
     * @return Collection<int, UserReadings>
     */
    public function getBook(): Collection
    {
        return $this->book;
    }

    public function addStatus(UserReadings $book): static
    {
        if (!$this->book->contains($book)) {
            $this->book->add($book);
            $book->setBook($this);
        }

        return $this;
    }

    public function removeStatus(UserReadings $book): static
    {
        if ($this->book->removeElement($book)) {
            // set the owning side to null (unless already changed)
            if ($book->getBook() === $this) {
                $book->setBook(null);
            }
        }

        return $this;
    }
}
