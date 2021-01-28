import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Nav from '../Nav';


describe('Nav', () => {
    it('finds input label', () => {
        render(<Nav />)
        const { getByLabelText } = screen

        getByLabelText('Article URL:', { selector: 'input' })
    })
    it('type in the text box:', () => {
        render(<Nav />)
        const { getByLabelText } = screen
        const input = getByLabelText(/article URL:/i)
        userEvent.type(input, 'That should be an URL')
        expect(input.value).toBe('That should be an URL')
    })
    it('fires the submit action', () => {
        const onClick = jest.fn();
        render(<Nav handleSubmit={onClick} />)
        const { getByText } = screen
        const button = getByText(/submit/i);
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    })
});