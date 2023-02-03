-- Deploy jobmemo:init to pg

BEGIN;

CREATE TABLE "type" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "code" VARCHAR(75) NOT NULL UNIQUE,
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "list" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "position" SMALLINT NOT NULL DEFAULT 0,
  "type_id" INTEGER NOT NULL REFERENCES "type"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- added applied renewed interview completed

CREATE TABLE "status" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "code" VARCHAR(75) NOT NULL UNIQUE,
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- inprogress won refuse

CREATE TABLE "candidacy" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "code" VARCHAR(75) NOT NULL UNIQUE,
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- offer spontaneous network other

CREATE TABLE "type_compagny" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "code" VARCHAR(75) NOT NULL UNIQUE,
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- esn tpe pme ge startup

CREATE TABLE "card" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "title" VARCHAR(75) NOT NULL,
  "description" VARCHAR(225),
  "link" VARCHAR(225),
  "compagny_name" VARCHAR(75) NOT NULL UNIQUE,
  "compagny_address" VARCHAR(75),
  "contact_name" VARCHAR(75),
  "contact_firstname" VARCHAR(75),
  "contact_email" VARCHAR(50),
  "contact_phone" VARCHAR(30),
  "notes" VARCHAR(75),
  "position" SMALLINT NOT NULL DEFAULT 0,
  "list_id" INTEGER NOT NULL REFERENCES "list"("id"),
  "status_id" INTEGER NOT NULL REFERENCES "status"("id"),
  "candidacy_id" INTEGER NOT NULL REFERENCES "candidacy"("id"),
  "type_compagny_id" INTEGER NOT NULL REFERENCES "type_compagny"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
  -- UNIQUE(
  --   "contact_name",
  --   "contact_firstname"
  -- )
);

CREATE TABLE "interview_type" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "code" VARCHAR(75) NOT NULL UNIQUE,
  "name" VARCHAR(75) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
-- facetoface remote

CREATE TABLE "interview" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "comment" VARCHAR(75),
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "interview_type_id" INTEGER NOT NULL REFERENCES "interview_type"("id"),
  "card_id" INTEGER NOT NULL REFERENCES "card"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "event" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "comment" VARCHAR(75),
  "type_id" INTEGER NOT NULL REFERENCES "type"("id"),
  "card_id" INTEGER NOT NULL REFERENCES "card"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

COMMIT;
