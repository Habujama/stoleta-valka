import { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import TextBlockWithTitle from '../shared/text-block-with-title';
import Title, { TitleLevel } from '../shared/title';
import PageWrapper from '../shared/page-wrapper';
import Map from './map';

const PracticalPage = () => {
  const data = useStaticQuery(graphql`query PracticalQuery {
  contentfulPraktickeInformace {
    mstoAAs {
      raw
    }
    coJeVCen {
      raw
    }
    coSSebou {
      raw
    }
    harmonogram {
      raw
    }
    mapLink {
      mapLink
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

  const TimeAndPlace = practicalInfo.mstoAAs
    ? documentToReactComponents(JSON.parse(practicalInfo.mstoAAs.raw), options)
    : null;

  const Included = practicalInfo.coJeVCen
    ? documentToReactComponents(JSON.parse(practicalInfo.coJeVCen.raw), options)
    : null;

  const WhatToBring = practicalInfo.coJeVCen
    ? documentToReactComponents(JSON.parse(practicalInfo.coSSebou.raw), options)
    : null;

  const TimePlan = practicalInfo.coJeVCen
    ? documentToReactComponents(
        JSON.parse(practicalInfo.harmonogram.raw),
        options,
      )
    : null;

  return (
    <div id='misto-a-cas'>
      <PageWrapper>
        <Title
          level={TitleLevel.H3}
          className='underline-offset-8 text-center mt-20 xl:mt-32 mb-2'
        >
          Místo a termín Stoleté války
        </Title>
        <div className='flex flex-col items-center justify-center gap-y-4 mb-8 xl:mb-4 mt-8'>
          <div className='text-xl xl:text-2xl'>{TimeAndPlace}</div>
          <Map link={practicalInfo.mapLink.mapLink} />
        </div>
      </PageWrapper>
      <div className='bg-neutral-800 bg-blend-screen bg-opacity-15 pt-10 pb-2 px-20 my-14'>
        <TextBlockWithTitle
          title={'Co je v ceně'}
          paragraph={Included}
          id='co-je-v-cene'
          withoutTopMargin
        />
      </div>
      <PageWrapper withMenu={false}>
        <TextBlockWithTitle
          title={'Co s sebou'}
          paragraph={WhatToBring}
          id='co-s-sebou'
          withoutTopMargin
        />
      </PageWrapper>
      <div className='bg-neutral-800 bg-blend-screen bg-opacity-15 pt-10 pb-2 px-20 my-14'>
        <TextBlockWithTitle
          title={'Harmonogram'}
          paragraph={TimePlan}
          id='harmonogram'
          withoutTopMargin
        />
      </div>
    </div>
  );
};

export default PracticalPage;
