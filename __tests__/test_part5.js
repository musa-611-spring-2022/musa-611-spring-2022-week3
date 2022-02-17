/* global describe, beforeAll, it, page, expect */

beforeAll(async () => {
  await page.goto('http://localhost:8000/exercise/part5-mapping-schools/');
});

describe('The publicHighSchools array', () => {
  it('should contain 78 items', async () => {
    const result = await page.evaluate(() => publicHighSchools.length);
    expect(result).toEqual(78);
  });
});

describe('The map', () => {
  it('should contain 78 markers', async () => {
    const result = await page.evaluate(() =>
      Object.values(map._layers)
        .filter(l => l instanceof L.Marker)
        .length);
    expect(result).toEqual(78);
  });
});
