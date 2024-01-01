import fetchNews from "../../../../lib/fetchNews";
import NewsList from "@/app/NewsList";
import { categories } from "../../../../constants";
import { GetStaticPaths } from 'next'
type Props={
    params:{category:string};
};
async function NewsCategory({params:{category}}:Props) {
    try {
        const news: NewsResponse | undefined = await fetchNews(category);
        if (news) {
          return(
            <div>
              <h1 className="headerTitle">{category}</h1>
              <NewsList news={news}/>
            </div>
          )
        } else {
          console.error('News is undefined');
          return <div>Error fetching news</div>;
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        return <div>Error fetching news</div>;
      }
}

export default NewsCategory;
// export async function generalStaticParams(){
//     return categories.map(category=>({
//         category:category
//     }));
// }
export async function getStaticPaths(): Promise<{
  paths: { params: { category: string }; }[];
  fallback: boolean;
}> {
  const paths = categories.map((category) => ({
    params: { category: category },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}