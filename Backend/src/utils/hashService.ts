import bcrypt from 'bcrypt'

export default class HashService {
    public static async hashPassword (password: string): Promise<string> {
        return await bcrypt.hash(password, 10)
    }

    public static async comparePassword (plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword)
    }
}
