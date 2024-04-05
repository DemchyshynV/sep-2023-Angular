import {IAuth} from "./auth.interface";

export interface IUser {
  id: number;
  username: string;
  last_login: Date,
  created: Date;
  updated: Date;

}
