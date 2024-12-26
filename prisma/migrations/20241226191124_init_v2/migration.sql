/*
  Warnings:

  - A unique constraint covering the columns `[order]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "order" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Task_order_key" ON "Task"("order");
