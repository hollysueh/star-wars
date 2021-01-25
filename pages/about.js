import Layout from '../components/MyLayout.js'

//Content for About Page
export default () => (
    <Layout>
        <h1>About</h1>
        <p>This app gives you detailed descriptions for 10 Star Wars characters.</p>

        <style jsx>{`
        h1 {
          font-family: 'News Gothic';
          text-transform: uppercase;
          text-decoration: underline overline;
          padding: 5px;
        }
      `}</style>
    </Layout>
)
