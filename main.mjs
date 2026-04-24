import fsp from 'fs/promises'
export default function getEmbedding(word) {
    word = word.toLowerCase().trim()
    return fsp.readFile(`embeddings/${word}.bin`).then(buffer => {
        let view = new Float32Array(buffer.buffer);
        return view
    })
}