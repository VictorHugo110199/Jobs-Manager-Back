import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685387254355 implements MigrationInterface {
    name = 'InitialMigration1685387254355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cvs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(25) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "ownerIdId" uuid, CONSTRAINT "PK_e7d8a4d55eb4e7a2e43bea8d83a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(25) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sites" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "url" character varying NOT NULL, "isComplet" boolean NOT NULL DEFAULT true, "ownerIdId" uuid, CONSTRAINT "PK_4f5eccb1dfde10c9170502595a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cvs" ADD CONSTRAINT "FK_9a817123bd2ca8e5a51d2a19c2f" FOREIGN KEY ("ownerIdId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sites" ADD CONSTRAINT "FK_6dfbfdebe315b590dcbd11ee2bd" FOREIGN KEY ("ownerIdId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sites" DROP CONSTRAINT "FK_6dfbfdebe315b590dcbd11ee2bd"`);
        await queryRunner.query(`ALTER TABLE "cvs" DROP CONSTRAINT "FK_9a817123bd2ca8e5a51d2a19c2f"`);
        await queryRunner.query(`DROP TABLE "sites"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "cvs"`);
    }

}
