export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    return Response.json({ tracks: [] });
  }

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&limit=3&format=json`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) return Response.json({ tracks: [] });

  const data = await res.json();
  const raw = data?.recenttracks?.track;

  if (!raw || raw.length === 0) return Response.json({ tracks: [] });

  const tracks = (Array.isArray(raw) ? raw : [raw]).map((track) => ({
    name: track.name,
    artist: track.artist["#text"],
    album: track.album["#text"],
    image: track.image?.[2]?.["#text"] || null,
    nowPlaying: track["@attr"]?.nowplaying === "true",
    url: track.url,
  }));

  return Response.json({ tracks });
}
