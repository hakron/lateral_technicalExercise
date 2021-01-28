import React from "react";
import ArticleCard from "../../shared/articleCard/ArticleCard";
import { Separator } from "../../shared/separator/Separator";
import './SimilarArticles.css'

export default function SimilarArticles({ recommendedArticles }) {
    console.log("recommendedArticles :>> ", recommendedArticles);
    return (
        recommendedArticles.length !== 0 && (
            <div
            className='similarArticles-container'
            >
                <h2>Similar Articles</h2>
                <div className='filters-container'>
                    <span>Filters:</span>
                    <span className='filter'>MY SOURCES</span>
                    <Separator />
                    <span className='filter'>PAST MONTH</span>
                    <span className='filter'>?</span>
                </div>
                {recommendedArticles.map((recommendedArticle, i) => {
                    return (
                        <ArticleCard key={i} article={recommendedArticle} />

                    );
                })}
            </div>
        )
    );
}
