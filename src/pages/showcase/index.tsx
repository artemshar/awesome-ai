/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import ShowcaseSearchBar from '@site/src/pages/showcase/_components/ShowcaseSearchBar';
import ShowcaseCards from './_components/ShowcaseCards';
import ShowcaseFilters from './_components/ShowcaseFilters';

import styles from './index.module.css';
import clsx from 'clsx';

const TITLE = translate({message: 'Awesome AI showcase'});
const DESCRIPTION = translate({
  message: 'Curated list of AI tools, platforms, and resources for developers, creators, and businesses',
});
const SUBMIT_URL = 'https://github.com/artemshar/awesome-ai';

function ShowcaseHeader() {
  return (
    <section className={clsx("margin-top--lg margin-bottom--lg text--center ", styles.showcaseHeader)}>
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
        <Translate id="showcase.header.button">
          Add your product
        </Translate>
      </Link>
    </section>
  );
}

export const Showcase = () => {
  return (
    <>
      <ShowcaseHeader />
      <div
        style={{display: 'flex', justifyContent: 'center'}}
        className="container">
        <ShowcaseSearchBar />
      </div>
      <ShowcaseFilters />
      <ShowcaseCards />
    </>
  )
}
export default function ShowcasePage(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <Showcase />
      </main>
    </Layout>
  );
}
