<?php

namespace App\Controller\Admin;

use App\Entity\TheStatus;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TheStatusCrudController extends AbstractCrudController
{
    use Trait\ReadOnlyTrait;
    
    public static function getEntityFqcn(): string
    {
        return TheStatus::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
