import { render, screen } from '@testing-library/react'
import ArticleCard from '../ArticleCard';

const article = {
    author: null,
    document_id: 16088090,
    image: "image.jpg",
    published: "2019-08-04T08:14:00.000Z",
    similarity: 0.6725990772,
    source_name: "Forbes",
    source_slug: "forbes",
    summary: "EU Commissioner Julian King has warned Europe to prepare for terrorist use of drones—calling for international projects to defend against such attacks.",
    thumbnail: "thumbnail.jpg",
    title: "Europe's Security Chief Issues Dire Warning On Terrorist Threat From Drones",
    url: 'https://www.forbes.com/sites/zakdoffman/2019/08/04/europes-security-chief-issues-dire-w'
}

describe('ArticleCard', () => {
    it('renders the desire props', () => {
        render(<ArticleCard  article={article}/>)
        const { getByTestId } = screen
        expect(getByTestId('articleImage').src).toBe("http://localhost/thumbnail.jpg")
        expect(getByTestId('articleTitle').textContent).toBe("Europe's Security Chief Issues Dire Warning On Terrorist Threat From Drones")
        expect(getByTestId('articleSimilarity').textContent).toBe('0.67% similar')
        expect(getByTestId('articlePublished').textContent).toBe("4. Aug. 19")
        expect(getByTestId('articleSource').textContent).toBe("Forbes")

    })
});