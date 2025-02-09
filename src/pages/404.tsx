import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout';
import Title, { TitleLevel } from '../components/shared/title';
import PageWrapper from '../components/page-wrapper';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PageWrapper>
        <div className='flex flex-col items-center mt-12 mb-8 px-12'>
          <Title level={TitleLevel.H1}>Tuhle stránku nemáme připravenou</Title>
          <p className='mt-4'>
            Omlouváme se, tohle jsme nepodchytili 😔
            <Link to='/' className='ml-2 underline hover:no-underline'>
              Zkuste jít na hlavní stránku
            </Link>
            .
          </p>
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
