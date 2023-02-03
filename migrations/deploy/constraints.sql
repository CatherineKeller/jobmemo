-- Deploy jobmemo:constraints to pg

BEGIN;

CREATE DOMAIN "posInt" AS INT
  CHECK(VALUE > 0);

CREATE DOMAIN "email" AS VARCHAR(50)
  CHECK(VALUE ~ '^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$');

CREATE DOMAIN "phone" AS VARCHAR(75)
  CHECK(VALUE ~ '^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$');

CREATE DOMAIN "url" AS VARCHAR(255)
  CHECK(VALUE ~ '^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$');

ALTER TABLE "card"
  ALTER COLUMN "position" TYPE "posInt",
  ALTER COLUMN "contact_email" TYPE "email",
  ALTER COLUMN "contact_phone" TYPE "phone",
  ALTER COLUMN "link" TYPE "url";
  -- ADD CONSTRAINT "start_before_end" CHECK("starting_time" < "ending_time");

ALTER TABLE "list"
  ALTER COLUMN "position" TYPE "posInt";

COMMIT;
