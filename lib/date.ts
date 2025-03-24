export const formatDate = (date: string, format: 'short' | 'full' = 'short'): string => {
  const options: Intl.DateTimeFormatOptions = format === 'full' 
    ? {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    : {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
  return new Date(date).toLocaleDateString('en-US', options);
}; 