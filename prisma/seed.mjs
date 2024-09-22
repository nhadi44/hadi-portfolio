import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function main() {
    const auth = {
        data: [
            {
                username: "hadi",
                password: await bcrypt.hash("password", 10),
                created_at: new Date(),
                updated_at: new Date()
            }
        ]
    }

    for (const data of auth.data) {
        await prisma.auth.create({
            data
        })
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });