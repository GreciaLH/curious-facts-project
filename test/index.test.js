// import { expect, test } from 'vitest'
// import { sum } from '../js/index'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

import { test } from 'vitest';
import { fetchQuoteOfTheDay } from '../js/index';

import { JSDOM } from 'jsdom';

// Configurar jsdom antes de las pruebas
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="content"></div></body></html>');
global.document = dom.window.document;

test('fetchQuoteOfTheDay function returns a quote from API', async () => {
  const quote = await fetchQuoteOfTheDay();

  expect(quote).toBeDefined(); 
  expect(typeof quote).toBe('string'); 
});

