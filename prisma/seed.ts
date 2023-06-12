import { Post, Prisma, PrismaClient, User } from "@prisma/client";

const client = new PrismaClient();

const getUsers = (): Prisma.UserCreateInput[] => [
  { email: "test@mail.com", name: "Test" },
  { email: "test2@mail.com", name: "Test2" },
  { email: "test3@mail.com", name: "Test3" },
];

const getPosts = (users: User[]): Prisma.PostCreateInput[] => [
  {
    author: { connect: { id: users[0].id } },
    title: "Post 1",
    content: "Content 1",
  },
  {
    author: { connect: { id: users[1].id } },
    title: "Post 2",
    content: "Content 2",
  },
];

const getComments = (
  users: User[],
  posts: Post[]
): Prisma.CommentCreateInput[] => [
  {
    author: { connect: { id: users[1].id } },
    post: { connect: { id: posts[0].id } },
    content: "Comment 1",
  },
];

const main = async () => {
  const users = await Promise.all(
    getUsers().map((user) => client.user.create({ data: user }))
  );
  const posts = await Promise.all(
    getPosts(users).map((post) => client.post.create({ data: post }))
  );

  const comments = await Promise.all(
    getComments(users, posts).map((comment) =>
      client.comment.create({ data: comment })
    )
  );
};

main();
