// eslint-disable-next-line no-undef
module.exports = {
  variables: true,
  defaultExtractor: (content) => content.match(/[\w\-/:]+/g) || [],
  safelist: [/^col-/],
};
