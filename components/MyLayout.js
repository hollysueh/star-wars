import Header from './Header'

//Standard layout for app
const layoutStyle = {
  margin: 20,
  padding: 40,
  'background-color': '#191919',
  'font-family': 'Didot',
  'text-align': 'center',
  color: 'GoldenRod'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout