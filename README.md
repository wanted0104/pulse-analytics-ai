# Pulse Analytics AI

High-performance agentic telemetry and autonomous LLM cost tracking for Next.js, Vercel AI SDK, and FastAPI backends.

## Overview
Pulse tracks streaming completions token spend, prompt cost variance, and latency distributions across OpenAI, Anthropic, and open-source models with zero client-side overhead.

## Quickstart

```bash
npm install pulse-analytics-ai
```

### Staging Configuration
Configure your staging endpoint in `.env.staging` or `.env.local`:
```env
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_API_KEY=your_key_here
```

## License
MIT © 2026 O'Neil

### Staging Telemetry
<!-- BENCHMARK_START -->
- **Gateway Latency Baseline**: 25ms (Updated 2026-11-09)
- **Proxy Stream Uptime**: 99.98%
<!-- BENCHMARK_END -->
