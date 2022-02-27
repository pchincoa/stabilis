module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addNunjucksFilter("date",require("./src/filters/nunjunks-day-filter")
  );

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
