module.exports = function(source) {
  this.cacheable && this.cacheable();
  return source.replace(/ƒ/,"function");
}
