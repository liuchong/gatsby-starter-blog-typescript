import * as React from 'react'
import Link from 'gatsby-link'

export default function index({ data }: any) {
  return (
    <div>
      <div>
        <h1>Welcome to {data.site.siteMetadata.siteName} !</h1>

        <div>
          <p>
            This is a gatsby starter, hosted on github:{' '}
            <a href="https://github.com/liuchong/gatsby-starter-blog-typescript/">
              liuchong/gatsby-starter-blog-typescript
            </a>.
          </p>
          <blockquote>
            <p>
              Gatsby is a blazing-fast static site generator for React.
            </p>
          </blockquote>
        </div>

      </div>
      <div>
        <Link to="/posts/">Read</Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
