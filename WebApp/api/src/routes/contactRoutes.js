import { Router } from "express";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(800),
});

const contactRouter = Router();

contactRouter.post("/contact", (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid contact payload",
      issues: parsed.error.issues,
    });
  }

  return res.status(202).json({
    message: "Thanks for reaching out. This is a demo inbox.",
    receivedAt: new Date().toISOString(),
  });
});

export default contactRouter;
