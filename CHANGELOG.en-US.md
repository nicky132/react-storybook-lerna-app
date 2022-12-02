---
order: 6
title: Change Log
toc: false
timeline: true
---

`antd` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Schedule

- Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
- Monthly release: minor version at the end of every month for new features.
- Major version release is not included in this schedule for breaking change and new features.

---

## 1.0.0

`2022-04-30`

- Segmented
  - 🐞 Fix Segmented inconsisit height with other controls. [#35281](https://github.com/ant-design/ant-design/pull/35281)
  - 🐞 Fix Segmented animation not working correct in StrictMode mode. [#35281](https://github.com/ant-design/ant-design/pull/35281)
  - 🆕 Segmented `options` now supports `icon` property. [#35256](https://github.com/ant-design/ant-design/pull/35256)
- Table
  - ⌨️ Improve Table columns sorter a11y experience. [#35269](https://github.com/ant-design/ant-design/pull/35269)
  - 🇪🇸 Added Table filter localization for es_ES. [#35309](https://github.com/ant-design/ant-design/pull/35309) [@agarciaguillo](https://github.com/agarciaguillo)
- 💄 Fix Switch color in dark theme. [#35332](https://github.com/ant-design/ant-design/pull/35332)
- 💄 Tweak Breadcrumb link hover color. [#35324](https://github.com/ant-design/ant-design/pull/35324)
- 🐞 Fix Space throws `Encountered two children with the same key` warning in some cases. [#35311](https://github.com/ant-design/ant-design/pull/35311)
- 🐞 Fix Select tag remove icon position issue. [#35336](https://github.com/ant-design/ant-design/pull/35336) [@walidcherhane](https://github.com/walidcherhane)

## 0.2.3

`2022-04-26`

- 🐞 Fix Breadcrumb extra padding and margin style. [#35235](https://github.com/ant-design/ant-design/pull/35235)
- 🐞 Fix Input.Seach inconsistent behavior of triggering `onSearch` when press enter using Chinese inputting method. [#35164](https://github.com/ant-design/ant-design/pull/35164) [@qyzzzz](https://github.com/qyzzzz)
- 🐞 Fix circle reference between Upload and Dragger. [#34379](https://github.com/ant-design/ant-design/pull/34379) [@kanweiwei](https://github.com/kanweiwei)

## 0.1.3

`2022-04-24`

- 🔥 React 18 Support. Fix related known issue.
  - 🐞 Fix Form with React 18 StrictMode missing error message update. [#35096](https://github.com/ant-design/ant-design/pull/35096)
  - 🐞 Fix Notification and Message throw `createRoot` warning in React 18. [#35030](https://github.com/ant-design/ant-design/pull/35030)
  - 🐞 Fix BackTop not working in StrictMode. [#34858](https://github.com/ant-design/ant-design/pull/34858) [@tmkx](https://github.com/tmkx)
- 🔥 New component Segmented. [#34319](https://github.com/ant-design/ant-design/pull/34319)
  - 🛠 Since v4.20.0 `Segemented` props `onChange` callback function parameter adjusted from `ChangeEvent` (v4.20.0-alpha.0, v4.20.0-alpha.1) to `value` to simplify API. [#35187](https://github.com/ant-design/ant-design/pull/35187) [@vagusX](https://github.com/vagusX)
- Form
  - 🔥 Form support `useWatch` to get current field value. [#35036](https://github.com/ant-design/ant-design/pull/35036)
  - 🆕 Form support `useFormInstance` to get current context form instance. [#35039](https://github.com/ant-design/ant-design/pull/35039)
  - 💄 Fix Form broken layout when set `labelCol={{ sm: 24 }}` and `wrapperCol={{ sm: 24 }}`. [#34907](https://github.com/ant-design/ant-design/pull/34907)
- 🛎 Menu support `items` for perf prepare, and `children` will be removed in next major version. [#34559](https://github.com/ant-design/ant-design/pull/34559)
- 🆕 Image PreviewGroup Support top progress rendering. [#35038](https://github.com/ant-design/ant-design/pull/35038) [@zpc7](https://github.com/zpc7)
- Upload
  - 🆕 Upload support `crossOrigin` for images in `picture-card` mode. [#34981](https://github.com/ant-design/ant-design/pull/34981) [@dragmove](https://github.com/dragmove)
  - 🐞 Fix Upload `prefixCls` don't work on file list. [#34944](https://github.com/ant-design/ant-design/pull/34944) [@swchen](https://github.com/swchen)
  - 💄 Improve Upload action styles. [#35052](https://github.com/ant-design/ant-design/pull/35052)
- Table
  - 🆕 Support reset to the default value rather than empty, when click reset in Table column filter. [#34355](https://github.com/ant-design/ant-design/pull/34355) [@heiyu4585](https://github.com/heiyu4585)
  - 💄 Fix Table head background and selection column width styling issues when `size="small"`. [#34963](https://github.com/ant-design/ant-design/pull/34963)
  - 🇩🇪 Improve German translations for Table. [#34836](https://github.com/ant-design/ant-design/pull/34836) [@pfedan](https://github.com/pfedan)
  - ⚡️ Optimize Table filter calculation perfromance. [#35064](https://github.com/ant-design/ant-design/pull/35064) [@nieyuyao](https://github.com/nieyuyao)
  - 💄 Improve small and middle size Table selection dropdown margin style. [#35173](https://github.com/ant-design/ant-design/pull/35173)
- Tree
  - 🆕 Tree `switcherIcon` prop support render-prop. [#34470](https://github.com/ant-design/ant-design/pull/34470) [@zqran](https://github.com/zqran)
  - 🆕 Tree support `rootClassName` and `rootStyle`. [#34578](https://github.com/ant-design/ant-design/pull/34578)
- Breadcrumb
  - 🐞 Fix Breadcrumb deprecated warning of Dropdown `placement`. [#35162](https://github.com/ant-design/ant-design/pull/35162)
  - 🐞 Fix Breadcrumb show the number when is unexpected. [#35123](https://github.com/ant-design/ant-design/pull/35123)
  - ⌨️ Make structure of Breadcrumb be accessible. [#34082](https://github.com/ant-design/ant-design/pull/34082) [@VladimirOtroshchenko](https://github.com/VladimirOtroshchenko)
- Anchor
  - 🆕 Anchor `getCurrentAnchor` has active link as argument. [#34799](https://github.com/ant-design/ant-design/pull/34799)
  - 🛠 Refactor Anchor to Function component. [#35073](https://github.com/ant-design/ant-design/pull/35073) [@LongHaoo](https://github.com/LongHaoo)
- Cascader
  - 🆕 Cascader supports `showCheckedStrategy ` for value display strategy. [#34568](https://github.com/ant-design/ant-design/pull/34568) [@heiyu4585](https://github.com/heiyu4585)
  - 🐞 Fix Cascader search result do not fill the entrie panel. [#35019](https://github.com/ant-design/ant-design/pull/35019) [@boomler](https://github.com/boomler)
- 🆕 Click event object can be accessed in `onCopy` function of Typography. [#34655](https://github.com/ant-design/ant-design/pull/34655) [@yzwxk](https://github.com/yzwxk)
- 🆕 Grid supports `justify="space-evenly"`. [#34606](https://github.com/ant-design/ant-design/pull/34606) [@gp5251](https://github.com/gp5251)
- 🆕 Support `rootClassName` property for Dialog and Image. [#34574](https://github.com/ant-design/ant-design/pull/34574) [@heiyu4585](https://github.com/heiyu4585)
- 🐞 Fix error `Nothing was returned from render` when Skeleton use falsy `loading` props without `children`. [#34872](https://github.com/ant-design/ant-design/pull/34872) [@AlbertAZ1992](https://github.com/AlbertAZ1992)
- 💄 Optimize Switch disabled color to fit colorful background. [#35103](https://github.com/ant-design/ant-design/pull/35103)
- 💄 Remove Tabs `overflow: hidden` style to fix Select and sticky Table display problem inside Tabs. [#35195](https://github.com/ant-design/ant-design/pull/35195)
- 💄 Fix Steps style issues in RTL mode. [#35088](https://github.com/ant-design/ant-design/pull/35088) [@zpc7](https://github.com/zpc7)
- 💄 Fix animation for standalone Badge in RTL mode. [#34899](https://github.com/ant-design/ant-design/pull/34899) [@hmz22](https://github.com/hmz22)
- 🛠 Optimize Modal id generate logic to improve accessibility experience. [#35072](https://github.com/ant-design/ant-design/pull/35072)
- 🐞 Fix Select and AutoComplete scroll abnormal behavior when navigate via keyboard.。[#35025](https://github.com/ant-design/ant-design/pull/35025)
- Spin
  - 💄 Fix Spin animation style being abnormally parsed in Parcel. [#35005](https://github.com/ant-design/ant-design/pull/35005)
  - ⌨️ Spin add `aria` attribute to improve accessibility. [#34408](https://github.com/ant-design/ant-design/pull/34408) [@heiyu4585](https://github.com/heiyu4585)
- ⌨️ Dropdown support select option by keyboard. [#34738](https://github.com/ant-design/ant-design/pull/34738)
- 🐞 Fix Title, Text, Paragraph components cannot get `ref` bug. [#34847](https://github.com/ant-design/ant-design/pull/34847) [@MQuy](https://github.com/MQuy)
- Input
  - 💄 Input.Group prevent components from getting style from Form.Item. [#34764](https://github.com/ant-design/ant-design/pull/34764)
  - 💄 Adjust TextArea style in Form. [#34714](https://github.com/ant-design/ant-design/pull/34714)
- ⌨️ Fix `aria-checked` attribute for Checkbox, to avoid screen reader getting an incorrect status. [#34862](https://github.com/ant-design/ant-design/pull/34862) [@SpaNb4](https://github.com/SpaNb4)
- Less
  - 💄 Replace less html selector with related variable. [#35186](https://github.com/ant-design/ant-design/pull/35186) [@jeffdrumgod](https://github.com/jeffdrumgod)
  - 💄 Modify less `danger` value from the function to variable. [#35113](https://github.com/ant-design/ant-design/pull/35113) [@TrickyPi](https://github.com/TrickyPi)
  - 🐞 Arrow border radius variable use fixed value. [#35086](https://github.com/ant-design/ant-design/pull/35086) [@MadCcc](https://github.com/MadCcc)
- TypeScript
  - 🤖 Fixed `Upload` component `UploadChangeParam<T>` internal `fileList` not using generics. [#35158](https://github.com/ant-design/ant-design/pull/35158) [@rendaoer](https://github.com/rendaoer)
  - 🤖 Update TypeScript definition for `@types/react@18` compatible. [#35075](https://github.com/ant-design/ant-design/pull/35075) [@AliRezaBeigy](https://github.com/AliRezaBeigy) [#35076](https://github.com/ant-design/ant-design/pull/35076) [@littledian](https://github.com/littledian)

## 0.0.3

`2022-04-02`

- 🐞 Fix Form that not keep store value when unmount and mount again. [#34845](https://github.com/ant-design/ant-design/pull/34845)
- 🐞 Fix Pagination under `<ConfigProvider componentSize="large" />` should display middle size Select. [#34756](https://github.com/ant-design/ant-design/pull/34756)
- 🐞 fix Skeleton to unable to render `childten` of non-react element. [#34751](https://github.com/ant-design/ant-design/pull/34751) [@1247748612](https://github.com/1247748612)
- 💄 Fix Tag `@tag-border-radius` less variable not work. [#34741](https://github.com/ant-design/ant-design/pull/34741)

## 0.0.2

`2022-03-27`

- 🐞 Fix when `fullscreen` of the Calendar is `false`, the element returned by `dateFullCellRender` cannot be interactive. [#34614](https://github.com/ant-design/ant-design/pull/34614) [@imoctopus](https://github.com/imoctopus)
- 🐞 fix BackTop responsive in RTL. [#34626](https://github.com/ant-design/ant-design/pull/34626) [@hmz22](https://github.com/hmz22)
- 🐞 Fix text position in Steps with `small` size and `dot` mode. [#34651](https://github.com/ant-design/ant-design/pull/34651)
- 🐞 Fix Descriptions `contentStyle` not working when children is 0. [#34696](https://github.com/ant-design/ant-design/pull/34696) [@zhao-huo-long](https://github.com/zhao-huo-long)
- 🐞 Fix notification prevent interaction on elements which under it. [#34716](https://github.com/ant-design/ant-design/pull/34716)

## 0.0.2-beta.0

`2022-03-21`

- 🐞 Fix TextArea `clearIcon` color. [#34610](https://github.com/ant-design/ant-design/pull/34610)
- 🐞 Fix: apply scale transform to disabled star. [#34547](https://github.com/ant-design/ant-design/pull/34547) [@Unuuuuu](https://github.com/Unuuuuu)
- 🐞 Fix Tooltip arrow color with preset. [#34548](https://github.com/ant-design/ant-design/pull/34548)
- 🐞 Fixed number abnormal position display in Badge RTL mode. [#34545](https://github.com/ant-design/ant-design/pull/34545)
- 💄 Fix numeric Row and Col class styles when using prefixCls. [#34494](https://github.com/ant-design/ant-design/pull/34494) [@mic-web](https://github.com/mic-web)
- 🐞 Fix Editable Textarea height jump in Firefox and Editable Typography.Title confirm icon position. [#34518](https://github.com/ant-design/ant-design/pull/34518)
- 💄 Fix missing `status` style in RangePicker. [#34509](https://github.com/ant-design/ant-design/pull/34509)
- 🛎 Add warning for Input getting blurred when dynamically add `hasFeedback`. [#34475](https://github.com/ant-design/ant-design/pull/34475)
- 🐞 Fix missing classname in input when Input has `prefix` or `suffix`. [#34474](https://github.com/ant-design/ant-design/pull/34474)
- 🇱🇹 Updated lt_LT locale for `typeTemplate`. [#34567](https://github.com/ant-design/ant-design/pull/34567) [@Anizcus](https://gitit_LTit_LThub.com/Anizcus)
- 🇮🇹 Updated it_iT locale for `Table`. [#34566](https://github.com/ant-design/ant-design/pull/34566) [@freshgiammi](https://gitit_LTit_LThub.com/freshgiammi)

## 0.0.1

`2022-03-13`

- 🐞 Fix Dropdown not auto adjust placement when position on the edge of window. [#34390](https://github.com/ant-design/ant-design/pull/34390)
- 💄 Change PageHeader elements margin from `12px` to `8px` inside `extra`. [#34428](https://github.com/ant-design/ant-design/pull/34428)
- 🛠 Export css variable function in `antd/es/config-provider` folder to enable ssr requirement. [#34436](https://github.com/ant-design/ant-design/pull/34436)
- 🛠 Refactor Menu with React hooks. [#34433](https://github.com/ant-design/ant-design/pull/34433)
- Input
  - 💄 Fix Input font-size when `size` is large. [#34381](https://github.com/ant-design/ant-design/pull/34381)
  - 💄 Fix Input.Group wrong border when status is error. [#34412](https://github.com/ant-design/ant-design/pull/34412)
- Form
  - 🐞 Fix Form.Item removed in `form.validateFields` throw `Can't perform a React state update on an unmounted component` warning. [#34405](https://github.com/ant-design/ant-design/pull/34405)
  - 🐞 Fix to Form that `initialValues` would change if `preserve` is false. [#34411](https://github.com/ant-design/ant-design/pull/34411)
- Tooltip
  - 💄 Fix Tooltip width in Safari. [#34415](https://github.com/ant-design/ant-design/pull/34415) [@jiandandkl](https://github.com/jiandandkl)
  - 💄 Fix arrow size of Tooltip/Popover/Popconfirm. [#34407](https://github.com/ant-design/ant-design/pull/34407)
- 💄 Remove Collapse bottom border in simple style. [#34366](https://github.com/ant-design/ant-design/pull/34366) [@PanStar](https://github.com/PanStar)
- TypeScript
  - 🤖 Fix Input `data-*` type definition. [#34410](https://github.com/ant-design/ant-design/pull/34410) [@GitKou](https://github.com/GitKou)
  - 🤖 Fix Transfer `footer` type definition. [#34337](https://github.com/ant-design/ant-design/pull/34337) [@zomixi](https://github.com/zomixi)
