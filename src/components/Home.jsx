import React from 'react'
import {Container,Row,Col,Card,DropdownButton,
  Dropdown,InputGroup,FormControl,Button} from 'react-bootstrap'
  import BookJumbotron from './BookJumbotron'
  import {Link} from 'react-router-dom'
  import {getBooks} from '../fetches/index'

// let bookCategory = ['history' , 'horror' , 'romance' , 'scifi' , 'fantasy' ]
// let books = {
// fantasy:require('../Data/fantasy.json'),
// history :require( '../Data/history.json'),
// horror :require( '../Data/horror.json'),
// romance :require( '../Data/romance.json'),
// scifi :require( '../Data/scifi.json')
// }
class Home extends React.Component{
    state = {
        categorySelected : "fantasy",
        books: [],
    }

    componentDidMount = async () => {
     let books = await getBooks()
     this.setState({
       books:books.data.data
     })
     console.log(books.data.data[0])
    }

    //  handleDropDown= (category) => {
    //     this.setState({
    //         categorySelected: category,
    //         books:books[category].slice(0,12)
    //     })
    // }
    // selectBook = (bookSelected) => {
    //   console.log(bookSelected)
    //   this.setState({
    //     selectedBook : bookSelected
    //   })
    // }

    // handleFilter = (search) => {
    //     let category = this.state.categorySelected;
    //     if(search){
    //         let filteredBooks = books[category].filter((book) =>
    //         book.title.toLowerCase().includes(search.toLowerCase())
    //       );
    //       this.setState({ books: filteredBooks.slice(0, 12) });
    //     }
    //     else{
    //         this.setState({ books: books[category].slice(0, 12) });
    //     }
    //     }
    
    render(){
        return<>
         <BookJumbotron/>
      <Container>
      <InputGroup className="mb-3">
    {/* <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={this.state.categorySelected}
      id="input-group-dropdown-1"
    >
     {bookCategory.map((category , index)=>{
              return(
                <Dropdown.Item href="#/action-1" key ={index} onClick={()=>this.handleDropDown(category)}>
                    {category}
                </Dropdown.Item>
              )
          })}
    </DropdownButton> */}
    <FormControl aria-describedby="basic-addon1" placeholder="Search by title" onChange={(e)=>this.handleFilter(e.target.value)}/>
  </InputGroup>
        <Row>
        {this.state.books.slice(0,12).map((book)=>{
            return (
        <Col xs={4} key={book.asin}>
        <Card style={{ width: '18rem' }}>
        <Link to={'/details/' + book.asin }>
        <Card.Img variant="top" src={book.img} />
        </Link>
        <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
        ${book.price}
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        )
        })}
          </Row>
      </Container>
        </>
    }
}
export default Home