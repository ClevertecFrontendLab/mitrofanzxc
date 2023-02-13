export const handleAuthors = (value: string[]) => {
  if (value.length <= 1) {
    return value.join('');
  }

  return value.join(', ');
};
