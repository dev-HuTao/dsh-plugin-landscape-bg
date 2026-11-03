# dsh-plugin-landscape-bg

把一张风景画设为 dsh web 客户端的背景，并顺手修掉半透明化之后出现的 Windows 标题栏色差与圆角色楔。

## 功能

- **风景画背景**：在 `html::before` 上铺一张 `cover` 的画（固定定位，`z-index:-1`），桌面、侧栏、内容区都透出这张画。
- **表面薄纱**：把 `--dsw-alias-bg-base` 改成半透明，让文字在画上仍清晰可读（浅色 / 深色各一档）。
- **Windows 标题栏一致性**：把 `--dsw-specific-sidebar-fill` 在 `body` 上保持不透明（喂给原生 `setTitleBarOverlay` 探针），在 `#root` 内重新声明为半透明（页面壳层照旧透画）——两边各取所需；同时把页面自己绘制的 40px 标题栏带也刷成同一不透明色，让「系统按钮区」和「页面标题栏」读成一块，按钮图标不再发灰。
- **圆角补齐**：Windows 下中心列左上角的 16px 圆角缺口只叠到一层薄纱，而侧栏叠了三层，缺口会偏亮成一道浅色楔。插件只在那 16×16 缺口里补刷两层同样的薄纱（用径向遮罩避开圆角本身），使圆角与侧栏同色。

## 兼容性

- 作为 **web client 插件** 注入到 `@deepseek-ai/dsh-client-ui-theme`，随 dsh 客户端加载。
- 浅色 / 深色主题均适配。
- 标题栏带、圆角相关规则都包在 `[data-windows-titlebar]` 内，非 Windows（macOS / Web）不受影响；全屏（`data-fullscreen`）下标题栏带恢复透画。


## 实现要点

| 关注点 | 做法 |
| --- | --- |
| 背景图 | `html::before` 固定铺底，`html::after` 加顶部径向微暗角 |
| 表面透画 | token 覆盖层改 `--dsw-alias-bg-base` 为半透明 |
| 标题栏 | `body` 上保持不透明 caption 色，`#root` 内改回半透明 + 页内 `::before` 带用同色 |
| 圆角 | 仅缺口处补两层径向薄纱，半径读 `--dsh-windows-content-radius` |

所有样式通过 CSS 注入，不修改 dsh 本体；卸载（plugin remove）后样式与 token 覆盖层一并撤销。

## 文件结构

```
dsh-plugin-landscape-bg/
├── assets/
│   └── icon.svg          # 插件图标
├── client.js             # 核心：背景、token 覆盖、标题栏/圆角修复
├── cordis.patch.yml      # cordis 覆盖层声明（挂载点 / 注入目标）
├── index.js              # 插件入口
└── package.json          # 元信息（name / version / dsh.bundle / dsh.client）
```

## 已知限制

- 标题栏「与原生按钮同色」和「背景透到标题栏里」二选一：当前选前者（顶上 40px 是纯色带）。若想让画透进标题栏，删除 `client.js` 里那条 `::before{background:var(--dsh-landscape-caption)}` 即可，代价是按钮区与左侧会有轻微色差。
- 圆角补齐依赖「侧栏叠三层薄纱、缺口叠一层」的现状；若 dsh 改变叠层，差值会重新出现。
- 背景图为插件内嵌资源（见 `client.js` 中的 data URI），替换图片需改该处。

