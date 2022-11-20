import { Link } from 'react-router-dom'
import '../styles/Button.css';

function Button(props) {
  if (props.routeLink) {
    return(
      <Link className={"button"} to={props.to}>
        {props.label}
      </Link>
    )
  }
  else {
    return(
      <a className={"button"} onClick={props.onClick}>
        {props.label}
      </a>
    )
  }
}

export default Button
