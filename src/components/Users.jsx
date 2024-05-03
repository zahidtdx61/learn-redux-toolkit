import { useSelector } from "react-redux";

const Users = () => {
  const { users } = useSelector((state) => state.UserReducer);
  console.log(users);
  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-4 gap-4">
      {users.map(({ id, username, name, email}) => (
        <div key={id} className="bg-zinc-200 p-4 rounded text-slate-700">
          <h1 className="font-semibold mb-4">{username}</h1>
          <p className="text-sm">{name}</p>
          <p className="text-sm font-medium text-slate-500">{email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
