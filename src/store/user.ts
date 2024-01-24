import { create } from "zustand";

type MusicPersona = {
  mood: number;
  energy: number;
  danceability: number;
  tasteUniqueness: number;
  moodOld: number;
  energyOld: number;
  danceabilityOld: number;
  tasteUniquenessOld: number;
  moodDelta: number;
  energyDelta: number;
  danceabilityDelta: number;
  tasteUniquenessDelta: number;
};

type Track = {
  name: string;
  artist: string;
  album: string;
  image: string;
  link: string;
  placement: number;
};

type Artist = {
  name: string;
  image: string;
  link: string;
  placement: number;
  genres: string[];
  uniqueness: number;
};

type Album = {
  name: string;
  artist: string;
  image: string;
  link: string;
  placement: number;
  amountTopTracks: number;
};

type Genre = {
  name: string;
  placement: number;
  amountTopArtists: number;
};

type User = {
  userId: string;
  name: string;
  imageSmall: string;
  imageBig: string;
  profileLink: string;
  savedTracks: number;
  playlists: number;
  followers: number;
  //
  musicPersona: MusicPersona;
  tracks_short_term: Track[];
  artists_short_term: Artist[];
  albums_short_term: Album[];
  genres_short_term: Genre[];
  tracks_medium_term: Track[];
  artists_medium_term: Artist[];
  albums_medium_term: Album[];
  genres_medium_term: Genre[];
  tracks_long_term: Track[];
  artists_long_term: Artist[];
  albums_long_term: Album[];
  genres_long_term: Genre[];
};

export const userStore = create<User>((set) => ({
  userId: "",
  name: "",
  imageSmall: "",
  imageBig: "",
  profileLink: "",
  savedTracks: 0,
  playlists: 0,
  followers: 0,
  musicPersona: {} as MusicPersona,
  tracks_short_term: [] as Track[],
  artists_short_term: [] as Artist[],
  albums_short_term: [] as Album[],
  genres_short_term: [] as Genre[],
  tracks_medium_term: [] as Track[],
  artists_medium_term: [] as Artist[],
  albums_medium_term: [] as Album[],
  genres_medium_term: [] as Genre[],
  tracks_long_term: [] as Track[],
  artists_long_term: [] as Artist[],
  albums_long_term: [] as Album[],
  genres_long_term: [] as Genre[],
}));
