import plop from './misc/plop'
import hola from './misc/hola'

console.log(plop())

type Identity = {
  firstname: string
  lastname?: string
}

type ATTACK = 'KameHameHa' | 'Garlic'

type User = {
  identity: Identity
  planet: string
  power: ATTACK
}

const user: User = { identity: { firstname: 'S0nGoku' }, planet: 'Vegeta', power: 'KameHameHa' }

process.stdout.write(` ~~ I'm ${user.identity.firstname}`)
if (user?.identity?.lastname) {
  process.stdout.write(user.identity.lastname)
}

console.log(' ~~', await hola())
