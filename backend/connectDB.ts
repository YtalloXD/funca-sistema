import { connect, Schema, model } from 'mongoose';
import type { InferSchemaType } from 'mongoose';

// 1. Conectar ao MongoDB
async function main() {
  try {
    await connect('mongodb://127.0.0.1:27017/my_database');
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar:', err);
  }
}
main();

// 2. Definir o Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: Number
});

// 3. Criar a Interface automaticamente (Inferência de Tipo)
type UserType = InferSchemaType<typeof userSchema>;

// 4. Criar o Model tipado
const User = model<UserType>('User', userSchema);

// 5. Criar e Salvar um Documento
async function createUser(): Promise<void> {
  try {
    const newUser = new User({
      name: 'Alice Smith',
      email: 'alice@example.com',
      age: 28
    });

    const savedUser = await newUser.save();
    console.log('Usuário salvo:', savedUser.name); // TypeScript reconhece as propriedades aqui
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
  }
}

createUser();
