-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SMA', 'Kuliah', 'Publik');

-- DropEnum
DROP TYPE "crdb_internal_region";

-- CreateTable
CREATE TABLE "Widget" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Register" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" STRING NOT NULL,
    "fullName" STRING NOT NULL,
    "status" "Status" NOT NULL,
    "institusi" STRING NOT NULL,
    "phoneNumber" STRING NOT NULL,
    "media" STRING NOT NULL,
    "sesi" INT4 NOT NULL,
    "image" STRING NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);
