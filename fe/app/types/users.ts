export type UsersReqDto = {
  limit: number;
  offset: number;
};

export type TUser = {
  id: string;
  name: string;
  location: string;
};

export type UsersResDto = { users: TUser[] };
