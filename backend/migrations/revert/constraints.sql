-- Revert jobmemo:constraints from pg

BEGIN;

ALTER TABLE
  "card"
ALTER COLUMN "position" TYPE SMALLINT,
ALTER COLUMN "contact_email" TYPE VARCHAR(50),
ALTER COLUMN "contact_phone" TYPE VARCHAR(30),
ALTER COLUMN "link" TYPE VARCHAR(225);

ALTER TABLE
  "list"
ALTER COLUMN
  "position" TYPE SMALLINT;

DROP DOMAIN "email","phone","url";

COMMIT;
