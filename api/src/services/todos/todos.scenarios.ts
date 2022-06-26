import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: {
    one: { data: { description: 'String' } },
    two: { data: { description: 'String' } },
  },
})

export type StandardScenario = typeof standard
