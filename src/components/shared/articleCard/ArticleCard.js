import React from 'react'
import { Separator } from '../separator/Separator';
import './ArticleCard.css'

export default function ArticleCard({ article }) {
    const {
        document_id,
        thumbnail,
        title,
        similarity,
        published,
        source_name,
        url
    } = article;
    return (
        <div
            data-testid='articleCard'
            id={document_id}
            className='articleCard-container'
        >
            <div>
                <img data-testid='articleImage' src={thumbnail} alt={title} className='articleCard-img'
/>
            </div>
            <div className='articleCard-content'>
                <div>
                    <a data-testid='articleTitle' href={url} className='title'>{title}</a>
                </div>
                <div className='extraInfo-container'>
                    {/* I do not know, if 0.6733562 is 0.68% similarity or 68% */}
                    <span data-testid='articleSimilarity' className='similarity'>{similarity.toFixed(2)}% similar</span>
                    <Separator isSlim />
                    <span data-testid='articlePublished' className='text'>{transformDate(published)}</span>
                    <Separator isSlim />
                    <span data-testid='articleSource' className='text'>{source_name}</span>
                </div>
            </div>
        </div>
    )
}

const transformDate = (date) => {
    //create a new date object
    const newDate = new Date(date)
    //options for the toLocaleDateString
    const options = { year: '2-digit', month: 'short', day: 'numeric' };
    //get the proper format of the date and replace the white spaces with dots
    var cleanDate = newDate.toLocaleDateString('en-GB', options).replace(/\s/g, '. ');
    return cleanDate
}

