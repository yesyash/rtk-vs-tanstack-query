import { availableLocations, availableNames } from "./dummy-data";

type TUser = {
  id: string;
  name: string;
  location: string;
};

const generateRandomUsers = (count: number): TUser[] => {
  const users: TUser[] = [];
  const totalAvailableNames = availableNames.length;
  const totalAvailableLocations = availableLocations.length;

  for (let i = 0; i < count; i++) {
    users.push({
      id: Bun.randomUUIDv7(),
      name: availableNames[Math.ceil(Math.random() * totalAvailableNames)],
      location:
        availableLocations[Math.ceil(Math.random() * totalAvailableLocations)],
    });
  }

  return users;
};

const users = generateRandomUsers(50);

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/users") {
      return Response.json({ users });
    }

    return new Response("404");
  },
});

console.log(`Listening on ${server.url}`);
