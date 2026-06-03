/* Module-level flag — resets on every hard refresh (module re-initializes).
   Persists across client-side navigations within the same session. */
let _done = false;
export const setLSDone = () => { _done = true; };
export const isLSDone  = () => _done;
