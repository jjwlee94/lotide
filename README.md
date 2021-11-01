# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jjwlee94/lotide`

**Require it:**

`const _ = require('@jjwlee94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: implement a custom assert function which will also log a message to console
* assertEqual: implement a custom assert function which will also log a message to console
* assertObjectsEqual: implement a custom assert function which will also log a message to console
* countLetters: take in a collection of words and return counts for specific letter(s) of those words
* countOnly: take in a collection of items and return counts for a specific subset of those items
* eqArrays: implement a function that can compare two arrays for a perfect match
* eqObjects: implement a function that can compare two objects for a perfect match
* findKey: help search for a key on an object and return the first key for which the callback returns a truthy value
* findKeyByValue: help search for a key on an object where its value matches a given value
* flatten: flatten an array into a single-level array
* head: retrieve the first element from the array
* letterPositions: return all the indices (zero-based positions) in the string where each character is found
* map:
* middle: retrieve the middle element from the array
* tail: retrieve all but the first element from the array
* takeUntil: return a "slice of the array with elements taken from the beginning"
* without: filter data by removing some unwanted items