-- CreateTable
CREATE TABLE "TinVerification" (
    "id" TEXT NOT NULL,
    "tin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TinVerification_pkey" PRIMARY KEY ("id")
);
