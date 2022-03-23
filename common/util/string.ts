export const splitCamelCaseToString = (str: string) => {
  const split = str.match(/^[a-z]+|[A-Z][a-z]*/g);

  return (split || [])
    .map((c) => {
      return c[0].toUpperCase() + c.substr(1).toLowerCase();
    })
    .join(" ");
};
