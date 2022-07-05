# Table of Contents
- [Table of Contents](#table-of-contents)
  - [filterBy](#filterby)
  - [findBy](#findby)
  - [last](#last)
  - [mapBy](#mapby)

## filterBy

```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

people.filterBy('name', 'Chris');
// => ['Chris']

people.filterBy('name', 'Tom');
// => undefined
```

## findBy

```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

people.findBy('name', 'Giuliano');
// => { name: 'Giuliano' }

people.findBy('name', 'Tom');
// => undefined
```

## last

```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

people.last();
// => { name: 'Vu' }

[].last();
// => undefined
```

## mapBy

```js
const people = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Giuliano' },
    { id: 3, name: 'Vu' }
];

people.mapBy('name');
// => ['Chris', 'Giuliano', 'Vu']
```