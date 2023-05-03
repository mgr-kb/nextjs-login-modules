import { z } from "zod";

// バリデーションの内容は要件次第
export const loginFormInputSchema = z.object({
  loginId: z.string().min(1, { message: "入力値が空です" }),
  password: z.string().min(1, { message: "入力値が空です" }),
});

export type LoginFormInput = z.infer<typeof loginFormInputSchema>;
