import { Container, Row } from 'react-bootstrap'
import history from '../dataSource/books/history.json'
import fantasy from '../dataSource/books/fantasy.json'
import horror from '../dataSource/books/horror.json'
import romance from '../dataSource/books/romance.json'
import scifi from '../dataSource/books/scifi.json'
import BookCard from '../BookCard/BookCard'
import SearchBook from '../SeachBook/SearchBook'
import { useState } from 'react'
const MainSection = () => {
    const randomBookAll = [
        ...fantasy,
        ...history,
        ...horror,
        ...scifi,
        ...romance,
    ]
    const randomBooks = randomBookAll
        .sort(() => Math.random() - 0.5)
        .slice(0, 60)

    const [books, setbooks] = useState(randomBooks)
    const [allBooks] = useState(randomBooks)
    console.log(books)
    return (
        <Container>
            <SearchBook books={books} setbooks={setbooks} allBooks={allBooks} />
            <Row className="gy-2">
                {books &&
                    books.map((book) => (
                        <BookCard
                            title={book.title}
                            price={book.price}
                            category={book.category}
                            img={book.img}
                        />
                    ))}
            </Row>
        </Container>
    )
}

export default MainSection
