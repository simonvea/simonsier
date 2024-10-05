import CMS from 'decap-cms-app';
import React from 'react';
// Initialize the CMS object
CMS.init();

const PostPreview = ({ entry, widgetFor }) => {
  return (
    <article className="article">
      <h1 className="article__title">{entry.getIn(['data', 'title'])}</h1>
      <p className="article__lead">{entry.getIn(['data', 'description'])}</p>
      <section>{widgetFor('body')}</section>
    </article>
  );
};

CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerPreviewStyle('/styles/cms-preview.css');
