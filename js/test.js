const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();
console.log(ascendingReleaseDates);

const alphabeticalAuthors = [...authors].sort((a, b) => b - a);
console.log(alphabeticalAuthors);
