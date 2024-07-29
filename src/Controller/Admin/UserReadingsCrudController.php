<?php

namespace App\Controller\Admin;

use App\Entity\UserReadings;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserReadingsCrudController extends AbstractCrudController
{
    use Trait\ReadOnlyTrait;
    
    public static function getEntityFqcn(): string
    {
        return UserReadings::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('user'),
            TextField::new('book'),
            TextareaField::new('comment'),
            IntegerField::new('rating'),
            TextField::new('status'),
        ];
    }

}
