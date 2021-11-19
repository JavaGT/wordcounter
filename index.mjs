export default class WordCounter {
    #total = 0
    #counts = {}
    #proportions = {}
    constructor() {

    }
    get total() {
        return this.#total
    }
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
    get uniqueWords() {
        return Object.keys(this.#counts)
    }
    get uniqueTotal() {
        return this.uniqueWords.length
    }
    get counts() {
        return this.#counts
    }
    get total() {
        return this.#total
    }
    get proportions() {
        // cache proportions, is reset everytime .add is called
        if (Object.keys(this.#proportions).length) {
            return this.#proportions
        } else {
            return Object.fromEntries(Object.entries(this.#counts).map(([key, value]) => [key, value / this.#total]))
        }
    }
    toString() {
        return Object.entries(this.#counts).map(([key, value]) => `${key}: ${value}`).join("\n")
    }
    reset() {
        this.#total = 0
        this.#counts = {}
        this.#proportions = {}
    }
}