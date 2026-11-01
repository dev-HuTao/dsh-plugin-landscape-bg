window.__ModuleLoader__.load({
  id: 'dsh-plugin-landscape-bg',
  factory() {
    /**
     * The painting: a layered landscape (sky, three mountain ranges, mist, lake
     * with mirror reflection, foreground bank with pines, birds). Authored as
     * SVG so the asset needs no binary file and stays crisp at any DPI. It is
     * turned into a data URI at boot, which keeps the background immune to how
     * (or whether) plugin asset URLs are served.
     */
    const PAINTING = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000">',
      '<defs>',
      '<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0" stop-color="#c9dcee"/><stop offset="0.45" stop-color="#e2ecf3"/>',
      '<stop offset="1" stop-color="#f8f2e6"/></linearGradient>',
      '<radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">',
      '<stop offset="0" stop-color="#fff7e4" stop-opacity="0.95"/>',
      '<stop offset="0.5" stop-color="#ffe9c6" stop-opacity="0.42"/>',
      '<stop offset="1" stop-color="#ffe9c6" stop-opacity="0"/></radialGradient>',
      '<linearGradient id="far" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0" stop-color="#c9dae7"/><stop offset="1" stop-color="#b2c8d8"/></linearGradient>',
      '<linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0" stop-color="#a4bccc"/><stop offset="1" stop-color="#88a4b8"/></linearGradient>',
      '<linearGradient id="near" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0" stop-color="#7b97ab"/><stop offset="1" stop-color="#68869b"/></linearGradient>',
      '<linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0" stop-color="#dfeaf1"/><stop offset="0.5" stop-color="#c2d5e1"/>',
      '<stop offset="1" stop-color="#a3bdcb"/></linearGradient>',
      '<linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0" stop-color="#ffffff" stop-opacity="0"/>',
      '<stop offset="0.5" stop-color="#ffffff" stop-opacity="0.8"/>',
      '<stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>',
      '<linearGradient id="bank" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0" stop-color="#577084"/><stop offset="1" stop-color="#384f60"/></linearGradient>',
      '<filter id="soft" x="-25%" y="-25%" width="150%" height="150%">',
      '<feGaussianBlur stdDeviation="18"/></filter>',
      '<filter id="softer" x="-25%" y="-25%" width="150%" height="150%">',
      '<feGaussianBlur stdDeviation="9"/></filter>',
      '<clipPath id="water"><rect x="0" y="770" width="1600" height="240"/></clipPath>',
      '<g id="pine"><path d="M0 0 L-22 40 L-12 40 L-30 74 L-16 74 L-38 112 L38 112 L16 74 L30 74 L12 40 L22 40 Z"/>',
      '<rect x="-4" y="108" width="8" height="28" rx="2"/></g>',
      '</defs>',
      '<rect width="1600" height="1000" fill="url(#sky)"/>',
      '<circle cx="1120" cy="300" r="300" fill="url(#sunGlow)"/>',
      '<circle cx="1120" cy="300" r="58" fill="#fff8e8" opacity="0.92"/>',
      '<path id="rangeFar" fill="url(#far)" d="M-40 690 C110 640 190 566 300 520 C392 482 436 528 520 494 C610 458 656 486 748 444 C840 402 884 470 968 486 C1058 503 1108 452 1198 474 C1288 496 1360 546 1450 566 C1520 582 1580 596 1640 604 L1640 800 L-40 800 Z"/>',
      '<path id="rangeMid" fill="url(#mid)" d="M-40 742 C90 716 168 686 262 652 C356 618 402 662 502 626 C602 590 650 634 752 612 C854 590 892 640 998 650 C1104 660 1164 700 1272 714 C1380 728 1470 748 1640 756 L1640 820 L-40 820 Z"/>',
      '<ellipse cx="700" cy="704" rx="820" ry="34" fill="url(#fog)" opacity="0.85"/>',
      '<path id="rangeNear" fill="url(#near)" d="M-40 792 C112 778 214 762 324 738 C434 714 484 754 594 738 C704 722 762 762 882 770 C1002 778 1062 758 1182 764 C1302 770 1424 792 1640 798 L1640 860 L-40 860 Z"/>',
      '<ellipse cx="1010" cy="764" rx="660" ry="13" fill="url(#fog)" opacity="0.55"/>',
      '<rect x="0" y="770" width="1600" height="230" fill="url(#lake)"/>',
      '<g clip-path="url(#water)" opacity="0.18">',
      '<use href="#rangeMid" transform="translate(0 1540) scale(1 -1)"/>',
      '<use href="#rangeNear" transform="translate(0 1540) scale(1 -1)"/>',
      '</g>',
      '<ellipse cx="1120" cy="866" rx="58" ry="126" fill="#fff6e4" opacity="0.5" filter="url(#soft)"/>',
      '<g stroke="#ffffff" stroke-opacity="0.38" stroke-width="2.5" stroke-linecap="round">',
      '<path d="M420 812 h150"/><path d="M620 842 h210"/><path d="M300 874 h120"/>',
      '<path d="M862 878 h180"/><path d="M520 916 h230"/><path d="M1180 906 h160"/>',
      '</g>',
      '<path d="M-40 1000 L-40 906 C120 884 236 894 344 922 C452 950 546 976 650 1000 Z" fill="url(#bank)"/>',
      '<path d="M1640 1000 L1640 954 C1544 942 1474 964 1416 1000 Z" fill="url(#bank)" opacity="0.9"/>',
      '<g fill="#35505f">',
      '<use href="#pine" transform="translate(96 753) scale(1.05)"/>',
      '<use href="#pine" transform="translate(190 780) scale(0.9)"/>',
      '<use href="#pine" transform="translate(268 820) scale(0.72)"/>',
      '<use href="#pine" transform="translate(330 858) scale(0.52)"/>',
      '</g>',
      '<g stroke="#7e97a9" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7">',
      '<path d="M958 258 q15 -11 30 0 M988 258 q15 -11 30 0"/>',
      '<path d="M1060 214 q12 -9 24 0 M1084 214 q12 -9 24 0"/>',
      '</g>',
      '</svg>',
    ].join('');

    /** `data-plugin-css` identity: matches the owner stylesheet convention. */
    const STYLE_ID = 'dsh-plugin-landscape-bg/landscape.css';
    /** Token override layer source; one layer per source in `ctx.theme`. */
    const TOKEN_LAYER = 'dsh-plugin-landscape-bg';

    /**
     * Capture colours, close to a Windows 11 titlebar. The Windows caption is
     * painted by the OS, so it can only be a flat colour; the page's own caption
     * band borrows it too, which is what makes the two halves of the titlebar
     * read as one surface instead of the button corner looking pasted on.
     *
     * Opaque on purpose: `apps/desktop/src/preload-windows.ts` probes
     * `--dsw-specific-sidebar-fill` and hands its computed colour to
     * `setTitleBarOverlay`, and a translucent value there makes the OS paint one
     * colour while the page paints another.
     */
    const CAPTION = {
      light: 'rgb(243 244 246)',
      dark: 'rgb(32 33 36)',
    };

    /**
     * Token layer written onto `body`. Both palettes carry a value: an override
     * must never make text illegible in the other scheme.
     *
     * `--dsw-specific-sidebar-fill` reaches two very different readers — the
     * page paints the shell and sidebars with it, the desktop caption probe
     * reads it off `body` — and they need opposite things: the caption must be
     * opaque, the shell must stay translucent or it hides the painting. The
     * probe sits directly on `body`, so the opaque value stays there (this
     * layer) and the stylesheet re-declares a translucent one inside `#root`.
     * `--dsh-landscape-caption` carries the opaque colour to the caption band
     * the page draws itself.
     */
    const SURFACES = {
      // Unchanged from the approved look: the shell, the base surface and the
      // centre column each add one pass of it, and that stack is what settles
      // the painting at a readable strength.
      '--dsw-alias-bg-base': {
        light: 'rgb(250 251 253 / 0.55)',
        dark: 'rgb(13 15 19 / 0.64)',
      },
      '--dsw-specific-sidebar-fill': CAPTION,
      '--dsh-landscape-caption': CAPTION,
    };

    /** @param {string} uri - data URI of the painting. @returns {string} stylesheet text. */
    function stylesheet(uri) {
      return [
        'html::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;',
        'background-image:url("' + uri + '");background-position:center center;',
        'background-size:cover;background-repeat:no-repeat}',
        'html::after{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;',
        'background:radial-gradient(135% 100% at 50% 0%,rgb(255 255 255 / 0) 52%,rgb(24 44 64 / 0.12) 100%)}',
        // Inside the shell the same token has to be translucent again: the shell
        // paints it as one box behind every column, and an opaque value there
        // covers the painting completely. `body` keeps the opaque value for the
        // desktop caption probe, which is a direct child of body and never
        // inherits from `#root`.
        '#root{--dsw-specific-sidebar-fill:rgb(243 244 246 / 0.5)}',
        'body[data-ds-dark-theme] #root{--dsw-specific-sidebar-fill:rgb(32 33 36 / 0.58)}',
        // The Windows caption band is the shell's `::before`. Painting it with the
        // same opaque colour the OS uses under the buttons keeps the titlebar one
        // surface; without the band, only the OS half would carry a colour.
        'html[data-windows-titlebar]:not([data-fullscreen]) #root *:has(> [data-shell-overlay])::before',
        '{background:var(--dsh-landscape-caption)}',
        // The shell paints this fill three times down the sidebar — once on the
        // frame, once on the sidebar column, once on the sidebar root — while the
        // notch left by the centre column's rounded corner only ever sees the
        // frame's single pass. One pass over a painting is much brighter than
        // three, so the corner reads as a light wedge beside the column even
        // though both use the same token. Repainting the radius-sized square with
        // the two extra passes, masked to everything outside the corner's quarter
        // disc, brings the notch to the sidebar's depth without touching the
        // radius itself.
        'html[data-windows-titlebar] #root *:has(> [data-shell-overlay]){background-origin:border-box;',
        'background-image:',
        'radial-gradient(circle var(--dsh-windows-content-radius,16px) at 100% 100%,rgb(0 0 0 / 0) 99%,var(--dsw-specific-sidebar-fill) 100%),',
        'radial-gradient(circle var(--dsh-windows-content-radius,16px) at 100% 100%,rgb(0 0 0 / 0) 99%,var(--dsw-specific-sidebar-fill) 100%);',
        'background-size:var(--dsh-windows-content-radius,16px) var(--dsh-windows-content-radius,16px);',
        'background-position:var(--dsh-windows-sidebar-width,0px) var(--dsh-windows-titlebar-height,40px);',
        'background-repeat:no-repeat}',
      ].join('');
    }

    return {
      // `theme` gives the sanctioned token-override layer; without it the surface
      // colours would have to fight the presenter's inline variables.
      inject: ['theme'],
      /**
       * Paint the background and soften the surfaces above it.
       * @param {any} ctx - client cordis context.
       */
      apply(ctx) {
        if (typeof document !== 'undefined') {
          const uri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(PAINTING);
          const tag = document.createElement('style');
          tag.dataset.plugin = 'dsh-plugin-landscape-bg';
          tag.dataset.pluginCss = STYLE_ID;
          tag.textContent = stylesheet(uri);
          document.head.appendChild(tag);
          ctx.effect(() => () => tag.remove(), 'landscape-bg: background stylesheet');
        }

        ctx.effect(
          () => ctx.theme.overrideTokens(TOKEN_LAYER, SURFACES),
          'landscape-bg: translucent base surface, opaque caption fill',
        );
      },
    };
  },
});
