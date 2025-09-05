import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "O campo nome precisa ser preenchido" }),
    email: z
      .string()
      .min(1, { message: "O campo email precisa ser preenchido" })
      .email({ message: "E-mail inválido" }),
    phone: z
      .string()
      .min(1, { message: "O campo telefone precisa ser preenchido" })
      .regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: "Telefone inválido" }),
    cpf: z
      .string()
      .min(1, { message: "O campo CPF precisa ser preenchido" })
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
    password: z
      .string()
      .min(1, { message: "O campo senha é obrigatório" })
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
    confirmation_password: z
      .string()
      .min(1, { message: "O campo confirmar senha é obrigatório" })
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
    terms: z.boolean().refine((val) => val === true, {
      message: "Você precisa aceitar os termos de uso.",
    }),
  })
  .refine((data) => data.password === data.confirmation_password, {
    message: "As senhas devem coincidir",
    path: ["confirmation_password"],
  });
