let printCalls = 0

export default function print (component, text) {
  printCalls++
  console.log(`${printCalls}: ${component.toUpperCase()} ➡ ️${text}`)
}
