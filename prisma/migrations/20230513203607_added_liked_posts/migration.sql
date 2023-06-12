-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- CreateTable
CREATE TABLE "_LikedPosts" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LikedPosts_AB_unique" ON "_LikedPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedPosts_B_index" ON "_LikedPosts"("B");

-- AddForeignKey
ALTER TABLE "_LikedPosts" ADD CONSTRAINT "_LikedPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedPosts" ADD CONSTRAINT "_LikedPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
