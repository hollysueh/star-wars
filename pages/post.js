import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

//On each individual character page, display character's details
//Get character information {props.person} from getInitialProps
const Post = (props) => (
  <Layout>
    <h1>{props.person.name}</h1>
    <table>
      <tr>
        <th>Gender:</th>
        <td>{props.person.gender}</td>
      </tr>
      <tr>
        <th>Height:</th>
        <td>{props.person.height}</td>
      </tr>
      <tr>
        <th>Hair Color:</th>
        <td>{props.person.hair_color}</td>
      </tr>
      <tr>
        <th>Skin Color:</th>
        <td>{props.person.skin_color}</td>
      </tr>
      <tr>
        <th>Eye Color:</th>
        <td>{props.person.eye_color}</td>
      </tr>
    </table>

    <style jsx>{`
      h1 {
        font-family: 'News Gothic';
        text-transform: uppercase;
        text-decoration: underline overline;
        padding: 5px;
      }
      table {
        margin-left: auto;
        margin-right: auto;
      }
      th {
        padding: 10px;
        padding-right: 50px;
        text-transform: uppercase;
        font-weight: 100;
      }
    `}</style>
  </Layout>
)

//Fetch data from SWAPI API - use character ID passed from index.js
Post.getInitialProps = async function (context) {
  const { id } = context.query //get character 'id' (character name)
  const res = await fetch(`https://swapi.dev/api/people/?search=${id}`) //fetch specific character info
  const data = await res.json() //parse JSON data
  const person = data.results[0] //narrow down data field to first 'results' field 

  console.log(`Fetched character: ${person.name}`)

  return { person } //return fetched data so it can be displayed on this page
}

export default Post