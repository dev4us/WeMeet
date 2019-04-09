export const typeDefs = ["type Day {\n  id: Int!\n  pickDate: String!\n  asMeeting: Meeting\n  participants: [User]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  Day: String!\n  Meeting: String!\n  User: String!\n}\n\ntype Meeting {\n  id: Int!\n  title: String!\n  description: String\n  participants: [User]\n  admin: User\n  meetingDays: [Day]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype User {\n  id: Int!\n  userName: String!\n  userEmail: String!\n  profileImage: String\n  meetings: [Meeting]\n  manages: [Meeting]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n  userName: String\n}\n\ntype Mutation {\n  SignIn(userEmail: String!, userName: String!, profileImage: String): SignInResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  Day: string;
  Meeting: string;
  User: string;
}

export interface Mutation {
  SignIn: SignInResponse;
}

export interface SignInMutationArgs {
  userEmail: string;
  userName: string;
  profileImage: string | null;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
  userName: string | null;
}

export interface Day {
  id: number;
  pickDate: string;
  asMeeting: Meeting | null;
  participants: Array<User> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Meeting {
  id: number;
  title: string;
  description: string | null;
  participants: Array<User> | null;
  admin: User | null;
  meetingDays: Array<Day> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  userName: string;
  userEmail: string;
  profileImage: string | null;
  meetings: Array<Meeting> | null;
  manages: Array<Meeting> | null;
  createdAt: string;
  updatedAt: string | null;
}
