import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import PageWrapper from '../components/page-wrapper';
import Layout from '../components/layout';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react';

export type Text =
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | Iterable<ReactNode>
  | ReactPortal
  | null
  | undefined;

const Postavy = () => {
  const data = useStaticQuery(graphql`
        query Postavy {
          allContentfulPostavy {
            nodes {
              jmnoPostavy
              obsazeno
              popisPostavy {
                raw
                }
              rmeekPostavy {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      `);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: Text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: Text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: Text) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: Text) => <p>{children}</p>,
    },
  };

  return (
    <Layout>
      <PageWrapper>
        <div className='grid grid-cols-4'>
          {data.allContentfulPostavy.nodes.map(
            (
              postava: {
                rmeekPostavy: any;
                popisPostavy: any;
                jmnoPostavy: string;
                obsazeno: boolean;
              },
              index: number,
            ) => {
              const image = getImage(postava.rmeekPostavy);
              const description = postava.popisPostavy
                ? documentToReactComponents(
                    JSON.parse(postava.popisPostavy.raw),
                    options,
                  )
                : null;
              return (
                <div key={index}>
                  {image && (
                    <GatsbyImage image={image} alt={postava.jmnoPostavy} />
                  )}
                  <div>{description}</div>
                  <p>Obsazeno: {postava.obsazeno ? 'ano' : 'ne'}</p>
                </div>
              );
            },
          )}
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default Postavy;
