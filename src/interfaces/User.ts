export enum E_CATEGORY {
  ADMIN = "Admin",
  LECTURER = "Lecturer",
  STUDENT = "Student",
  GUEST = "Guest",
}

export interface FieldError {
  code: string;
  expected: string;
  recieved: string;
  path: string[];
  message: string;
}

export interface ErrorObject {
  error?: string | null;
  errors?: FieldError[];
}

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  imgURL: string;
  category: E_CATEGORY;
  department: string;
  courseTitle: string;
  about: string;
}

export interface UserList {
  _id?: string;
  firstName: string;
  lastName: string;
  department: string;
  imgURL: string;
  category: E_CATEGORY;
  courseTitle: string;
}

export class UserResponse {
  users?: User[] | undefined | null;
  user?: User | undefined | null;
  errors?: FieldError[];
  count?: number;
  error?: string;
}
