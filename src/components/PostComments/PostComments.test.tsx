import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

it('Deve inserir dois comentários corretamente', () => {
    render(<PostComment />);

    const commentInput = screen.getByTestId('comment-input');

    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

    fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});