// tslint:disable-next-line:class-name
export interface HN_User {
  about: string;
  created: string;
  karma: number;
  submitted: number[];
  id: string;
}
// tslint:disable-next-line:class-name
export interface HN_Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  // Custom properties
  timeString?: string;
}

// tslint:disable-next-line:class-name
export interface HN_Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
  // Custom Properties
  timeString:string;
}
