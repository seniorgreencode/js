function somar(a: number, b: number): number {
  return a + b;
}

test("soma dois números positivos", () => {
  expect(somar(2, 3)).toBe(5); // ✅ teste válido
});