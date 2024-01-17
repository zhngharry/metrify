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
  percentage: number;
  placement: number;
  amountTopArtists: number;
};

type User = {
  name: string;
  imageSmall: string;
  imageBig: string;
  profileLink: string;
  savedTracks: number;
  playlists: number;
  followers: number;
  musicPersona: MusicPersona;
  tracksRecent: Track[];
  artistsRecent: Artist[];
  albumsRecent: Album[];
  genresRecent: Genre[];
  tracks6Months: Track[];
  artists6Months: Artist[];
  albums6Months: Album[];
  genres6Months: Genre[];
  tracksAllTime: Track[];
  artistsAllTime: Artist[];
  albumsAllTime: Album[];
  genresAllTime: Genre[];
};

export const userStore = create((set) => ({
  user: {
    name: "",
    imageSmall: "",
    imageBig: "",
    profileLink: "",
    savedTracks: 0,
    playlists: 0,
    followers: 0,
    musicPersona: {} as MusicPersona,
    tracksRecent: [] as Track[],
    artistsRecent: [] as Artist[],
    albumsRecent: [] as Album[],
    genresRecent: [] as Genre[],
    tracks6Months: [] as Track[],
    artists6Months: [] as Artist[],
    albums6Months: [] as Album[],
    genres6Months: [] as Genre[],
    tracksAllTime: [] as Track[],
    artistsAllTime: [] as Artist[],
    albumsAllTime: [] as Album[],
    genresAllTime: [] as Genre[],
  } as User,
  setUser: (user: User) => set({ user }),
}));
