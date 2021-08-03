export default function showHealthLevel(healthLevel) {
  if (healthLevel.health > 50) {
    return 'healthy';
  }
  if (healthLevel.health <= 50 && healthLevel.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}