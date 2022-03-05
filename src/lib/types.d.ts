interface Post {
  blurb?: string;
  contents?: string;
  date: Date,
  embed?: string;
  eventType?: string;
  hasContent?: boolean;
  image?: {
    name: string;
    extension: string;
    width: number;
    height: number;
    aspectRatio: number;
  };
  isLeftAligned?: boolean;
  repository?: string;
  showYearLabel?: boolean;
  slug: string;
  tags: string[];
  thumbnail: {
    name: string;
    extension: string;
  };
  title: string;
  website?: string;
}