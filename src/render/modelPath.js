/**
 *  Resolve a desktop model-asset path to the SOURCE models/ shipped at the app
 *  root, so the build doesn't also ship a duplicate copy under dist/.
 *
 *  Built-in models reference their files as "../models/..." (relative to the
 *  page). The pages live at dist/src/pages/<page>/, but models/ ships at the app
 *  root — four levels up — so rewrite "../models/..." to "../../../../models/..."
 *  (prepend three more "../"). User models use absolute paths -> returned as-is.
 *
 *  models.json itself is intentionally left as "../models/..." so the web
 *  server's path.resolve(__dirname, modelObj.path) (from webserv/) still finds
 *  repo/models. Only the desktop CONSUMERS (avatar load, model viewer, library
 *  thumbnails) rewrite via this helper.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *  https://github.com/xianfei/SysMocap
 */
export function resolveModelPath(p) {
    if (typeof p === "string" && p.startsWith("../models/")) return "../../../" + p;
    return p;
}
