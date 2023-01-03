import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@acme/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // create showcase
    const data = req.body as { title: string; content: string };
    const nShowcase = await prisma.showcase.create({
      data,
    });
    return res
      .status(201)
      .json({ message: `Created with id: ${nShowcase.id}` });
  } else if (req.method === "GET") {
    // get showcases
    const showcases = await prisma.showcase.findMany();
    return res.status(200).json(showcases);
  }

  return res.status(404).json({ message: "Not found" });
};
