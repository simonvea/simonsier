const fs = require('fs');
const CleanCSS = require('clean-css');
const moment = require('moment');
const { minify } = require('terser');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItModifyToken = require('markdown-it-modify-token');
const markdownItTOC = require('markdown-it-table-of-contents');
const markdownItAnchor = require('markdown-it-anchor');
const htmlmin = require('html-minifier');
const pluginRss = require('@11ty/eleventy-plugin-rss');
// const pluginPWA = require("eleventy-plugin-pwa"); currently not needed

moment.locale('nb');

module.exports = function (eleventyConfig) {
  // add plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  // eleventyConfig.addPlugin(pluginPWA);

  // add passThroughs
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml');

  // add filters
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter('dateIso', (date) => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', (date) => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });

  eleventyConfig.addNunjucksAsyncFilter(
    'jsmin',
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error('Terser error: ', err);
        // Fail gracefully.
        callback(null, code);
      }
    }
  );

  const markdownLibrary = markdownIt({
    modifyToken: function (token, env) {
      // see API https://markdown-it.github.io/markdown-it/#Token
      // token will also have an attrObj property added for convenience
      // which allows easy get and set of attribute values.
      // It is prepopulated with the current attr values.
      // Values returned in token.attrObj will override existing attr values.
      // env will contain any properties passed to markdown-it's render
      // Token can be modified in place, no return is necessary
      switch (token.type) {
        case 'link_open':
          token.attrObj.target = '_blank'; // set all links to open in new window
          token.attrObj.rel = 'noopener';
          break;
      }
    },
  });
  markdownLibrary.use(markdownItAnchor);
  markdownLibrary.use(markdownItTOC);
  markdownLibrary.use(markdownItModifyToken);

  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        const content_404 = fs.readFileSync('_site/404.html');

        bs.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  //set build settings
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: '_site',
    },
    templateFormats: ['html', 'njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};

function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
    { start: '<p>', end: '</p>' },
  ];

  separatorsList.some((separators) => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.lastIndexOf(separators.end);

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content
        .substring(startPosition + separators.start.length, endPosition)
        .trim();
      return true; // Exit out of array loop on first match
    }
  });

  return excerpt;
}
