// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UsersReqDto, UsersResDto } from '~/types/users'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResDto, UsersReqDto>({
      query: ({limit, offset}) => `?limit=${limit}&offset=${offset}`,
    }),
  }),
})

export const { useGetAllUsersQuery } = usersApi