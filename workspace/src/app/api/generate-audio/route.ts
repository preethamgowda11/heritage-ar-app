import {NextRequest, NextResponse} from 'next/server';

const LUVVOICE_API_KEY = process.env.LUVVOICE_API_KEY;
const LUVVOICE_ENDPOINT = 'https://api.luvvoice.com/v1/tts';

export async function POST(req: NextRequest) {
  if (!LUVVOICE_API_KEY || LUVVOICE_API_KEY === 'YOUR_LUVVOICE_API_KEY') {
    return NextResponse.json({error: 'LuvVoice API key not configured'}, {status: 500});
  }

  try {
    const {text, lang} = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json({error: 'No text provided'}, {status: 400});
    }

    const payload = {
      text: text,
      lang: lang || 'en',
      format: 'mp3',
      speed: 1.0,
    };

    const response = await fetch(LUVVOICE_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LUVVOICE_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/octet-stream',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => null);
      console.error('LuvVoice API error:', errText);
      return NextResponse.json(
        {error: 'LuvVoice API error', detail: errText || response.statusText},
        {status: response.status}
      );
    }

    const buffer = await response.arrayBuffer();
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (e) {
    console.error('TTS Server error:', e);
    return NextResponse.json({error: 'Server error'}, {status: 500});
  }
}
