export interface RootObject {
  articles: Article[];
  articlesCount: number;
}

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string | Date;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

export interface Author {
  username: string;
  bio?: string;
  image: string;
  following: boolean;
}
