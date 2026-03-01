const fetchNews = async(search: string="", category: string="") => {
    try{
        const response = await fetch(`https://news-portal-fastapi-server.vercel.app/news?page=1&limit=10&category=${category}&search=${search}`);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("Error in fetching news data", error);
        return [];
    }
}

export default fetchNews;