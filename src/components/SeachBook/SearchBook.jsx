import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const SearchBook = ({ books, setbooks, allBooks }) => {
    const [inputValue, setInputValue] = useState('')

    const onChangeSearchInput = (e) => {
        setInputValue(e.target.value)
    }

    const filtredBooks = () => {
        if (inputValue === '') {
            setbooks(allBooks)
        } else {
            const filtered = books.filter((book) => {
                return book.title
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
            })
            setbooks(filtered)
        }
    }

    console.log('Componnte Search', allBooks)
    return (
        <Row className="py-4">
            <Col className="d-flex align-items-center  gap-2">
                <Form.Control
                    type="text"
                    placeholder="Search Book"
                    onChange={onChangeSearchInput}
                />

                <button className="btn btn-primary" onClick={filtredBooks}>
                    {' '}
                    Seach{' '}
                </button>
            </Col>
        </Row>
    )
}

export default SearchBook
