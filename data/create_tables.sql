BEGIN; -- Déclare une transaction
-- Une transaction est un ensemble de commande destiné à être joué ensemble en coherence. 
-- Idée : si une des commandes fail ALORS le SGBD annule toutes les commandes déjà passées.

-- On s'assure que les tables n'existent pas déjà avant de les créer
DROP TABLE IF EXISTS "list", "type", "card", "candidacy", "type_compagny", "interview", "interview_type", "status", "event";

CREATE TABLE "type" (
  "id" SERIAL PRIMARY KEY, 
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "list" (
  "id" SERIAL PRIMARY KEY, 
  "type_id" INTEGER NOT NULL REFERENCES "type"("id"),
  "position" SMALLINT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- added applied renewed interview completed

CREATE TABLE "status" (
  "id" SERIAL PRIMARY KEY, 
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- inprogress won refuse

CREATE TABLE "candidacy" (
  "id" SERIAL PRIMARY KEY, 
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- offer spontaneous network other

CREATE TABLE "type_compagny" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- esn tpe pme ge startup

CREATE TABLE "card" (
  "id" SERIAL PRIMARY KEY, 
  "title" VARCHAR(75) NOT NULL DEFAULT '',
  "description" VARCHAR(225) DEFAULT '',
  "link" VARCHAR(225) DEFAULT '',
  "compagny_name" VARCHAR(75) DEFAULT '',
  "compagny_address" VARCHAR(75) DEFAULT '',
  "contact_name" VARCHAR(75) DEFAULT '',
  "contact_firstname" VARCHAR(75) DEFAULT '',
  "contact_email" VARCHAR(50) DEFAULT '',
  "contact_phone" VARCHAR(75) DEFAULT '',
  "notes" VARCHAR(75) DEFAULT '',
  "position" SMALLINT NOT NULL DEFAULT 0,
  "list_id" INTEGER NOT NULL REFERENCES "list"("id"),
  "status_id" INTEGER NOT NULL REFERENCES "status"("id"),
  "candidacy_id" INTEGER NOT NULL REFERENCES "candidacy"("id"),
  "type_compagny_id" INTEGER NOT NULL REFERENCES "type_compagny"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "interview_type" (
  "id" SERIAL PRIMARY KEY, 
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- facetoface remote

CREATE TABLE "interview" (
  "id" SERIAL PRIMARY KEY, 
  "comment" VARCHAR(75) DEFAULT '',
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "interview_type_id" INTEGER NOT NULL REFERENCES "interview_type"("id"),
  "card_id" INTEGER NOT NULL REFERENCES "card"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "event" (
  "id" SERIAL PRIMARY KEY, 
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "comment" VARCHAR(75) DEFAULT '',
  "type_id" INTEGER NOT NULL REFERENCES "type"("id"),
  "card_id" INTEGER NOT NULL REFERENCES "card"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

COMMIT;