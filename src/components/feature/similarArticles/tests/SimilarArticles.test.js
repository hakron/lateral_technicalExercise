import { getAllByTestId, render, screen } from '@testing-library/react'
import SimilarArticles from '../SimilarArticles';

const recommendedArticles = [{
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
},
{
    author: null,
    document_id: 16088091,
    image: "image.jpg",
    published: "2020-08-04T08:14:00.000Z",
    similarity: 0.6725990772,
    source_name: "New York Time",
    source_slug: "new-york-times",
    summary: "EU Commissioner Julian King has warned Europe to prepare for terrorist use of drones—calling for international projects to defend against such attacks.",
    thumbnail: "thumbnail.jpg",
    title: "Europe's Security Chief Issues Dire Warning On Terrorist Threat From Drones",
    url: 'https://www.newyorktimes.com'
}]

describe('SimilarArticles', () => {
    it('renders the similiar Articles', () =>  {
        render(<SimilarArticles recommendedArticles={recommendedArticles}/>)
        screen.debug()
        const {getByRole, getAllByTestId} = screen
        const title = getByRole("heading", { level: 2 })
        const articlesComponent = getAllByTestId('articleCard')
        expect(title.textContent).toBe('Similar Articles')
        expect(articlesComponent).toHaveLength(2)
    })
})
