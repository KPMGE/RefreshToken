/*
  Warnings:

  - You are about to drop the column `expiresIn` on the `refresh_token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `refresh_token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expires_in` to the `refresh_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refresh_token" DROP COLUMN "expiresIn",
ADD COLUMN     "expires_in" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_user_id_key" ON "refresh_token"("user_id");
