<?php

namespace App\Entity;

use App\Repository\TheStatusRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TheStatusRepository::class)]
class TheStatus
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    /**
     * @var Collection<int, UserReadings>
     */
    #[ORM\OneToMany(targetEntity: UserReadings::class, mappedBy: 'status')]
    private Collection $userReadings;

    public function __construct()
    {
        $this->userReadings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, UserReadings>
     */
    public function getUserReadings(): Collection
    {
        return $this->userReadings;
    }

    public function addUserReading(UserReadings $userReading): static
    {
        if (!$this->userReadings->contains($userReading)) {
            $this->userReadings->add($userReading);
            $userReading->setStatus($this);
        }

        return $this;
    }

    public function removeUserReading(UserReadings $userReading): static
    {
        if ($this->userReadings->removeElement($userReading)) {
            // set the owning side to null (unless already changed)
            if ($userReading->getStatus() === $this) {
                $userReading->setStatus(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->getName();
    }

}
