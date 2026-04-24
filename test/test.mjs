import WordCounter from "../index.mjs";
import assert from "assert";

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });


describe("WordCounter", function () {
  const wc1 = new WordCounter()
  const wc2 = new WordCounter()
  const wc3 = new WordCounter()
  const wc4 = new WordCounter()
  const wc5 = new WordCounter()
  const wc6 = new WordCounter()
  const wc7 = new WordCounter()
  const wc8 = new WordCounter()
  describe("#add()", function () {
    it("should add a word to the word counter", function () {
      wc1.add("hello")
      assert.equal(wc1.counts["hello"], 1)
    })
    it("should add an array of words to the word counter", function () {
      wc2.add(["array", "of", "words"])
      assert.equal(wc2.counts["array"], 1)
      assert.equal(wc2.counts["of"], 1)
      assert.equal(wc2.counts["words"], 1)
    })
    it("should add a word counter to the word counter", function () {
      wc1.add(wc2)
      assert.equal(wc1.counts["hello"], 1)
      assert.equal(wc1.counts["array"], 1)
      assert.equal(wc1.counts["of"], 1)
      assert.equal(wc1.counts["words"], 1)
    })
  })
  describe("#total", function () {
    it("should return the total number of words", function () {
      wc3.add("hello")
      wc3.add("hello")
      wc3.add("hello")
      assert.equal(wc3.total, 3)
    })
  })
  describe("#counts", function () {
    it("should return the counts of each word", function () {
      wc4.add("hello")
      wc4.add("hello")
      wc4.add("hello")
      assert.equal(wc4.counts["hello"], 3)
    })
  }
  )
  describe("#proportions", function () {
    it("should return the proportion of each word", function () {
      wc5.add("hello")
      wc5.add("not-hello")
      wc5.add("not-hello")
      assert.equal(wc5.proportions["hello"], 1 / 3)
    })
  })
  describe("#toString()", function () {
    it("should return a string of the word counts", function () {
      wc6.add("hello")
      wc6.add("not-hello")
      wc6.add("not-hello")
      assert.equal(wc6.toString(), "hello: 1\nnot-hello: 2")
    })
  })
})

