import { ConstructorDeclaration } from "typescript";

const chars = "abcdefghijklmnopqrstuvwxyz";
function random(count: number) {
  return Array(count).fill(null).map(() => chars[Math.round(Math.random() * chars.length)]).join("");
}

export function mock<T>() {
  const inner: { [key in string | number]: jest.Mock } = {};
  return new Proxy({ id: random(5) } as unknown as T & {[key in keyof T]: jest.Mock}, {
    get(_, key: string | number) {
      if (key === "then") return;
      return inner[key] = inner[key] ?? jest.fn();
    }
  });
}
