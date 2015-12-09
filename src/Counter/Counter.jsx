import React from 'react'
import { increment, add } from './Actions'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'

const Component = React.createClass({

  render: function () {
    const { onIncrement, onAdd, count} = this.props
    return (
      <div className='text-center'>
          <h1 className='count'>Count: {count}</h1>
          <ButtonGroup style={{marginTop: '20px'}}>
            <Button bsStyle='primary' onClick={onIncrement}>Increment</Button>
            <Button bsStyle='info' onClick={() => onAdd(42)}>Add 42</Button>
          </ButtonGroup>
        </div>
    );
  },

  propTypes: {
    onIncrement: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired,
    count: React.PropTypes.number.isRequired
  }

});

export default connect(
  state => ({
    count: state
  }),
  dispatch => ({
    onIncrement: () => dispatch(increment()),
    onAdd: n => dispatch(add(n))
  })
)(Component)
