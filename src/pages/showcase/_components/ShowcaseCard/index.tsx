/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import {Tags, TagList, type TagType, type AwesomeAI} from '@site/src/data/awesome-ai-list';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import styles from './styles.module.css';

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  );
}

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        return <TagItem key={index} {...tagObject} />;
      })}
    </>
  );
}

function getCardImage(awesomeAI: AwesomeAI): string {
  return (
    awesomeAI.preview ??
    // TODO make it configurable
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      awesomeAI.website,
    )}/showcase`
  );
}

function ShowcaseCard({awesomeAI}: {awesomeAI: AwesomeAI}) {
  const image = getCardImage(awesomeAI);
  return (
    <li key={awesomeAI.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <Image img={image} alt={awesomeAI.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={awesomeAI.website} className={styles.showcaseCardLink}>
              {awesomeAI.title}
            </Link>
          </Heading>
          {awesomeAI.tags.includes('favorite') && (
            <FavoriteIcon size="medium" style={{marginRight: '0.25rem'}} />
          )}
          {awesomeAI.source && (
            <Link
              href={awesomeAI.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}>
              <Translate id="showcase.card.sourceLink">source</Translate>
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{awesomeAI.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={awesomeAI.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
