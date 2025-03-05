import { JSXElementConstructor, ReactElement } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata.jsx';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

export const SEO = ({
  title,
  description,
  image,
  pathname,
  children,
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    icon,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    icon: icon,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='title' content={seo.title} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='og:title' content={seo.title} />
      <meta name='og:description' content={seo.description} />
      <meta name='og:image' content={seo.image} />
      {children}
    </>
  );
};
