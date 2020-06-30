import axios from 'axios'


export const getBooks = async () => {
    const get = {
        method:"GET",
        url:("http://localhost:3002/books")
    }
    let books = await axios(get)
    return books
}
export const getSingleBook = async (asin) => {
    const get = {
        method:"GET",
        url:(`http://localhost:3002/books/${asin}`)
    }
    let books = await axios(get)
    return books
}
export const getComment = async (asin) => {
    const get = {
        method:"GET",
        url:(`http://localhost:3002/comments/${asin}`),
    }
    let comment = await axios(get)
    return comment
}
