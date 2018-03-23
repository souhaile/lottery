define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_datepicker__date_range_editor$46scss$46css$46shim = Object.create(_root);
  dart.defineLazy(material_datepicker__date_range_editor$46scss$46css$46shim, {
    /*material_datepicker__date_range_editor$46scss$46css$46shim.styles*/get styles() {
      return dart.constList(['date-range-editor ::-webkit-scrollbar { background-color:rgba(0, 0, 0, 0); height:8px; width:8px; }  date-range-editor ::-webkit-scrollbar:hover { background-color:rgba(0, 0, 0, 0.12); }  date-range-editor ::-webkit-scrollbar-thumb { background-color:rgba(0, 0, 0, 0.26); min-height:48px; min-width:48px; }  date-range-editor ::-webkit-scrollbar-thumb:hover { background-color:#4285f4; }  date-range-editor ::-webkit-scrollbar-button { width:0; height:0; } ._nghost-%COMP% { display:inline-flex; color:rgba(0, 0, 0, 0.87); position:relative; } .preset-list._ngcontent-%COMP% { border-right:1px solid #e0e0e0; overflow-x:hidden; overflow-y:auto; max-height:536px; } .preset-list._ngcontent-%COMP%  material-list { padding:0; } .preset-list._ngcontent-%COMP%  material-list { max-width:100%; } .preset-list._ngcontent-%COMP% .group._ngcontent-%COMP% { padding:10px 0; border-bottom:1px solid #e0e0e0; } .preset-list._ngcontent-%COMP% .group:last-child._ngcontent-%COMP% { border-bottom:0; } .preset-list._ngcontent-%COMP% .group._ngcontent-%COMP% material-select-item._ngcontent-%COMP% { font-size:inherit; } .preset-list._ngcontent-%COMP% .group._ngcontent-%COMP% .days-input._ngcontent-%COMP% { display:flex; height:32px; align-items:center; } .preset-list._ngcontent-%COMP% .group._ngcontent-%COMP% .days-input._ngcontent-%COMP% material-input._ngcontent-%COMP% { flex-shrink:0; padding:0; position:relative; margin-right:4px; width:28px; } .preset-list._ngcontent-%COMP% .group._ngcontent-%COMP% .days-input._ngcontent-%COMP% material-input._ngcontent-%COMP%  .top-section { margin:0; } .preset-list._ngcontent-%COMP% .group._ngcontent-%COMP% .days-input._ngcontent-%COMP% material-input._ngcontent-%COMP%  .top-section { line-height:22px; } .preset-dropdown-button._ngcontent-%COMP% { position:relative; display:inline-flex; margin-left:auto; left:8px; } .preset-dropdown-button._ngcontent-%COMP% glyph._ngcontent-%COMP% { transform:rotate(-90deg); } .preset-dropdown-button[icon]._ngcontent-%COMP%  .content { padding:0; } .preset-dropdown-item._ngcontent-%COMP% { font-size:13px; } .basic-preset-list._ngcontent-%COMP% { min-width:260px; } .right-column._ngcontent-%COMP% { display:flex; flex-direction:column; width:344px; border-left:1px solid #e0e0e0; margin-left:-1px; padding-top:10px; } ._nghost-%COMP%.compact .right-column._ngcontent-%COMP% { width:260px; } .range-title._ngcontent-%COMP% { color:rgba(0, 0, 0, 0.38); font-size:13px; padding:2px 16px; } .range-input._ngcontent-%COMP% { box-sizing:border-box; display:flex; flex-direction:column; height:32px; line-height:32px; padding:0 16px; margin-bottom:10px; } .month-selector-toolbar._ngcontent-%COMP% { display:flex; padding:0 16px; margin-bottom:10px; align-items:center; color:rgba(0, 0, 0, 0.87); } .month-selector-dropdown._ngcontent-%COMP% { display:flex; align-items:center; margin-right:auto; cursor:pointer; } .month-selector-dropdown-icon._ngcontent-%COMP% { will-change:transform; transition:transform 218ms cubic-bezier(0.4, 0, 0.2, 1); } .month-selector-dropdown-icon.flipped._ngcontent-%COMP% { transform:scaleY(-1); } .visible-month._ngcontent-%COMP% { font-size:13px; font-weight:500; text-transform:uppercase; } .picker-container._ngcontent-%COMP% { height:384px; position:relative; overflow:hidden; flex-grow:1; } .picker-container.compact._ngcontent-%COMP% { height:288px; } .picker._ngcontent-%COMP% { position:absolute; top:0; left:0; right:0; bottom:0; transform:translateY(0); transition:transform 218ms cubic-bezier(0.4, 0, 0.2, 1); will-change:transform; } .picker.ng-hide._ngcontent-%COMP% { transform:translateY(100%); } .picker.ng-hidden._ngcontent-%COMP% { visibility:hidden; } .month-selector._ngcontent-%COMP% { border-top:1px solid rgba(0, 0, 0, 0.12); } .month-selector.ng-hide._ngcontent-%COMP% { transform:translateY(-100%); } .range._ngcontent-%COMP% { flex:1; } .button-decorator._ngcontent-%COMP% { display:flex; padding-left:16px; padding-right:16px; margin-bottom:10px; cursor:pointer; } .expend-more._ngcontent-%COMP% { color:rgba(0, 0, 0, 0.54); height:24px; } .expand-less._ngcontent-%COMP% { margin-top:auto; margin-bottom:auto; color:rgba(0, 0, 0, 0.54); } .custom-tab-left._ngcontent-%COMP% { margin-right:auto; line-height:24px; } .custom_tab-left-selected._ngcontent-%COMP% { margin-top:9px; margin-right:auto; line-height:17px; } .custom-tab-right._ngcontent-%COMP% { margin-right:auto; line-height:32px; } .custom_range_desc._ngcontent-%COMP% { margin-bottom:9px; font-size:12px; } .content-separator._ngcontent-%COMP% { background:#e0e0e0; height:1px; color:#757575; } .range-input._ngcontent-%COMP%  .range material-input.active  .focused-underline:not(.invalid) { background-color:#4285f4; } .range-input._ngcontent-%COMP%  .range material-input.active ::selection { background:#c6dafc; } .range-input._ngcontent-%COMP%  .comparison material-input.active  .focused-underline:not(.invalid) { background-color:#f4b400; } .range-input._ngcontent-%COMP%  .comparison material-input.active ::selection { background:#fce8b2; } .calendar._ngcontent-%COMP%  .today .boundary.boundary-comparison:not(.boundary-range).circle { border:0; height:inherit; width:inherit; }'], dart.dynamic);
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.scss.css.shim.ddc", {
    "package:angular_components/material_datepicker/date_range_editor.scss.css.shim.dart": material_datepicker__date_range_editor$46scss$46css$46shim
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.scss.css.shim.dart"],"names":[],"mappings":";;;;;;;;MAGoB,iEAAM;YAAG,iBAAO","file":"date_range_editor.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor$46scss$46css$46shim: material_datepicker__date_range_editor$46scss$46css$46shim
  };
});

//# sourceMappingURL=date_range_editor.scss.css.shim.ddc.js.map
