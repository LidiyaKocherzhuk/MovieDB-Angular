export interface IVideoPage {
  id: number;
  results: IVideo[];
}

export interface IVideo {
  key: string;
  site: string;
  type: string;
}
