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
                    {/* I do not know, if 0.6733562 is 0.67% similarity or 68%, so i fix the number to 2 decimals and leave at 0.67. to make it 67% i will add * 100 after .toFixed(2) */}
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

// from the request we are getting back a date that is represented in a standard and sortable format that represents a UTC timedate
// so i made a function to transform the date that we are getting back to the desire format

const transformDate = (date) => {
    //create a new date object
    const newDate = new Date(date)
    //options for the toLocaleDateString
    const options = { year: '2-digit', month: 'short', day: 'numeric' };
    //get the proper format of the date and replace the white spaces with dots
    var formattedDate = newDate.toLocaleDateString('en-GB', options).replace(/\s/g, '. ');
    return formattedDate
}

