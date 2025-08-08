/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedAwesomeAI, type AwesomeAI} from '@site/src/data/awesome-ai-list';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import ShowcaseCard from '../ShowcaseCard';
import {useFilteredUsers} from '../../_utils';

import styles from './styles.module.css';

const favoriteUsers = sortedAwesomeAI.filter((awesomeAI) =>
  awesomeAI.tags.includes('favorite'),
);

const otherUsers = sortedAwesomeAI.filter(
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

function HeadingAllSites() {
  return (
    <Heading as="h2">
      <Translate id="showcase.usersList.allUsers">All sites</Translate>
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
  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredUsers.length === sortedAwesomeAI.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <CardList heading={<HeadingFavorites />} items={favoriteUsers} />
          </div>
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllSites />} items={otherUsers} />
          </div>
        </>
      ) : (
        <CardList items={filteredUsers} />
      )}
    </section>
  );
}
