<?php

namespace App\Controller\Profile;

use App\Entity\UserReadings;
use App\Service\ProfileService;
use App\Service\GoogleBooksApiService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/profile', name: 'app_profile_')]
class UserProfileController extends AbstractController
{
    public function __construct(
        private readonly GoogleBooksApiService $googleBooksApiService,
        private readonly ProfileService $profileService
    ) {
    }

    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('user_profile/index.html.twig', [
            'controller_name' => 'UserProfileController',
        ]);
    }

    #[Route('/search', name: 'search')]
    public function search(): Response
    {
        return $this->render('user_profile/search.html.twig');
    }

    #[Route('/search/api', name: 'search_api', methods: ['POST'])]
    public function searchApi(Request $request): Response
    {
        // input --> search
        $search = $request->request->get('search');

        return $this->render('user_profile/_api.html.twig', [
            'search' => $this->googleBooksApiService->search($search),
        ]);
    }

    #[Route('/search/add/{id}', name: 'search_add', methods: ['GET'])]
    public function searchAdd(string $id): Response
    {
        $userBook = $this->profileService->addBookToProfile($this->getUser(), $id);

        return $this->redirectToRoute('app_profile_my_books', [
            'id' => $userBook->getId(),
        ]);
    }

    #[Route('/my-books/{id}', name: 'my_books')]
    public function showOneBook(UserReadings $userBook): Response
    {
        return $this->render('user_profile/show_one_book.html.twig', [
            'userBook' => $userBook,
        ]);
    }

}
