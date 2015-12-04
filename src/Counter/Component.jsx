import React from 'react'
import { increment, add } from './Actions'
import { connect } from 'react-redux'

const Component = React.createClass({

  render: function () {
    const { onIncrement, onAdd, count} = this.props
    return (
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={() => onAdd(42)}>Add 42</button>
        <p className='count'>Count: {count}</p>
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
