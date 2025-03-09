import { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import TextBlockWithTitle from './shared/text-block-with-title';
import Title, { TitleLevel } from './shared/title';
import PageWrapper from './shared/page-wrapper';

const Payments = () => {
  const data = useStaticQuery(graphql`query PaymentsQuery {
  contentfulPraktickeInformace {
    platebnInformace {
      raw
    }
    qrKd {
      gatsbyImageData(placeholder: BLURRED)
    }
    pravidlaProOdeknut {
      raw
    }
  }
}`);

  const practicalInfo = data.contentfulPraktickeInformace;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: unknown, children: any) => (
        <p className='pb-2'>
          {children.map((child: any, index: number) => {
            // Pokud je child typu text (plain string), rozděl ho podle nových řádků
            if (typeof child === 'string') {
              return child.split('\n').map((line, i, arr) => (
                <Fragment key={`${index}-${i}`}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </Fragment>
              ));
            }
            return child; // Pokud child není string, vrať ho nezměněný
          })}
        </p>
      ),
      [BLOCKS.UL_LIST]: (_: unknown, children: any) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (_: unknown, children: any) => <li>{children}</li>,
    },
    renderText: (text: string) =>
      text.split('\n').reduce((acc: any[], line, index, arr) => {
        acc.push(line);
        if (index < arr.length - 1) {
          acc.push(<br key={index} />);
        }
        return acc;
      }, []),
  };

  const qrCode = getImage(practicalInfo.qrKd);

  const Payments = practicalInfo.platebnInformace
    ? documentToReactComponents(
        JSON.parse(practicalInfo.platebnInformace.raw),
        options,
      )
    : null;

  const Rules = practicalInfo.pravidlaProOdeknut
    ? documentToReactComponents(
        JSON.parse(practicalInfo.pravidlaProOdeknut.raw),
        options,
      )
    : null;

  return (
    <div>
      <PageWrapper>
        <div className='flex flex-col gap-y-4 sm:gap-y-10'>
          <Title
            level={TitleLevel.H3}
            className='underline-offset-8 text-center mt-20 xl:mt-32 mb-2'
            id='misto-a-cas'
          >
            Platební pokyny
          </Title>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-0 md:gap-x-6 md:gap-y-0 mb-8 xl:mb-4'>
            <div className='text-xl xl:text-2xl'>{Payments}</div>
            {qrCode && (
              <GatsbyImage
                image={qrCode}
                alt='QR kód pro platbu larpu Stoletá válka'
              />
            )}
          </div>
          <div>
            <TextBlockWithTitle
              title='Pravidla pro odřeknutí'
              paragraph={Rules}
              withoutTopMargin
            />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Payments;
