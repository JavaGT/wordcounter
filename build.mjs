const MODEL_PATH = './ggml-model-q4_0.bin';

import fsp from 'fs/promises';
import { LLamaClient } from "llama-node";
import words from './words.json' assert { type: 'json' };


const llama = new LLamaClient({ path: MODEL_PATH }, false);
let all_words = Object.values(words).flat()

await fsp.mkdir('embeddings', { recursive: true });

let buffer = Buffer.alloc(4096 * Float32Array.BYTES_PER_ELEMENT);
let view = new Float32Array(buffer.buffer);
for (let i = 0; i < all_words.length; i++) {
    const embedding = await llama.getEmbedding({ prompt: all_words[i], feedPrompt: true })
    view.set(embedding);
    await fsp.writeFile(`embeddings/${all_words[i]}.bin`, buffer);
}
