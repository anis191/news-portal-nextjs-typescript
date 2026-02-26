
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