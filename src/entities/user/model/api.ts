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
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items);
        currentCache.meta.currentPage += 1;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getUser: build.query<User, string>({
      providesTags: ["Users"],
      query: (id: string) => `/data/id/${id}`,
      transformResponse: (response: unknown) => UserModel.parse(response),
    }),
    getUserByAddress: build.query<User, string>({
      providesTags: ["Users"],
      query: (address: string) => `/data/address/${address}`,
      transformResponse: (response: unknown) => UserModel.parse(response),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetUserQuery,
  useGetUserByAddressQuery,
  useLazyGetUserQuery,
  useLazyGetUserByAddressQuery,
} = usersApi;
