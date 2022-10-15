// eslint-disable-next-line no-undef
module.exports = {
  defaultExtractor: (content) => content.match(/{\[\w:-]+/g) || [],
};
