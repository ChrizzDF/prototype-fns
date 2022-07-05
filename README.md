# Table of Contents
- [Table of Contents](#table-of-contents)
  - [Object](#object)
    - [isEmpty()](#isempty)
  - [Array](#array)
    - [filterBy(key, value)](#filterbykey-value)
    - [findBy(key, value)](#findbykey-value)
    - [first()](#first)
    - [last()](#last)
    - [mapBy(key, value)](#mapbykey-value)

## Object

### isEmpty()

```js
{ name: 'Chris' }.isEmpty();
// false

{}.isEmpty();
// true
```

## Array

### filterBy(key, value)

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

### findBy(key, value)

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

### first()

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

### last()

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

### mapBy(key, value)

```js
const people = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Giuliano' },
    { id: 3, name: 'Vu' }
];

people.mapBy('name');
// ['Chris', 'Giuliano', 'Vu']
```