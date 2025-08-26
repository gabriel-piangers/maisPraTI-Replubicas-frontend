
import {z} from "zod"

export const registerSchema = z.object({
    name: z.string().min(1, {message: "O campo nome precisa ser preenchido"}),
    email: z.string().min(1, {message: "O campo email precisa ser preenchido"}).email({message: "E-mail inválido"}),
    phone: z.string().min(1, {message: "O campo telefone precisa ser preenchido"}).regex(/^\(\d{2}\) \d{5}-\d{4}$/, {message: "Telefone inválido"}),
    password: z.string().min(1, {message: "O campo senha é obrigatório"}).min(8, {message: "A senha deve ter no mínimo 8 caracteres"}),
    confirmation_password: z.string().min(1 ,{message: "O campo confirmar senha é obrigatório"}).min(8, {message: "A senha deve ter no mínimo 8 caracteres"}),
    accountType: z.enum(["inquilino", "anunciante"], {
        required_error: "Selecione um tipo de conta",
    }),
    terms: z.literal(true, {errorMap: ()=> ({message: "Você precisa aceitar os termos de uso."}) }),
}).refine((data) => {
    return data.password === data.confirmation_password;
}, {
    message: "As senhas devem coincidir",
    path: ["confirmation_password"]
}
)