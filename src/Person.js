import React from 'react'
import PropTypes from 'prop-types'

const Person = props => (
  <div>
    <h1>
      Hello {props.firstName} {props.lastName},
    </h1>
    {props.organization ? <p>You work for {props.organization}.</p> : null}
  </div>
)

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  organization: PropTypes.string,
  gender: PropTypes.oneOf(['female', 'male', 'other']),
}
Person.defaultProps = {
    organization: 'reactDev',
}
export default Person
