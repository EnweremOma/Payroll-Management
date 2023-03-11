export enum E_CATEGORY {
  ADMIN = "Admin",
  LECTURER = "Lecturer",
  STUDENT = "Student",
  GUEST = "Guest",
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
