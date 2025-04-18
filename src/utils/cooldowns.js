const cooldowns = new Map();

function isOnCooldown(userId, commandName, cooldownTime) {
  const key = `${userId}-${commandName}`;
  const now = Date.now();

  if (cooldowns.has(key)) {
    const expires = cooldowns.get(key);
    if (now < expires) {
      return (expires - now) / 1000; // seconds left
    }
  }

  cooldowns.set(key, now + cooldownTime);
  return 0;
}

module.exports = isOnCooldown;
