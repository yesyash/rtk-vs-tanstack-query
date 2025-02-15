import { Link } from "react-router";
import { useGetAllUsersQuery } from "~/services/users";

const UsersList = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery({
    limit: 10,
    offset: 0,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users list</div>;
  }

  return (
    <ul>
      {data?.users.map((user) => (
        <li key={user.id}>
          <Link to={`/rtk/${user.id}`} className="py-1 w-max group before:content-['-'] flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="group-hover:underline">{user.name}.</span>
            <span className="text-gray-400">Location: {user.location}</span>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const RtkQuery = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl pb-6 font-semibold">Rtk Query</h1>

      <div>
        <h3 className="text-lg font-medium pb-2">Users list</h3>
        <UsersList />
      </div>
    </div>
  );
};
