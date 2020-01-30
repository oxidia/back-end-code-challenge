module.exports = error => {
  const errors = [];
  const needlePattern = /"[^"]*" /;

  error.details.forEach(item => {
    if (!errors.find(error => error.field === item.context.key)) {
      errors.push({
        field: item.context.key,
        message: item.message.replace(needlePattern, '')
      });
    }
  });

  return {
    message: 'Validation failed',
    errors,
    documentation_url: '/'
  };
};
