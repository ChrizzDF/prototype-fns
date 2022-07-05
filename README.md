# A set of custom prototypes that you don't want to miss anymore.

This library is adding custom prototype methods that are easier to use and to understand. You don't need to import helpers everywhere you want to use them - The methods are directly available on the Object/Array.

## Example
```js
const people = [
    { name: 'Chris', isAdmin: false },
    { name: 'Giuliano', isAdmin: true },
    { name: 'Vu', isAdmin: true }
];

// Getting all the admins (built-in filter)
people.filter(person => person.isAdmin);

// Getting all the admins (findBy)
people.findBy('isAdmin', true);
```

# Table of Contents
- [A set of custom prototypes that you don't want to miss anymore.](#a-set-of-custom-prototypes-that-you-dont-want-to-miss-anymore)
  - [Example](#example)
- [Table of Contents](#table-of-contents)
  - [Object](#object)
    - [isEmpty()](#isempty)
  - [Array](#array)
    - [filterBy(key, value)](#filterbykey-value)
    - [findBy(key, value)](#findbykey-value)
    - [first()](#first)
    - [isAny(key, value)](#isanykey-value)
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

### isAny(key, value)

```js
const people = [
    { name: 'Chris', isAdmin: true },
    { name: 'Giuliano', isAdmin: true },
    { name: 'Vu', isAdmin: true },
];

people.isAny('name', 'Giuliano');
// true

people.isAny('isAdmin', false);
// false
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