import { z } from "zod";

export const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "O campo email precisa ser preenchido" })
      .email({ message: "E-mail inválido" }),
    senha: z
      .string()
      .min(1, { message: "O campo senha é obrigatório" })
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
})