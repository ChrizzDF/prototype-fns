# Table of Contents
- [Table of Contents](#table-of-contents)
  - [filterBy](#filterby)
  - [findBy](#findby)
  - [first](#first)
  - [last](#last)
  - [mapBy](#mapby)

## filterBy

```js
const people = [
    { name: 'Chris', isAdmin: true },
    { name: 'Giuliano', isAdmin: false },
    { name: 'Vu', isAdmin: false }
];

people.filterBy('name', 'Chris');
// ['Chris']

people.filterBy('isAdmin', false);
// [
//   { name: 'Giuliano', isAdmin: false },
//   { name: 'Vu', isAdmin: false },
// ]

people.filterBy('name', 'Tom');
// undefined
```

## findBy

```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

people.findBy('name', 'Giuliano');
// { name: 'Giuliano' }

people.findBy('name', 'Tom');
// undefined
```

## first

```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

people.first();
// { name: 'Chris' }

[].first();
// undefined
```

## last

```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

people.last();
// { name: 'Vu' }

[].last();
// undefined
```

## mapBy

```js
const people = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Giuliano' },
    { id: 3, name: 'Vu' }
];

people.mapBy('name');
// ['Chris', 'Giuliano', 'Vu']
```