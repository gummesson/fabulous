var rules = {
  keyword:   /function|return|var|if|else|while|for|throw|try|catch|finally|new|this|typeof|switch|case/g,
  primitive: /true|false|null|undefined|NaN/g,
  global:    /global|window|document/g,
  number:    /-?\d+(\.\d+)?(\d+)?/g,
  string:    /'[^']*'/g,
  comment:   /(\/\/.*)|(\/\*.*\*\/)/g
}

module.exports = rules
