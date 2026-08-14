import { useEffect, useState } from "react";
import Card from "./sub-components/Card";

export default function () {
  const [articles, setArticles] = useState([]);

  // fetch
  const getDevTo = async () => {
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=ikabbash&per_page=3"
      );

      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDevTo();
  }, []);

  return (
    <>
      {/* reference: https://www.floatui.com/components/cards */}
      <section className="mx-auto px-4 max-w-5xl scroll-mt-24 mb-50" id="blog">
        <div className="mt-4 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
          <h1 className="text-center sm:text-left text-3xl font-bold text-text1">
            <span className="text-primary">03. </span>
            Latest Blog Posts
          </h1>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
          {articles.map((article) => {
            return (
              <Card
                key={article.id}
                url={article.url}
                title={article.title}
                image_url={article.cover_image || article.social_image}
                date={article.published_at}
              />
            );
          })}
        </div>

        <div className="mt-5 text-4xl flex px-4 md:px-0 justify-center">
          <span className="text-lg py-1 text-text2">
            Check out my other articles on{" "}
            <a
              href="https://dev.to/ikabbash"
              target="_blank"
              className="text-secondary font-semibold hover:underline transition-all duration-500"
            >
              Dev.to
            </a>
            .
          </span>
        </div>
      </section>
    </>
  );
}