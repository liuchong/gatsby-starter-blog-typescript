import * as React from 'react'
import Link from 'gatsby-link'

export default function Index({
  data
}: any) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      {posts
        .filter((post: any) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }: any) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
