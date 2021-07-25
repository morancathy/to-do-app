import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
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
