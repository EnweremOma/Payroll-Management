export enum E_CATEGORY {
  ADMIN = "admin",
  LECTURER = "lecturer",
  STUDENT = "student",
  GUEST = "guest",
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  imgURL: string;
  category: E_CATEGORY;
  department: string;
  courseTitle: string;
  about: string;
}

export interface ProfileList {
  name: string;
  department: string;
  imgURL: string;
  category: E_CATEGORY;
  courseTitle: string;
}
