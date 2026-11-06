import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { recordTelemetryEvent } from '@/lib/redis';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, sessionId } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'),
    messages,
    onFinish: async ({ usage }) => {
      if (sessionId) {
        await recordTelemetryEvent(sessionId, { usage, model: 'gpt-4o' });
      }
    }
  });

  return result.toDataStreamResponse();
}
