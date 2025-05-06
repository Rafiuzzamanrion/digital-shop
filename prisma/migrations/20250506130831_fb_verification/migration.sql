-- CreateTable
CREATE TABLE "FacebookVerification" (
    "id" TEXT NOT NULL,
    "verificationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookVerification_pkey" PRIMARY KEY ("id")
);
