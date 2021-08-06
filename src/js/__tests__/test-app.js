import sortByHealth from '../app';

test('charaters sort by health (with .toBe())', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = sortByHealth(input);

  expect(received).not.toBe(expected);
  /* .toBe() используется для сравнения примитивных значений или проверки
  референциальной идентичности экземпляров объекта. Он вызывает Object.is
  для сравнения значений. Не работает для сравнения объектов. */
});

test('charaters sort by health (with .toEqual())', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = sortByHealth(input);

  expect(received).toEqual(expected);
  /* .toEqual используется для рекурсивного сравнения всех свойств экземпляров объектов
  (также известное как "глубокое" равенство). Также, как и .toBe() вызывает Object.is
  для сравнения примитивных значений */
});