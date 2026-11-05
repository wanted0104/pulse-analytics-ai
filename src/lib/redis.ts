import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
export const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: 3,
  enableReadyCheck: false
});

export async function recordTelemetryEvent(sessionId: string, event: Record<string, any>) {
  const key = `pulse:telemetry:${sessionId}`;
  await redis.rpush(key, JSON.stringify({ ...event, timestamp: Date.now() }));
  await redis.expire(key, 86400 * 7);
}
