import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
  siteUrl: string
  image: string
  icon: string
}

interface SiteQueryResults {
  site: {
    siteMetadata: SiteMetadata
  }
}

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<SiteQueryResults>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          icon
        }
      }
    }
  `)

  return data.site.siteMetadata
}
