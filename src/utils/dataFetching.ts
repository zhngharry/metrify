import { userStore } from "../store/user";

const PROFILE_URL = "https://api.spotify.com/v1/me";
const SAVED_TRACKS_URL = "https://api.spotify.com/v1/me/tracks";
const SAVED_PLAYLISTS_URL = "https://api.spotify.com/v1/me/playlists";
const TOP_ITEM_URL = "https://api.spotify.com/v1/me/top/";

export async function getProfileData(auth_header: any) {
  await fetch(PROFILE_URL, {
    headers: auth_header,
  })
    .then((res) => res.json())
    .then((data) => {
      userStore.setState((state) => ({
        ...state,
        userId: data.id,
        name: data.display_name,
        imageSmall: data.images[0].url,
        imageBig: data.images[1].url,
        profileLink: data.external_urls.spotify,
        followers: data.followers.total,
      }));
    });
}

export async function getSavedTracks(auth_header: any) {
  await fetch(SAVED_TRACKS_URL, {
    headers: auth_header,
  })
    .then((res) => res.json())
    .then((data) => {
      userStore.setState((state) => ({
        ...state,
        savedTracks: data.total,
      }));
    });
}

export async function getSavedPlaylists(auth_header: any) {
  await fetch(SAVED_PLAYLISTS_URL, {
    headers: auth_header,
  })
    .then((res) => res.json())
    .then((data) => {
      userStore.setState((state) => ({
        ...state,
        playlists: data.total,
      }));
    });
}

export async function getTopArtistsShort(auth_header: any) {
  await fetch(
    TOP_ITEM_URL + "artists?time_range=short_term&limit=50&offset=0",
    {
      headers: auth_header,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const timeRange = "short_term";
      const artists = data.items;
      const genreCount: Record<string, number> = {};
      const transformedArtists = artists.forEach(
        (artist: any, index: number) => {
          artist.genres.forEach((genre: string) => {
            if (genreCount[genre]) {
              genreCount[genre]++;
            } else {
              genreCount[genre] = 1;
            }
          });

          return {
            name: artist.name,
            image: artist.images[0].url,
            link: artist.external_urls.spotify,
            placement: index + 1,
            genres: artist.genres,
            uniqueness: 100 - artist.popularity,
          };
        }
      );

      let genres = Object.keys(genreCount).map((genreName) => ({
        name: genreName,
        placement: 0,
        amountTopArtists: genreCount[genreName],
      }));

      genres = genres.sort((a, b) => b.amountTopArtists - a.amountTopArtists);

      genres.forEach((genre, index) => {
        genre.placement = index + 1;
      });

      userStore.setState((state) => ({
        ...state,
        [`artists_${timeRange}`]: transformedArtists,
        [`genres_${timeRange}`]: genres,
      }));
    });
}

export async function getTopArtistsMedium(auth_header: any) {
  await fetch(
    TOP_ITEM_URL + "artists?time_range=medium_term&limit=50&offset=0",
    {
      headers: auth_header,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const timeRange = "medium_term";
      const artists = data.items;
      const genreCount: Record<string, number> = {};
      const transformedArtists = artists.forEach(
        (artist: any, index: number) => {
          artist.genres.forEach((genre: string) => {
            if (genreCount[genre]) {
              genreCount[genre]++;
            } else {
              genreCount[genre] = 1;
            }
          });

          return {
            name: artist.name,
            image: artist.images[0].url,
            link: artist.external_urls.spotify,
            placement: index + 1,
            genres: artist.genres,
            uniqueness: 100 - artist.popularity,
          };
        }
      );

      let genres = Object.keys(genreCount).map((genreName) => ({
        name: genreName,
        placement: 0,
        amountTopArtists: genreCount[genreName],
      }));

      genres = genres.sort((a, b) => b.amountTopArtists - a.amountTopArtists);

      genres.forEach((genre, index) => {
        genre.placement = index + 1;
      });

      userStore.setState((state) => ({
        ...state,
        [`artists_${timeRange}`]: transformedArtists,
        [`genres_${timeRange}`]: genres,
      }));
    });
}

export async function getTopArtistsLong(auth_header: any) {
  const topItemsLong = await fetch(
    TOP_ITEM_URL + "artists?time_range=long_term&limit=50&offset=0",
    {
      headers: auth_header,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const timeRange = "long_term";
      const artists = data.items;
      const genreCount: Record<string, number> = {};
      const transformedArtists = artists.map((artist: any, index: number) => {
        artist.genres.forEach((genre: string) => {
          if (genreCount[genre]) {
            genreCount[genre]++;
          } else {
            genreCount[genre] = 1;
          }
        });

        return {
          name: artist.name,
          image: artist.images[0].url,
          link: artist.external_urls.spotify,
          placement: index + 1,
          genres: artist.genres,
          uniqueness: 100 - artist.popularity,
        };
      });

      let genres = Object.keys(genreCount).map((genreName) => ({
        name: genreName,
        placement: 0,
        amountTopArtists: genreCount[genreName],
      }));

      genres = genres.sort((a, b) => b.amountTopArtists - a.amountTopArtists);

      genres.forEach((genre, index) => {
        genre.placement = index + 1;
      });

      userStore.setState((state) => ({
        ...state,
        [`artists_${timeRange}`]: transformedArtists,
        [`genres_${timeRange}`]: genres,
      }));
    });
}
