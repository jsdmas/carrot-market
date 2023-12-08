import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import apiClient from '@/libs/server/client';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

export async function POST(req: Request, res: Response) {
  const { token } = await req.json();
  const exists = await apiClient.token.findUnique({
    where: {
      payload: token,
    },
    // include: { user: true } user에 대한 정보 또한 가져올수있다.
  });
  console.log(token);
  const session = getIronSession(cookies(), {
    cookieName: 'carrotsession',
    password: '9845904809485098594385093840598df;slkgjfdl;gkfsdjg;ldfksjgdsflgjdfklgjdflgjflkgjdgd',
  });
  console.log(exists);
  if (!exists) res.status;
  session.user = {
    id: exists?.userId,
  };
  await (await session).save();
  return NextResponse.json(token);
}
