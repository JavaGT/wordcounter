# WordCounter
This is a simple class for counting words and calcuating frequencies.
Initialise a new counter using `new` keyword.

```js
import WordCounter from '@javagt/wordcounter'
const counter = new WordCounter()
const other_counter = new WordCounter()

counter.add(['one', 'two', 'three'])

counter.add('two')

other_counter.add('three', 3)

counter.add(other_counter)

console.log(counter.counts)
// { one: 1, two: 2, three: 3 }

console.log(other_counter.counts)
// { three: 2 }
```

## API

### new WordCounter()

#### .add(input, count)
Type: `function`

##### input
Type: `string[], string, WordCounter`

##### count
Type: int
Default: 1

How many of each input provided to add to the word count.
```js
console.log(wordcounter.counts)
// {hello: 1}

wordcounter.add(['hello', 'world'], 2)

console.log(wordcounter.counts)
// {hello: 3, world: 2}
```

#### .reset()
Resets the counter as if it were brand new.

#### .uniqueWords
Type: string[]

List of all the unique words that have been added to the counter.

#### .uniqueTotal
Type: int

convenience method for .uniqueWords.length

#### .counts
Type: object

the inner data object, contains strings (words) as keys and ints (counts) as values.

#### .total
Type: int

The total number of words that have been added to the counter, including repeats.

#### .proportions
Type: object

Like .counts, is an object with strings (words) as keys, but values are between 0 and 1, representing the proportion of all words in the counter that match a single word.