import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./sub-components/Card";

export default function () {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://dev.to/api/articles?username=hat52"
    );
    setArticles(data.slice(0, 3));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {/* reference: https://www.floatui.com/components/cards */}
    <section className="mx-auto px-4 max-w-screen-xl">
      <div className="mt-12 grid gap-3 lg:grid-cols-3 sm:grid-cols-1">
        {articles.map((key) => {
          return (
            <Card
              key={key.url}
              url={key.url}
              title={key.title}
              image_url={key.cover_image}
              date={key.created_at}
              tags={key.tag_list}
            />
          );
        })}
      </div>
      </section>
    </>
  );
}
