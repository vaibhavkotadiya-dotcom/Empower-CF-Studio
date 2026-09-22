type Bucket = { day: string; count: number };

const buckets = new Map<string, Bucket>();

function utcDay(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

export function checkDailyLimit(ip: string, limit: number): {
  allowed: boolean;
  remaining: number;
  limit: number;
} {
  const day = utcDay();
  const key = `${ip}:${day}`;
  const current = buckets.get(key);
  const count = current && current.day === day ? current.count : 0;
  if (count >= limit) {
    return { allowed: false, remaining: 0, limit };
  }
  return { allowed: true, remaining: limit - count, limit };
}

export function consumeDailyLimit(ip: string, limit: number): {
  allowed: boolean;
  remaining: number;
  limit: number;
} {
  const day = utcDay();
  const key = `${ip}:${day}`;
  const current = buckets.get(key);
  const count = current && current.day === day ? current.count : 0;
  if (count >= limit) {
    return { allowed: false, remaining: 0, limit };
  }
  const next = count + 1;
  buckets.set(key, { day, count: next });
  return { allowed: true, remaining: Math.max(0, limit - next), limit };
}
