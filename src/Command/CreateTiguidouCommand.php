<?php

namespace App\Command;

use App\Service\CreateTiguidouService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:create-tiguidou',
    description: 'Tiguidou is the queen of this website',
)]
class CreateTiguidouCommand extends Command
{
    public function __construct(
        private readonly CreateTiguidouService $createTiguidouService
    )
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('email', InputArgument::REQUIRED, 'email')
            ->addArgument('password', InputArgument::REQUIRED, 'mdp')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        $this->createTiguidouService->create($email, $password);

        $io->success('Welsh Tiguidou !');

        return Command::SUCCESS;
    }
}
