"use client";

import Link from "next/link";
import { use } from "react";

// class linkClassName
const linkClassName = "text-blue-500 hover:underline";

export default function NewsArticle({ params, searchParams }: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "km" }>;
}) {

  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div className="">
      <h1>News article {articleId}</h1>
      <p>Reading in language {lang}</p>

      <div className="mt-6 space-x-4">
        <Link href={`/articles/${articleId}?lang=en`} className={linkClassName} >English</Link>
        <Link href={`/articles/${articleId}?lang=fr`} className={linkClassName} >French</Link>
        <Link href={`/articles/${articleId}?lang=km`} className={linkClassName} >Khmer</Link>
      </div>

    </div>
  );
}
