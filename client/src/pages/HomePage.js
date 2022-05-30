import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'


export default function HomePage() {
  return (
    <Container>
        <Row className='mt-5'>
            <Col className='text-justify mb-5' >
                <h4>Bienvenid@ a la aplicacion GESTOR DE TAREAS</h4><br/>
                <p>Esta aplicacion fue creada con el fin de demostrar el uso de React Router para la navegacion de la aplicacion</p>
                <p>¡Aquí podras gestionar tus proyectos!</p>
                <p>
                  Marca tus toareas como terminadas, Agrega, elimina o edita.
                </p>
                <div>
                  <Link to={routes.login}>Ingresa</Link> o <Button as={Link} to={routes.register} variant="primary">Registrate</Button>
                </div>
            </Col>
            <Col md={{ span: 5, offset: 1 }} className='text-center'>
                <img  style={{width: '100%' }} src="/img/task-manager.svg" alt="gestor-de-tareas"/>
                <p>¡Gestiona tu tiempo, mejora tu Proactividad!</p>
            </Col>
        </Row>
    </Container>
  )
}
