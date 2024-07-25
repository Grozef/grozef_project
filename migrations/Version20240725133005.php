<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240725133005 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE book_author (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE book_publisher (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE the_book (id INT AUTO_INCREMENT NOT NULL, author_id INT NOT NULL, google_books_id VARCHAR(255) NOT NULL, title LONGTEXT NOT NULL, subtitle LONGTEXT DEFAULT NULL, publish_date DATETIME DEFAULT NULL, description LONGTEXT DEFAULT NULL, isbn10 VARCHAR(255) DEFAULT NULL, isbn13 VARCHAR(255) DEFAULT NULL, page_count INT DEFAULT NULL, small_thumbnail LONGTEXT DEFAULT NULL, thumbnail LONGTEXT DEFAULT NULL, INDEX IDX_FDBAF85FF675F31B (author_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE the_book_book_publisher (the_book_id INT NOT NULL, book_publisher_id INT NOT NULL, INDEX IDX_9505BA55F6709D67 (the_book_id), INDEX IDX_9505BA551929A596 (book_publisher_id), PRIMARY KEY(the_book_id, book_publisher_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE the_status (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, pseudo VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_info (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, tel VARCHAR(255) DEFAULT NULL, adresse VARCHAR(255) DEFAULT NULL, pays VARCHAR(255) DEFAULT NULL, reg_date DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', arch_date DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_B1087D9EA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_readings (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, book_id INT NOT NULL, status_id INT DEFAULT NULL, crea_date DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', comment LONGTEXT DEFAULT NULL, rating INT DEFAULT NULL, INDEX IDX_FA9940F1A76ED395 (user_id), INDEX IDX_FA9940F116A2B381 (book_id), INDEX IDX_FA9940F16BF700BD (status_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE the_book ADD CONSTRAINT FK_FDBAF85FF675F31B FOREIGN KEY (author_id) REFERENCES book_author (id)');
        $this->addSql('ALTER TABLE the_book_book_publisher ADD CONSTRAINT FK_9505BA55F6709D67 FOREIGN KEY (the_book_id) REFERENCES the_book (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE the_book_book_publisher ADD CONSTRAINT FK_9505BA551929A596 FOREIGN KEY (book_publisher_id) REFERENCES book_publisher (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_info ADD CONSTRAINT FK_B1087D9EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_readings ADD CONSTRAINT FK_FA9940F1A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_readings ADD CONSTRAINT FK_FA9940F116A2B381 FOREIGN KEY (book_id) REFERENCES the_book (id)');
        $this->addSql('ALTER TABLE user_readings ADD CONSTRAINT FK_FA9940F16BF700BD FOREIGN KEY (status_id) REFERENCES the_status (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE the_book DROP FOREIGN KEY FK_FDBAF85FF675F31B');
        $this->addSql('ALTER TABLE the_book_book_publisher DROP FOREIGN KEY FK_9505BA55F6709D67');
        $this->addSql('ALTER TABLE the_book_book_publisher DROP FOREIGN KEY FK_9505BA551929A596');
        $this->addSql('ALTER TABLE user_info DROP FOREIGN KEY FK_B1087D9EA76ED395');
        $this->addSql('ALTER TABLE user_readings DROP FOREIGN KEY FK_FA9940F1A76ED395');
        $this->addSql('ALTER TABLE user_readings DROP FOREIGN KEY FK_FA9940F116A2B381');
        $this->addSql('ALTER TABLE user_readings DROP FOREIGN KEY FK_FA9940F16BF700BD');
        $this->addSql('DROP TABLE book_author');
        $this->addSql('DROP TABLE book_publisher');
        $this->addSql('DROP TABLE the_book');
        $this->addSql('DROP TABLE the_book_book_publisher');
        $this->addSql('DROP TABLE the_status');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_info');
        $this->addSql('DROP TABLE user_readings');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
