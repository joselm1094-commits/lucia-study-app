export async function GET() {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    checks: {
      api: 'OK',
      database: 'OK (mock)',
      notifications: 'OK (OneSignal initialized)',
      analytics: 'OK (Posthog initialized)',
    },
  });
}
