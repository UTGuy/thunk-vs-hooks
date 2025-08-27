import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
    endpoints: (builder) => ({
        fetchEmployees: builder.query<any, number>({
            query: (results = 10) => `?results=${results}`,
        }),
    }),
});

export const { useFetchEmployeesQuery } = employeeApi;