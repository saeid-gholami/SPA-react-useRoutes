import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import coursesData from '../coursesData'
import { useParams } from 'react-router-dom'

export default function MainCourse() {
  let params = useParams();
  let mainCourse = coursesData.find(course => course.id == params.courseID);
  return (
    <Container className='mt-5'>
      <Row className='align-items-center'>
        <Col sm={6}>
          <Image src={`/${mainCourse.image}`} className='w-100' thumbnail/>
        </Col>
        <Col sm={6} className='ps-sm-5'>
          <h1>{mainCourse.title}</h1>
          <h4 className='fw-light lh-base'>{mainCourse.desc}</h4>
          <code className='text-dark fs-4'>Course Price : {mainCourse.price.toLocaleString()} Rls</code>
        </Col>
      </Row>
    </Container>
  )
}
