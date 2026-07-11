/**
 * @typedef {Object} WordCountEntry
 * @property {number} [count] - Optional count parameter
 */

export default class WordCounter {
    /** @type {number} */
    #total = 0
    /** @type {Record<string, number>} */
    #counts = {}
    /** @type {Record<string, number>} */
    #proportions = {}
    constructor() {

    }
    /**
     * Get the total number of words counted.
     * @returns {number}
     */
    get total() {
        return this.#total
    }
    /**
     * Add a word, array of words, or another WordCounter to this counter.
     * @param {string | string[] | WordCounter} input
     * @param {number} [count=1]
     */
    add(input, count = 1) {
        this.#proportions = {}
        if (input instanceof WordCounter) {
            Object.entries(input.counts).forEach(([word, count]) => {
                if (this.#counts[word]) this.#counts[word] += count
                else this.#counts[word] = count
                this.#total += count
            })
        } else {
            if (!Array.isArray(input)) input = [input]
            input.forEach(entry => {
                if (this.#counts[entry]) this.#counts[entry] += count
                else this.#counts[entry] = count
                this.#total += count
            })
        }
    }
    /**
     * Get the list of unique words.
     * @returns {string[]}
     */
    get uniqueWords() {
        return Object.keys(this.#counts)
    }
    /**
     * Get the count of unique words.
     * @returns {number}
     */
    get uniqueTotal() {
        return this.uniqueWords.length
    }
    /**
     * Get the raw word counts.
     * @returns {Record<string, number>}
     */
    get counts() {
        return this.#counts
    }
    /**
     * Get the total number of words counted.
     * @returns {number}
     */
    get total() {
        return this.#total
    }
    /**
     * Get the proportion of each word relative to the total.
     * @returns {Record<string, number>}
     */
    get proportions() {
        // cache proportions, is reset everytime .add is called
        if (Object.keys(this.#proportions).length) {
            return this.#proportions
        } else {
            return Object.fromEntries(Object.entries(this.#counts).map(([key, value]) => [key, value / this.#total]))
        }
    }
    /**
     * Return a string representation of word counts.
     * @returns {string}
     */
    toString() {
        return Object.entries(this.#counts).map(([key, value]) => `${key}: ${value}`).join("\n")
    }
    /**
     * Reset all counts to zero.
     */
    reset() {
        this.#total = 0
        this.#counts = {}
        this.#proportions = {}
    }
}
