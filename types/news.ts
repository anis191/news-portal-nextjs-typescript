
export interface NewsItem{
    title: string;
    id: number;
    description: string;
    language: string;
    source: string;
    url: string;
    snippet: string;
    imageUrl: string;
    published_at: string;
    categories: string;
}

export interface NewsCardProps{
    item: NewsItem
}

export interface SearchProps{
    onSearch: (SearchTerm: string) => void;
}

export interface CategoryProps{
    onCategory: (CategoryTerm: string) =>void;
}

export interface NewsDetailsProps{
  news: NewsItem
}