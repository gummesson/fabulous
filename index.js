var loop = require('looping')

function wrap(name, match) {
  return [
    '<span class="', name, '">',
    match,
    '</span>'
  ].join('')
}

function highlight(line, rules) {
  loop(rules, function(name, rule) {
    var matches = line.match(rule)
    if (matches) {
      loop(matches, function(_, match) {
        var span = wrap(name, match)
        if (line.indexOf(span) > -1) return
        line = line.replace(match, span)
      })
    }
  })
  return line
}

function fabulous(str, rules) {
  if (!rules) rules = require('./lib/rules/javascript')
  var lines   = str.split(/\r?\n/)
  var results = []
  loop(lines, function(_, line) {
    var result = highlight(line, rules)
    results.push(result)
  })
  return results.join('\n')
}

module.exports = fabulous
