import React from "react";
import { User } from "../types/User";

type userprops = {
  user: User;
};

const UserCard = ({ user }: userprops) => {
  return (
    <div>
      <h2>{user.username}</h2>
    </div>
  );
};

export default UserCard;
