import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
import Counter from '../Counter/Counter'

const Component = React.createClass({
  render: function () {
    return (
      <Grid>
        <Row style={{marginTop: '20px'}}>
          <Col xs={12} md={3}/>
          <Col xs={12} md={6}>
            <Jumbotron>
              <Counter/>
            </Jumbotron>
          </Col>
          <Col xs={12} md={3}/>
        </Row>
      </Grid>
    );
  }
});

export default Component;
