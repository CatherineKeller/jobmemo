-- Revert jobmemo:init from pg

BEGIN;

DROP TABLE "list", "type", "card", "candidacy", "type_compagny", "interview", "interview_type", "status", "event";

COMMIT;
