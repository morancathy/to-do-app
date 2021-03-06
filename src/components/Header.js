import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation();
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/'&& <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'My To Do List:',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//css in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }
export default Header;
