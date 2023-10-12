import ArticleListPage from "./articles/page";

export default function Home() {
  return (
    <main className="  p-24">
      <h1 className="text-center text-2xl ">News App</h1>
      <ArticleListPage></ArticleListPage>
      {/* <div className="mt-10">
        <a href="/articles">View Articles</a>
      </div> */}
    </main>
  )
}
