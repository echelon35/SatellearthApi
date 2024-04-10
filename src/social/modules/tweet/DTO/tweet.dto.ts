export class TweetDto {
  tweet_id: string;
  contenu: string;
  geojson: string;
  created: Date;
  author: string;
  hashtags: string[];
  lien: string[];
}
