const markdownIt = require("markdown-it");
const mila = require("markdown-it-link-attributes");

module.exports = (eleventyConfig) => {
  const mdOptions = {
    html: true
  };
  const milaOptions = {
    attrs: {
      target: "_blank",
      rel: "noopener"
    }
  };
  const markdownLib = markdownIt(mdOptions).use(mila, milaOptions);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: "pages",
      output: "docs",
    },
  };
};
