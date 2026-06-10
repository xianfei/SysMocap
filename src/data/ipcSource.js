/**
 *  IPC mocap data source (desktop discrete render-iframe).
 *
 *  In the discrete-process path the parent framework.js relays main-process
 *  IPC ('sendRenderDataForward', itself fed by 'sendRenderData' /
 *  'sendBoradcastNew') into the render iframe by calling window.onMocapData().
 *  The exact global name window.onMocapData is a load-bearing seam — keep it.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *  https://github.com/xianfei/SysMocap
 */

/**
 * @param {(data: object) => void} onData receives { type:"xf-sysmocap-data", riggedPose, riggedLeftHand, riggedRightHand, riggedFace }
 */
export function createIpcMocapSource(onData) {
    window.onMocapData = (data) => onData(data);
    return {
        dispose() {
            window.onMocapData = undefined;
        },
    };
}
