const fs = require("fs");
const CleanCSS = require("clean-css");
const moment = require('moment');
const Terser = require("terser");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const pluginPWA = require("eleventy-plugin-pwa"); currently not needed


moment.locale('nb');

module.exports = function (eleventyConfig) {

  // add plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addPlugin(pluginPWA);

  // add passThroughs
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/images');

  // add filters
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });

  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log("Terser error: ", minified.error);
      return code;
    }

    return minified.code;
  });

  eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article));

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        const content_404 = fs.readFileSync('_site/404.html');

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  //set build settings
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};

function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn('Failed to extract excerpt: Document has no property "templateContent".');
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
    { start: '<p>', end: '</p>' }
  ];

  separatorsList.some(separators => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.lastIndexOf(separators.end);

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
      return true; // Exit out of array loop on first match
    }
  });

  return excerpt;
}


