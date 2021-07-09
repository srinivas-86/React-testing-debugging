/* eslint-disable no-undef */
import data from '../../data/courses.json';

const numLength = data.length;

describe('Number Test', () => {
  test('NUmber of items is 12', () => {
    expect(numLength).toBe(12);
  });

  test('Number of items to be greater than or equal 12', () => {
    expect(numLength).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

describe('String Test', () => {
  test('There is a JS in this Title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The Title Contains React', () => {
    expect(dataTest).toContain('React');
  });
});

const data2 = ['React Native', 'React'];

describe('Array and object Test', () => {
  test('The list of courses contains React native and React', () => {
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
  });

  test('The first Course to have a property title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first Course to have a property title and value 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
