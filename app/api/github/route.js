export async function GET() {
  const username = process.env.GITHUB_USERNAME || "NeoHylde";
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(
    `https://api.github.com/users/${username}/events/public`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return Response.json({ push: null });

  const events = await res.json();
  const event = Array.isArray(events)
    ? events.find((e) => e.type === "PushEvent")
    : null;

  if (!event) return Response.json({ push: null });

  return Response.json({
    push: {
      repo: event.repo.name,
      branch: event.payload.ref.replace("refs/heads/", ""),
      message: event.payload.commits?.at(-1)?.message ?? "",
      at: event.created_at,
      url: `https://github.com/${event.repo.name}/commit/${event.payload.head}`,
    },
  });
}
