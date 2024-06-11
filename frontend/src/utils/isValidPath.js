export function isValidPath(base = "", path = "") {
  return base.includes(`${path}`)
}