const DEFAULT_PHRASE = 'Hello';
const DEFAULT_NAME = 'World';

exports.greet = async (event, context, callback) => {
  let phrase = event.phrase || DEFAULT_PHRASE;
  let name = event.name || DEFAULT_NAME;
  let greeting = phrase + ' ' + name + '!';
  callback(null, {greeting});
};
