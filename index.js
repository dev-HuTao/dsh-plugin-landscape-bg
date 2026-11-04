/**
 * Host half of `dsh-plugin-landscape-bg`.
 *
 * The plugin is pure decoration on the browser side, so the Host fiber has
 * nothing to provide: no services, no tools, no events. `apply` stays empty on
 * purpose — the Web client half (`./client`) owns every effect.
 *
 * @returns {void}
 */
export function apply() {}
