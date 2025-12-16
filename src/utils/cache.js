const cache = new Map();

// ttl dalam milidetik (5 menit)
const DEFAULT_TTL = 5 * 60 * 1000;

function setCache(key, data, ttl = DEFAULT_TTL) {
  const expiredAt = Date.now() + ttl;
  cache.set(key, { data, expiredAt });
}

function getCache(key) {
  const cached = cache.get(key);

  if (!cached) return null;

  if (Date.now() > cached.expiredAt) {
    cache.delete(key);
    return null;
  }

  return cached.data;
}

module.exports = {
  setCache,
  getCache,
};
