// Generated by IcedCoffeeScript 1.2.0p
var serialSearch;

serialSearch = function(keywords, cb) {
  var cb_generator, i, launch, result;
  result = [];
  i = 0;
  launch = function() {
    var j;
    if (i < keywords.length) {
      j = i++;
      return search(keywords[j], cb_generator(j));
    } else {
      return cb(results);
    }
  };
  cb_generator = function(i) {
    return function(json) {
      results[i] = json;
      return launch();
    };
  };
  return launch();
};
