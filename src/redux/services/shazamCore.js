import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({

    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPi-Key', '966dbf9131msh22bbb6805a935f5p186cfajsn640f0aba3bc3');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in_country_by_genre?genre=POP&country_code=US' }),
        getTopPlays: builder.query({query: () =>'/charts/get-top-songs-in_world_by_genre?genre=POP' }),
        getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetTopPlaysQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;