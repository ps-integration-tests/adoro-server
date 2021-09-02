import { NextApiRequest, NextApiResponse } from "next";

export default async function createMeme(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return {
    answer: await Promise.resolve(42)
  };
}
