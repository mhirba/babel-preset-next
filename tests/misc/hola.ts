export default async function hola(ilApAsDitBonjour = false): Promise<string> {
  return new Promise((resolve, reject) => {
    return ilApAsDitBonjour ? resolve('Que tal') : reject('Adios')
  })
}
