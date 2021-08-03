import showHealthLevel from '../app';

test('the result of determining the character`s health level', () => {
  const inputHealthy = {
    name: 'Маг',
    health: 90,
  };
  const inputWounded = {
    name: 'Маг',
    health: 45,
  };
  const inputCritical = {
    name: 'Маг',
    health: 10,
  };

  const expectedHealthy = 'healthy';
  const expectedWounded = 'wounded';
  const expectedCritical = 'critical';

  const receivedHealthy = showHealthLevel(inputHealthy);
  const receivedWounded = showHealthLevel(inputWounded);
  const receivedCritical = showHealthLevel(inputCritical);

  expect(receivedHealthy).toBe(expectedHealthy);
  expect(receivedWounded).toBe(expectedWounded);
  expect(receivedCritical).toBe(expectedCritical);
});