/**
 *  Bone-binding axis-expression evaluator (shared)
 *
 *  Replaces the legacy direct `eval(bindingFunc.fx)` used by the FBX/glTF
 *  bone-binding system. Direct eval depended on the surrounding minifier
 *  preserving the local variables x/y/z; under a Vite/Rolldown production build
 *  those locals get renamed, so `eval("-x")` would reference a name that no
 *  longer exists and every Mixamo/FBX/custom-bound model would silently break.
 *
 *  `new Function("x","y","z", ...)` declares x/y/z as the compiled function's
 *  OWN parameters (defined inside the source string), so it is immune to
 *  minification and keeps the exact string-expression data format stored in
 *  models.json and user models (e.g. {"fx":"-x","fy":"y","fz":"-z"}) — no model
 *  files need editing.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 */

// Cache compiled functions keyed by the expression STRING: the same handful of
// expressions ("-x", "y", "-z", ...) recur across many bones and many models,
// and rigRotation runs per-bone per-frame, so compiling once is essential.
const _cache = new Map();

/**
 * Compile a bone-binding axis expression (e.g. "-x", "z", "-y") into a cached
 * function (x, y, z) => number. The expression may reference only x, y, z.
 * @param {string} expr
 * @returns {(x:number, y:number, z:number)=>number}
 */
export function compileAxisExpr(expr) {
    let fn = _cache.get(expr);
    if (!fn) {
        // eslint-disable-next-line no-new-func
        fn = new Function("x", "y", "z", "return (" + expr + ");");
        _cache.set(expr, fn);
    }
    return fn;
}

/**
 * Evaluate `expr` against the dampened rotation components, matching the old
 * `eval(bindingFunc.fx)` semantics exactly (x/y/z were `rotation.* * dampener`).
 * @param {string} expr
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}
 */
export function evalAxisExpr(expr, x, y, z) {
    return compileAxisExpr(expr)(x, y, z);
}
