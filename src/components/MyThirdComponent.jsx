import PropTypes from "prop-types";


export const MyThirdComponent = (props) => {
  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{ props.name }</li>
            <li>{ props.last_name }</li>
            <li>{ props.age }</li>
        </ul>
    </div>
  )
}


MyThirdComponent.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    age: PropTypes.string
}