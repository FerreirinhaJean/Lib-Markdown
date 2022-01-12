import { getFile } from "../index.js";

test('deve ser uma função', () => {
    expect(typeof getFile).toBe('function');
});