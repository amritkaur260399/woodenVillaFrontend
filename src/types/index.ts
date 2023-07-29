import { UriEndPoint } from "../Interface/index";

export interface EndPoint {
  [key: string]: UriEndPoint;
}

export interface formDetailInterface {
  user_handle: string;
  bio: string;
  dob: string;
  country: string;
  city: string;
  gender: string;
}
