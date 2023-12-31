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
        getTopCharts: builder.query({ query: (genre) => `/charts/get-top-songs-in_country_by_genre?genre=${genre}&country_code=US&limit=50` }),
        getTopPlays: builder.query({ query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=50` }),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get_details?id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?id=${songid}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artist/get-details?id=${artistId}` }),
        getArtistTopSongs: builder.query({ query: (artistId) => `/artist/get-top-songs?id=${artistId}` }),
        getSongsBySearch: builder.query({query:(searchTerm) => `/search?term=${searchTerm}`})
    }),
});

export const {
    useGetTopChartsQuery,
    useGetTopPlaysQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopSongsQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;