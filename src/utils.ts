export function isCallable<T extends (...args: unknown[]) => unknown>(thing: T | unknown): thing is T {
  return thing instanceof Function || typeof thing === 'function'
}

// Same as `Object.assign()` but with type inference
export function objectAssign<Obj extends object, ObjAddendum>(
  obj: Obj,
  objAddendum: ObjAddendum,
): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum)
}

export function isBrowser() {
  // Using `typeof window !== 'undefined'` alone is not enough because some users use https://www.npmjs.com/package/ssr-window
  return typeof window !== 'undefined' && typeof window.scrollY === 'number'
}
