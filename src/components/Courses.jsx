import React, { useState } from 'react'
import coursesData from "./../coursesData"
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function courses() {
    const [courses, useCourses] = useState(coursesData)
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    {courses.map(course => (
                        <Col key={course.id} xs={12} sm={6} md={4}>
                            <Link to={`/course/${course.id}`} style={{textDecoration: "none"}}>
                                <Card className='mb-4'>
                                    <Card.Img variant="top" src={course.image} />
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                        <Card.Text>Price : {course.price.toLocaleString()} Rls</Card.Text>
                                        <Button variant="primary">Get Course</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
