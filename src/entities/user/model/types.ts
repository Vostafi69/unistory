import { z } from "zod";

export const UserModel = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  address: z.string(),
});

export const UsersResponseModel = z.object({
  meta: z.object({
    currentPage: z.number(),
    perPage: z.number(),
    totalPages: z.number(),
  }),
  items: z.array(UserModel),
});

export type User = z.infer<typeof UserModel>;
export type UsersResponse = z.infer<typeof UsersResponseModel>;
