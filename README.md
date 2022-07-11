# A set of custom JavaScript prototypes that you will learn to love.

This library is adding custom prototype methods to your JavaScript that are easier to use and to understand. You don't need to import helpers everywhere you want to use them - The methods are directly available on the Object/Array.

[![Node.js CI](https://github.com/ChrizzDF/prototype-fns/actions/workflows/node.js.yml/badge.svg)](https://github.com/ChrizzDF/prototype-fns/actions/workflows/node.js.yml)

# Table of Contents
- [A set of custom JavaScript prototypes that you will learn to love.](#a-set-of-custom-javascript-prototypes-that-you-will-learn-to-love)
- [Table of Contents](#table-of-contents)
  - [Examples](#examples)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Array](#array)
    - [allAfter(item)](#allafteritem)
    - [allBefore(item)](#allbeforeitem)
    - [filterBy(key, value)](#filterbykey-value)
    - [findBy(key, value)](#findbykey-value)
    - [first()](#first)
    - [isAny(key, value)](#isanykey-value)
    - [isEvery(key, value)](#iseverykey-value)
    - [last()](#last)
    - [mapBy(key)](#mapbykey)
    - [mapProps(prop, ...)](#mappropsprop-)
    - [mapPropsWithout(prop, ...)](#mappropswithoutprop-)
    - [oneAfter(item)](#oneafteritem)
    - [oneBefore(item)](#onebeforeitem)
    - [order(direction?)](#orderdirection)
    - [orderBy(key, direction?)](#orderbykey-direction)
    - [sumBy(key)](#sumbykey)
    - [without(item)](#withoutitem)
  - [Object](#object)
    - [isEmpty()](#isempty)

## Examples
```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

// Find
people.find(person => person.name === 'Chris'); // Before
people.findBy('name', 'Chris'); // After

// Map
people.map(person => person.name); // Before
people.mapBy('name'); // After

// Sort
people.sort((a, b) => a.prop - b.prop); // Before
people.orderBy('name'); // After

// Last
people[people.length - 1]; // Before
people.last(); // After
```

## Installation

```console
npm install prototype-fns
```

## Usage

Make the custom prototypes available by importing them:
```js
import 'prototype-fns';
```

You can also import a specific subset of functions, for example if you only need array related ones:
```js
import 'prototype-fns/prototypes/array';
```

Or even single ones with:
```js
import 'prototype-fns/prototypes/array/filter-by';
```

## Array

### allAfter(item)

```js
const people = ['Chris', 'Giuliano', 'Vu'];

people.allAfter('Chris');
// ['Giuliano', 'Vu']

people.allAfter('Vu');
// []
```

### allBefore(item)

```js
const people = ['Chris', 'Giuliano', 'Vu'];

people.allBefore('Vu');
// ['Chris', 'Giuliano']

people.allBefore('Chris');
// []
```

### filterBy(key, value)

```js
const people = [
    { name: 'Chris', isAdmin: true },
    { name: 'Giuliano', isAdmin: false },
    { name: 'Vu', isAdmin: false }
];

people.filterBy('name', 'Chris');
// [
//   { name: 'Chris', isAdmin: true }
// ]

people.filterBy('isAdmin', false);
// [
//   { name: 'Giuliano', isAdmin: false },
//   { name: 'Vu', isAdmin: false },
// ]

people.filterBy('name', 'Tom');
// []
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
    { name: 'Vu', isAdmin: true }
];

people.isAny('name', 'Giuliano');
// true

people.isAny('isAdmin', false);
// false
```

### isEvery(key, value)

```js
const people = [
    { name: 'Chris', isAdmin: true },
    { name: 'Giuliano', isAdmin: true },
    { name: 'Vu', isAdmin: true }
];

people.isEvery('name', 'Vu');
// false

people.isEvery('isAdmin', true);
// true
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

### mapBy(key)

```js
const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

people.mapBy('name');
// ['Chris', 'Giuliano', 'Vu']
```

### mapProps(prop, ...)

```js
const people = [
    { id: 1, name: 'Chris', token: 'abc' },
    { id: 2, name: 'Giuliano', token: 'def' },
    { id: 3, name: 'Vu', token: 'ghi' },
];

people.mapProps('id', 'name');
// [
//   { id: 1, name: 'Chris' },
//   { id: 2, name: 'Giuliano' },
//   { id: 3, name: 'Vu' }
// ]
```

### mapPropsWithout(prop, ...)

```js
const people = [
    { id: 1, name: 'Chris', token: 'abc' },
    { id: 2, name: 'Giuliano', token: 'def' },
    { id: 3, name: 'Vu', token: 'ghi' },
];

people.mapPropsWithout('token');
// [
//   { id: 1, name: 'Chris' },
//   { id: 2, name: 'Giuliano' },
//   { id: 3, name: 'Vu' }
// ]
```

### oneAfter(item)

```js
const people = ['Chris', 'Giuliano', 'Vu'];

people.oneAfter('Chris');
// 'Giuliano'

people.oneAfter('Vu');
// undefined
```

### oneBefore(item)

```js
const people = ['Chris', 'Giuliano', 'Vu'];

people.oneBefore('Vu');
// 'Giuliano'

people.oneBefore('Chris');
// undefined
```

### order(direction?)

Use `order()` on flat arrays.

```js
const people = ['Chris', 'Vu', 'Giuliano'];

people.order();
// ['Chris', 'Giuliano', 'Vu']

people.order('desc');
// ['Vu', 'Chris', 'Giuliano']
```

### orderBy(key, direction?)

```js
const people = [
    { name: 'Chris' },
    { name: 'Vu' },
    { name: 'Giuliano' }
];

people.orderBy('name', 'asc');
// [
//   { name: 'Chris' },
//   { name: 'Giuliano' },
//   { name: 'Vu' }
// ]
```

ℹ️ If you omit the direction, the result will be ordered ascending by default.

```js
people.orderBy('name');
// [
//   { name: 'Chris' },
//   { name: 'Giuliano' },
//   { name: 'Vu' }
// ]

people.orderBy('name', 'desc');
// [
//   { name: 'Vu' },
//   { name: 'Giuliano' },
//   { name: 'Chris' }
// ]
```

### sumBy(key)

```js
const people = [
    { name: 'Chris', score: 1 },
    { name: 'Giuliano', score: 2 },
    { name: 'Vu', score: 3 },
];

people.sumBy('score');
// 6
```

### without(item)

```js
const people = ['Chris', 'Giuliano', 'Vu'];

people.without('Giuliano');
// ['Chris', 'Vu']
```

## Object

### isEmpty()

```js
{ name: 'Chris' }.isEmpty();
// false

{}.isEmpty();
// true
```