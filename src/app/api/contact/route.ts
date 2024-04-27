import { sendEmail } from './utils';

export async function POST(request: Request) {
  const body = await request.json();
  const response = await sendEmail(body);
  if (response.success)
    return new Response(JSON.stringify(response), { status: 200 });
  else return new Response(JSON.stringify(response), { status: 500 });
}
