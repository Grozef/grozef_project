<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\TheBook;
use App\Entity\TheStatus;
use App\Entity\BookAuthor;
use App\Entity\UserReadings;
use App\Entity\BookPublisher;
use Symfony\Component\HttpFoundation\Response;
use App\Controller\Admin\TheBookCrudController;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);

        return $this->redirect($adminUrlGenerator->setController(TheBookCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Freereads');
    }

    public function configureMenuItems(): iterable
    {
        // yield MenuItem::linkToCrud('Invitations', 'fas fa-envelope', Invitation::class);
        yield MenuItem::linkToCrud('Books', 'fas fa-book', TheBook::class);
        yield MenuItem::linkToCrud('Authors', 'fas fa-user-pen', BookAuthor::class);
        yield MenuItem::linkToCrud('Publishers', 'fas fa-building', BookPublisher::class);
        yield MenuItem::linkToCrud('Status', 'fas fa-info-circle', TheStatus::class);
        yield MenuItem::linkToCrud('Users', 'fas fa-user', User::class);
        yield MenuItem::linkToCrud('UserBooks', 'fas fa-book-reader', UserReadings::class);
    }
}

