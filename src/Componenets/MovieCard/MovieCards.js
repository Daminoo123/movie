import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const MovieCards = ({movie}) => {
  return (
    <div >
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl}/>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
        <Card.Text>
         {movie.rate}
        </Card.Text>
        <Button variant="primary">edit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCards ;
