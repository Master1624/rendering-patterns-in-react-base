import { useState } from "react";

function useLoading(initialLoading: boolean = false) {
  const [isLoading, setisLoading] = useState<boolean>(initialLoading);

  return { isLoading, setisLoading };
}

type UserProps = {
  name: string;
};

const UserComponent: React.FC<UserProps> = ({ name }) => {
  const { isLoading, setisLoading } = useLoading(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={() => setisLoading(true)}>Simulate Loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="John Davoe" />;
};
