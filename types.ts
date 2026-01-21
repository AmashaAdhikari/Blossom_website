
export interface CarePackage {
  id: string;
  name: string;
  ageGroup: string;
  hours: string;
  activities: string[];
  features: string[];
  price?: string;
}

export enum Page {
  Home = 'home',
  Packages = 'packages',
  About = 'about',
  Login = 'login',
  SignUp = 'signup'
}
