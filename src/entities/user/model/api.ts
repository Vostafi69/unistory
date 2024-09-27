import { baseApi } from "@/shared/lib/api";
import {
  type User,
  UserModel,
  UsersResponseModel,
  type UsersResponse,
} from "./types";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UsersResponse, { page?: number; perPage?: number }>({
      providesTags: ["Users"],
      query: ({ page = 0, perPage = 20 }) =>
        `/data/?page=${page}&perPage=${perPage}`,
      transformResponse: (response: unknown) =>
        UsersResponseModel.parse(response),
    }),
    getUser: build.query<User, number>({
      providesTags: ["Users"],
      query: (id: number) => `/data/id/${id}`,
      transformResponse: (response: unknown) => UserModel.parse(response),
    }),
  }),
  overrideExisting: true,
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
