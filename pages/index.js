import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

//Display list of fetched Star Wars characters
//Assign each character's ID as character's name (which will be passed to Post.js page)
const Index = (props) => (
  <Layout>
    <h1>Star Wars Characters</h1>
    <ul>
      {props.people.map(person => (
        <li key={person.name}>
          <Link as={`/p/${person.name}`} href={`/post?id=${person.name}`}>
            <a>{person.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
        h1 {
          font-family: 'News Gothic';
          text-transform: uppercase;
          text-decoration: underline overline;
          padding: 5px;
        }
        ul {
          list-style-type: circle;
          margin-left: auto;
          margin-right: auto;
        }
        li, a {
          padding: 20px;
          padding-right: 50px;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 100;
          font-size: large;
          color: GoldenRod;
        }
      `}</style>
  </Layout>
)

//Fetch character data from SWAPI API
Index.getInitialProps = async function() {
  const res = await fetch('http://swapi.dev/api/people/?page=1') //fetch page 1 of Star Wars people (displays first 10 results)
  const data = await res.json() //parse JSON data

  console.log(`Show data fetched. Count: ${data.count}`)

  return {
    people: data.results ////return fetched data so it can be displayed on this page
  }
}

export default Index