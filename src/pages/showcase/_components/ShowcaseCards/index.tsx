/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedAwesomeAI} from '@site/src/data/awesome-ai-list';
import {type AwesomeAI} from '@site/src/data/types';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import ShowcaseCard from '../ShowcaseCard';
import {useFilteredProjects} from '../../_utils';

import styles from './styles.module.css';

const favoriteProjects = sortedAwesomeAI.filter((awesomeAI) =>
  awesomeAI.tags.includes('favorite'),
);

const otherProjects = sortedAwesomeAI.filter(
  (awesomeAI) => !awesomeAI.tags.includes('favorite'),
);

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate id="showcase.usersList.noResult">No result</Translate>
    </Heading>
  );
}

function HeadingFavorites() {
  return (
    <Heading as="h2" className={styles.headingFavorites}>
      <Translate id="showcase.favoritesList.title">Our favorites</Translate>
      <FavoriteIcon size="large" style={{marginLeft: '1rem'}} />
    </Heading>
  );
}

function HeadingAllProjects() {
  return (
    <Heading as="h2">
      <Translate id="showcase.usersList.allProjects">All projects</Translate>
    </Heading>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: AwesomeAI[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} awesomeAI={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

export default function ShowcaseCards() {
  const filteredProjects = useFilteredProjects();

  if (filteredProjects.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredProjects.length === sortedAwesomeAI.length ? (
        <>
          {/* <div className={styles.showcaseFavorite}>
            <CardList heading={<HeadingFavorites />} items={favoriteProjects} />
          </div> */}
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllProjects />} items={otherProjects} />
          </div>
        </>
      ) : (
        <CardList items={filteredProjects} />
      )}
    </section>
  );
}
