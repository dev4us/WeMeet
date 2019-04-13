export const typeDefs = ["type Day {\n  id: Int!\n  pickDate: String!\n  asMeeting: Meeting\n  participants: [User]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  Day: String!\n  Meeting: String!\n  GetProfile: GetProfileResponse!\n  User: String!\n}\n\ntype CreateMeetingResponse {\n  ok: Boolean!\n  error: String\n  Meeting: Meeting\n}\n\ntype Mutation {\n  CreateMeeting(title: String!, description: String!): CreateMeetingResponse!\n  SignIn(userEmail: String!, userName: String!, profileImage: String): SignInResponse!\n}\n\ntype Meeting {\n  id: Int!\n  title: String!\n  description: String\n  participants: [User]\n  admin: User\n  meetingDays: [Day]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetProfileResponse {\n  ok: Boolean!\n  error: String\n  User: User\n}\n\ntype User {\n  id: Int!\n  userName: String!\n  userEmail: String!\n  profileImage: String\n  meetings: [Meeting]\n  manages: [Meeting]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n  userName: String\n}\n"];
/* tslint:disable */

export interface Query {
  Day: string;
  Meeting: string;
  GetProfile: GetProfileResponse;
  User: string;
}

export interface GetProfileResponse {
  ok: boolean;
  error: string | null;
  User: User | null;
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

export interface Day {
  id: number;
  pickDate: string;
  asMeeting: Meeting | null;
  participants: Array<User> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  CreateMeeting: CreateMeetingResponse;
  SignIn: SignInResponse;
}

export interface CreateMeetingMutationArgs {
  title: string;
  description: string;
}

export interface SignInMutationArgs {
  userEmail: string;
  userName: string;
  profileImage: string | null;
}

export interface CreateMeetingResponse {
  ok: boolean;
  error: string | null;
  Meeting: Meeting | null;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
  userName: string | null;
}
