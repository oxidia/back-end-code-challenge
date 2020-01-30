module.exports = error => {
  const errors = [];
  const needlePattern = /"[^"]*" /;

  console.log(error);
  error.details.forEach(item => {
    errors.push({
      field: item.context.key,
      message: item.message.replace(needlePattern, '')
    });
  });

  return {
    message: 'Validation failed',
    errors,
    documentation_url: 'https://domain_name.io/api/v1'
  };
};
