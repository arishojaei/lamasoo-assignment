const makeObject = require('../makeObject');

const data = [
  'thisisfirsttest',
  'anotherlongcase',
  '8761o8372@test#',
  '--:)example3233'
];

test('test_result', () => {
  const result = makeObject().provideData(data);
  expect(result).toEqual([
      'efhiiirsssstttt',
      'aaceeghlnnoorst',
      '#12367788@eostt',
      ')--2333:aeelmpx'
  ]);
});

test('test_result_to_capital', () => {
  const result = makeObject().vowelsToCapital().provideData(data);
  expect(result).toEqual([
    'EfhIIIrsssstttt',
    'AAcEEghlnnOOrst',
    '#12367788@EOstt',
    ')--2333:AEElmpx'
  ]);
});

test('test_result_to_objcet', () => {
  const result = makeObject().toObject().provideData(data);
  expect(result).toEqual({
    0: 'efhiiirsssstttt',
    1: 'aaceeghlnnoorst',
    2: '#12367788@eostt',
    3: ')--2333:aeelmpx',
  });
});

test('test_result_capital_to_object', () => {
  const result1 = makeObject().vowelsToCapital().toObject().provideData(data);
  const result2 = makeObject().toObject().vowelsToCapital().provideData(data);

  expect(result1).toStrictEqual(result2);
  expect(result1).toEqual({
    0: 'EfhIIIrsssstttt',
    1: 'AAcEEghlnnOOrst',
    2: '#12367788@EOstt',
    3: ')--2333:AEElmpx',
  });
});
