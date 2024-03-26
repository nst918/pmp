import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-WCJNFYVY.js";
import {
  Overlay,
  OverlayModule,
  Scroller,
  ScrollerModule
} from "./chunk-QHOLFXVE.js";
import {
  ChevronDownIcon
} from "./chunk-SAAVBA23.js";
import {
  InputTextModule
} from "./chunk-SGDJQZPI.js";
import {
  TimesCircleIcon
} from "./chunk-FJJNJL4F.js";
import {
  TimesIcon
} from "./chunk-AEHUP6EC.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-HJNJ3GZ4.js";
import {
  SpinnerIcon
} from "./chunk-WEZMEBCN.js";
import {
  Ripple,
  RippleModule
} from "./chunk-6LZPQP63.js";
import {
  DomHandler
} from "./chunk-YUY6MLJM.js";
import {
  ObjectUtils,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  UniqueComponentId
} from "./chunk-P54CCVCB.js";
import "./chunk-WYGJDHDL.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-A2CSS5DJ.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-G4DQUGXJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  computed,
  effect,
  forwardRef,
  setClassMetadata,
  signal,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NTDFCNTR.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-47AXDMZD.js";

// node_modules/primeng/fesm2022/primeng-autocomplete.mjs
var _c0 = ["container"];
var _c1 = ["focusInput"];
var _c2 = ["multiIn"];
var _c3 = ["multiContainer"];
var _c4 = ["ddBtn"];
var _c5 = ["items"];
var _c6 = ["scroller"];
var _c7 = ["overlay"];
function AutoComplete_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 13, 14);
    ɵɵlistener("input", function AutoComplete_input_2_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.onInput($event));
    })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.onKeyDown($event));
    })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.onInputChange($event));
    })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.onInputFocus($event));
    })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.onInputBlur($event));
    })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.onInputPaste($event));
    })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.onInputKeyUp($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    let tmp_19_0;
    ɵɵclassMap(ctx_r1.inputStyleClass);
    ɵɵproperty("autofocus", ctx_r1.autofocus)("ngClass", ctx_r1.inputClass)("ngStyle", ctx_r1.inputStyle)("type", ctx_r1.type)("autocomplete", ctx_r1.autocomplete)("required", ctx_r1.required)("name", ctx_r1.name)("maxlength", ctx_r1.maxlength)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled);
    ɵɵattribute("value", ctx_r1.inputValue())("id", ctx_r1.inputId)("placeholder", ctx_r1.placeholder)("size", ctx_r1.size)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required)("aria-expanded", (tmp_19_0 = ctx_r1.overlayVisible) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.id + "_list" : null)("aria-aria-activedescendant", ctx_r1.focused ? ctx_r1.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 17);
    ɵɵlistener("click", function AutoComplete_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r24 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r24.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-autocomplete-clear-icon");
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 18);
    ɵɵlistener("click", function AutoComplete_ng_container_3_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r29);
      const ctx_r28 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r28.clear());
    });
    ɵɵtemplate(1, AutoComplete_ng_container_3_span_2_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r23.clearIconTemplate);
  }
}
function AutoComplete_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 15)(2, AutoComplete_ng_container_3_span_2_Template, 2, 2, "span", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.clearIconTemplate);
  }
}
function AutoComplete_ul_4_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_ul_4_li_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r33 = ɵɵnextContext().$implicit;
    const ctx_r37 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r37.getOptionLabel(option_r33));
  }
}
function AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesCircleIcon", 32);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-autocomplete-token-icon");
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ul_4_li_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ul_4_li_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 33);
    ɵɵtemplate(1, AutoComplete_ul_4_li_2_span_6_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r39 = ɵɵnextContext(3);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r39.removeIconTemplate);
  }
}
var _c8 = (a1) => ({
  "p-autocomplete-token": true,
  "p-focus": a1
});
var _c9 = (a0) => ({
  $implicit: a0
});
function AutoComplete_ul_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 24, 25);
    ɵɵtemplate(2, AutoComplete_ul_4_li_2_ng_container_2_Template, 1, 0, "ng-container", 26)(3, AutoComplete_ul_4_li_2_span_3_Template, 2, 1, "span", 27);
    ɵɵelementStart(4, "span", 28);
    ɵɵlistener("click", function AutoComplete_ul_4_li_2_Template_span_click_4_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r44);
      const i_r34 = restoredCtx.index;
      const ctx_r43 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r43.removeOption($event, i_r34));
    });
    ɵɵtemplate(5, AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template, 1, 2, "TimesCircleIcon", 29)(6, AutoComplete_ul_4_li_2_span_6_Template, 2, 2, "span", 30);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c8, ctx_r31.focusedMultipleOptionIndex() === i_r34));
    ɵɵattribute("id", ctx_r31.id + "_multiple_option_" + i_r34)("aria-label", ctx_r31.getOptionLabel(option_r33))("aria-setsize", ctx_r31.modelValue().length)("aria-posinset", i_r34 + 1)("aria-selected", true);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r31.selectedItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c9, option_r33));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r31.selectedItemTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r31.removeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r31.removeIconTemplate);
  }
}
function AutoComplete_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 19, 20);
    ɵɵlistener("focus", function AutoComplete_ul_4_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r45 = ɵɵnextContext();
      return ɵɵresetView(ctx_r45.onMultipleContainerFocus($event));
    })("blur", function AutoComplete_ul_4_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r47 = ɵɵnextContext();
      return ɵɵresetView(ctx_r47.onMultipleContainerBlur($event));
    })("keydown", function AutoComplete_ul_4_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r48 = ɵɵnextContext();
      return ɵɵresetView(ctx_r48.onMultipleContainerKeyDown($event));
    });
    ɵɵtemplate(2, AutoComplete_ul_4_li_2_Template, 7, 15, "li", 21);
    ɵɵelementStart(3, "li", 22)(4, "input", 23, 14);
    ɵɵlistener("input", function AutoComplete_ul_4_Template_input_input_4_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r49 = ɵɵnextContext();
      return ɵɵresetView(ctx_r49.onInput($event));
    })("keydown", function AutoComplete_ul_4_Template_input_keydown_4_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r50 = ɵɵnextContext();
      return ɵɵresetView(ctx_r50.onKeyDown($event));
    })("change", function AutoComplete_ul_4_Template_input_change_4_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r51 = ɵɵnextContext();
      return ɵɵresetView(ctx_r51.onInputChange($event));
    })("focus", function AutoComplete_ul_4_Template_input_focus_4_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r52 = ɵɵnextContext();
      return ɵɵresetView(ctx_r52.onInputFocus($event));
    })("blur", function AutoComplete_ul_4_Template_input_blur_4_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r53 = ɵɵnextContext();
      return ɵɵresetView(ctx_r53.onInputBlur($event));
    })("paste", function AutoComplete_ul_4_Template_input_paste_4_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r54 = ɵɵnextContext();
      return ɵɵresetView(ctx_r54.onInputPaste($event));
    })("keyup", function AutoComplete_ul_4_Template_input_keyup_4_listener($event) {
      ɵɵrestoreView(_r46);
      const ctx_r55 = ɵɵnextContext();
      return ɵɵresetView(ctx_r55.onInputKeyUp($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    let tmp_23_0;
    ɵɵclassMap(ctx_r3.multiContainerClass);
    ɵɵproperty("tabindex", -1);
    ɵɵattribute("aria-orientation", "horizontal")("aria-activedescendant", ctx_r3.focused ? ctx_r3.focusedMultipleOptionId : void 0);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.modelValue());
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r3.inputStyleClass);
    ɵɵproperty("autofocus", ctx_r3.autofocus)("ngClass", ctx_r3.inputClass)("ngStyle", ctx_r3.inputStyle)("autocomplete", ctx_r3.autocomplete)("required", ctx_r3.required)("maxlength", ctx_r3.maxlength)("tabindex", !ctx_r3.disabled ? ctx_r3.tabindex : -1)("readonly", ctx_r3.readonly)("disabled", ctx_r3.disabled);
    ɵɵattribute("type", ctx_r3.type)("id", ctx_r3.inputId)("name", ctx_r3.name)("placeholder", !ctx_r3.filled ? ctx_r3.placeholder : null)("size", ctx_r3.size)("aria-label", ctx_r3.ariaLabel)("aria-labelledby", ctx_r3.ariaLabelledBy)("aria-required", ctx_r3.required)("aria-expanded", (tmp_23_0 = ctx_r3.overlayVisible) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : false)("aria-controls", ctx_r3.overlayVisible ? ctx_r3.id + "_list" : null)("aria-aria-activedescendant", ctx_r3.focused ? ctx_r3.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_5_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 36);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-autocomplete-loader")("spin", true);
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 37);
    ɵɵtemplate(1, AutoComplete_ng_container_5_span_2_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r57 = ɵɵnextContext(2);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r57.loadingIconTemplate);
  }
}
function AutoComplete_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_ng_container_5_SpinnerIcon_1_Template, 1, 3, "SpinnerIcon", 34)(2, AutoComplete_ng_container_5_span_2_Template, 2, 2, "span", 35);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.loadingIconTemplate);
  }
}
function AutoComplete_button_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 41);
  }
  if (rf & 2) {
    const ctx_r61 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r61.dropdownIcon);
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function AutoComplete_button_6_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_button_6_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_button_6_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template, 1, 0, "ChevronDownIcon", 3)(2, AutoComplete_button_6_ng_container_3_2_Template, 1, 0, null, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r62 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r62.dropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r62.dropdownIconTemplate);
  }
}
function AutoComplete_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38, 39);
    ɵɵlistener("click", function AutoComplete_button_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r67);
      const ctx_r66 = ɵɵnextContext();
      return ɵɵresetView(ctx_r66.handleDropdownClick($event));
    });
    ɵɵtemplate(2, AutoComplete_button_6_span_2_Template, 1, 2, "span", 40)(3, AutoComplete_button_6_ng_container_3_Template, 3, 2, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r5.disabled);
    ɵɵattribute("aria-label", ctx_r5.dropdownAriaLabel)("tabindex", ctx_r5.tabindex);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r5.dropdownIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r5.dropdownIcon);
  }
}
function AutoComplete_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c10 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
function AutoComplete_p_scroller_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const items_r71 = ctx.$implicit;
    const scrollerOptions_r72 = ctx.options;
    ɵɵnextContext(2);
    const _r11 = ɵɵreference(14);
    ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c10, items_r71, scrollerOptions_r72));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c11 = (a0) => ({
  options: a0
});
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const scrollerOptions_r75 = ctx.options;
    const ctx_r74 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r74.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c11, scrollerOptions_r75));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 45);
    ɵɵelementContainerEnd();
  }
}
var _c12 = (a0) => ({
  height: a0
});
function AutoComplete_p_scroller_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 42, 43);
    ɵɵlistener("onLazyLoad", function AutoComplete_p_scroller_11_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r78);
      const ctx_r77 = ɵɵnextContext();
      return ɵɵresetView(ctx_r77.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, AutoComplete_p_scroller_11_ng_template_2_Template, 1, 5, "ng-template", 44)(3, AutoComplete_p_scroller_11_ng_container_3_Template, 2, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(8, _c12, ctx_r8.scrollHeight));
    ɵɵproperty("items", ctx_r8.visibleOptions())("itemSize", ctx_r8.virtualScrollItemSize || ctx_r8._itemSize)("autoSize", true)("lazy", ctx_r8.lazy)("options", ctx_r8.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r8.loaderTemplate);
  }
}
function AutoComplete_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c13 = () => ({});
function AutoComplete_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const _r11 = ɵɵreference(14);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c10, ctx_r9.visibleOptions(), ɵɵpureFunction0(2, _c13)));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r85 = ɵɵnextContext(2).$implicit;
    const ctx_r89 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r89.getOptionGroupLabel(option_r85.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 50);
    ɵɵtemplate(2, AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 3)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r93 = ɵɵnextContext();
    const i_r86 = ctx_r93.index;
    const option_r85 = ctx_r93.$implicit;
    const scrollerOptions_r81 = ɵɵnextContext().options;
    const ctx_r87 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c12, scrollerOptions_r81.itemSize + "px"));
    ɵɵattribute("id", ctx_r87.id + "_" + ctx_r87.getOptionIndex(i_r86, scrollerOptions_r81));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r87.groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r87.groupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c9, option_r85.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r85 = ɵɵnextContext(2).$implicit;
    const ctx_r94 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r94.getOptionLabel(option_r85));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c14 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
var _c15 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 51);
    ɵɵlistener("click", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      ɵɵrestoreView(_r99);
      const option_r85 = ɵɵnextContext().$implicit;
      const ctx_r97 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r97.onOptionSelect($event, option_r85));
    })("mouseenter", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      ɵɵrestoreView(_r99);
      const i_r86 = ɵɵnextContext().index;
      const scrollerOptions_r81 = ɵɵnextContext().options;
      const ctx_r100 = ɵɵnextContext();
      return ɵɵresetView(ctx_r100.onOptionMouseEnter($event, ctx_r100.getOptionIndex(i_r86, scrollerOptions_r81)));
    });
    ɵɵtemplate(2, AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template, 2, 1, "span", 3)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r104 = ɵɵnextContext();
    const option_r85 = ctx_r104.$implicit;
    const i_r86 = ctx_r104.index;
    const scrollerOptions_r81 = ɵɵnextContext().options;
    const ctx_r88 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(12, _c12, scrollerOptions_r81.itemSize + "px"))("ngClass", ɵɵpureFunction3(14, _c14, ctx_r88.isSelected(option_r85), ctx_r88.focusedOptionIndex() === ctx_r88.getOptionIndex(i_r86, scrollerOptions_r81), ctx_r88.isOptionDisabled(option_r85)));
    ɵɵattribute("id", ctx_r88.id + "_" + ctx_r88.getOptionIndex(i_r86, scrollerOptions_r81))("aria-label", ctx_r88.getOptionLabel(option_r85))("aria-selected", ctx_r88.isSelected(option_r85))("aria-disabled", ctx_r88.isOptionDisabled(option_r85))("data-p-focused", ctx_r88.focusedOptionIndex() === ctx_r88.getOptionIndex(i_r86, scrollerOptions_r81))("aria-setsize", ctx_r88.ariaSetSize)("aria-posinset", ctx_r88.getAriaPosInset(ctx_r88.getOptionIndex(i_r86, scrollerOptions_r81)));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r88.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r88.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(18, _c15, option_r85, scrollerOptions_r81.getOptions ? scrollerOptions_r81.getOptions(i_r86) : i_r86));
  }
}
function AutoComplete_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 3)(1, AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template, 4, 21, "ng-container", 3);
  }
  if (rf & 2) {
    const option_r85 = ctx.$implicit;
    const ctx_r83 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r83.isOptionGroup(option_r85));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r83.isOptionGroup(option_r85));
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r105 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r105.searchResultMessageText, " ");
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 54);
  }
}
function AutoComplete_ng_template_13_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 52);
    ɵɵtemplate(1, AutoComplete_ng_template_13_li_3_ng_container_1_Template, 2, 1, "ng-container", 53)(2, AutoComplete_ng_template_13_li_3_ng_container_2_Template, 2, 0, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r81 = ɵɵnextContext().options;
    const ctx_r84 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c12, scrollerOptions_r81.itemSize + "px"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r84.emptyTemplate)("ngIfElse", ctx_r84.empty);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r84.emptyTemplate);
  }
}
function AutoComplete_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 46, 47);
    ɵɵtemplate(2, AutoComplete_ng_template_13_ng_template_2_Template, 2, 2, "ng-template", 48)(3, AutoComplete_ng_template_13_li_3_Template, 3, 6, "li", 49);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const items_r80 = ctx.$implicit;
    const scrollerOptions_r81 = ctx.options;
    const ctx_r10 = ɵɵnextContext();
    ɵɵstyleMap(scrollerOptions_r81.contentStyle);
    ɵɵproperty("ngClass", scrollerOptions_r81.contentStyleClass);
    ɵɵattribute("id", ctx_r10.id + "_list")("aria-label", ctx_r10.listLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", items_r80);
    ɵɵadvance();
    ɵɵproperty("ngIf", !items_r80 || items_r80 && items_r80.length === 0 && ctx_r10.showEmptyMessage);
  }
}
function AutoComplete_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutoComplete),
  multi: true
};
var AutoComplete = class _AutoComplete {
  document;
  el;
  renderer;
  cd;
  config;
  overlayService;
  zone;
  /**
   * Minimum number of characters to initiate a search.
   * @group Props
   */
  minLength = 1;
  /**
   * Delay between keystrokes to wait before sending a query.
   * @group Props
   */
  delay = 300;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Hint text for the input field.
   * @group Props
   */
  placeholder;
  /**
   * When present, it specifies that the input cannot be typed.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Maximum height of the suggestions panel.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Maximum number of character allows in the input field.
   * @group Props
   */
  maxlength;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * Size of the input field.
   * @group Props
   */
  size;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When enabled, highlights the first item in the list by default.
   * @group Props
   */
  autoHighlight;
  /**
   * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
   * @group Props
   */
  forceSelection;
  /**
   * Type of the input, defaults to "text".
   * @group Props
   */
  type = "text";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the dropdown button for accessibility.
   * @group Props
   */
  dropdownAriaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Ensures uniqueness of selected items on multiple mode.
   * @group Props
   */
  unique = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * Whether to run a query when input receives focus.
   * @group Props
   */
  completeOnFocus = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Field of a suggested object to resolve and display.
   * @group Props
   * @deprecated use optionLabel property instead
   */
  field;
  /**
   * Displays a button next to the input field when enabled.
   * @group Props
   */
  dropdown;
  /**
   * Whether to show the empty message or not.
   * @group Props
   */
  showEmptyMessage = true;
  /**
   * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
   * @group Props
   */
  dropdownMode = "blank";
  /**
   * Specifies if multiple values can be selected.
   * @group Props
   */
  multiple;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete = "off";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Options for the overlay element.
   * @group Props
   */
  overlayOptions;
  /**
   * An array of suggestions to display.
   * @group Props
   */
  get suggestions() {
    return this._suggestions();
  }
  set suggestions(value) {
    this._suggestions.set(value);
    this.handleSuggestionsChange();
  }
  /**
   * Element dimensions of option for virtual scrolling.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * Property name or getter function to use as the label of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Unique identifier of the component.
   * @group Props
   */
  id;
  /**
   * Text to display when the search is active. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} results are available'
   */
  searchMessage;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue 'No selected item'
   */
  emptySelectionMessage;
  /**
   * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} items selected'
   */
  selectionMessage;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * When enabled, the focused option is selected.
   * @group Props
   */
  selectOnFocus;
  /**
   * Locale to use in searching. The default locale is the host environment's current locale.
   * @group Props
   */
  searchLocale;
  /**
   * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
   * @group Props
   */
  optionDisabled;
  /**
   * When enabled, the hovered option will be focused.
   * @group Props
   */
  focusOnHover;
  /**
   * Callback to invoke to search for suggestions.
   * @param {AutoCompleteCompleteEvent} event - Custom complete event.
   * @group Emits
   */
  completeMethod = new EventEmitter();
  /**
   * Callback to invoke when a suggestion is selected.
   * @param {AutoCompleteSelectEvent} event - custom select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when a selected value is removed.
   * @param {AutoCompleteUnselectEvent} event - custom unselect event.
   * @group Emits
   */
  onUnselect = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke to when dropdown button is clicked.
   * @param {AutoCompleteDropdownClickEvent} event - custom dropdown click event.
   * @group Emits
   */
  onDropdownClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke on input key up.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyUp = new EventEmitter();
  /**
   * Callback to invoke on overlay is shown.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on overlay is hidden.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke on lazy load data.
   * @param {AutoCompleteLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  containerEL;
  inputEL;
  multiInputEl;
  multiContainerEL;
  dropdownButton;
  itemsViewChild;
  scroller;
  overlayViewChild;
  templates;
  _itemSize;
  itemsWrapper;
  itemTemplate;
  emptyTemplate;
  headerTemplate;
  footerTemplate;
  selectedItemTemplate;
  groupTemplate;
  loaderTemplate;
  removeIconTemplate;
  loadingIconTemplate;
  clearIconTemplate;
  dropdownIconTemplate;
  value;
  _suggestions = signal(null);
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  timeout;
  overlayVisible;
  suggestionsUpdated;
  highlightOption;
  highlightOptionChanged;
  focused = false;
  _filled;
  get filled() {
    return this._filled;
  }
  set filled(value) {
    this._filled = value;
  }
  loading;
  scrollHandler;
  listId;
  searchTimeout;
  dirty = false;
  modelValue = signal(null);
  focusedMultipleOptionIndex = signal(-1);
  focusedOptionIndex = signal(-1);
  visibleOptions = computed(() => {
    return this.group ? this.flatOptions(this._suggestions()) : this._suggestions() || [];
  });
  inputValue = computed(() => {
    const modelValue = this.modelValue();
    if (modelValue) {
      if (typeof modelValue === "object") {
        const label = this.getOptionLabel(modelValue);
        return label != null ? label : modelValue;
      } else {
        return modelValue;
      }
    } else {
      return "";
    }
  });
  get focusedMultipleOptionId() {
    return this.focusedMultipleOptionIndex() !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}` : null;
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  get containerClass() {
    return {
      "p-autocomplete p-component p-inputwrapper": true,
      "p-disabled": this.disabled,
      "p-focus": this.focused,
      "p-autocomplete-dd": this.dropdown,
      "p-autocomplete-multiple": this.multiple,
      "p-inputwrapper-focus": this.focused,
      "p-overlay-open": this.overlayVisible
    };
  }
  get multiContainerClass() {
    return "p-autocomplete-multiple-container p-component p-inputtext";
  }
  get panelClass() {
    return {
      "p-autocomplete-panel p-component": true,
      "p-input-filled": this.config.inputStyle === "filled",
      "p-ripple-disabled": this.config.ripple === false
    };
  }
  get inputClass() {
    return {
      "p-autocomplete-input p-inputtext p-component": !this.multiple,
      "p-autocomplete-dd-input": this.dropdown
    };
  }
  get searchResultMessageText() {
    return ObjectUtils.isNotEmpty(this.visibleOptions()) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions().length) : this.emptySearchMessageText;
  }
  get searchMessageText() {
    return this.searchMessage || this.config.translation.searchMessage || "";
  }
  get emptySearchMessageText() {
    return this.emptyMessage || this.config.translation.emptySearchMessage || "";
  }
  get selectionMessageText() {
    return this.selectionMessage || this.config.translation.selectionMessage || "";
  }
  get emptySelectionMessageText() {
    return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || "";
  }
  get selectedMessageText() {
    return this.hasSelectedOption() ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.modelValue().length : "1") : this.emptySelectionMessageText;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  constructor(document, el, renderer, cd, config, overlayService, zone) {
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.zone = zone;
    effect(() => {
      this.filled = ObjectUtils.isNotEmpty(this.modelValue());
    });
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.cd.detectChanges();
  }
  ngAfterViewChecked() {
    if (this.suggestionsUpdated && this.overlayViewChild) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
        this.suggestionsUpdated = false;
      });
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "removetokenicon":
          this.removeIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  handleSuggestionsChange() {
    if (this.loading) {
      this._suggestions() ? this.show() : !!this.emptyTemplate ? this.show() : this.hide();
      const focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.suggestionsUpdated = true;
      this.loading = false;
      this.cd.markForCheck();
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  isOptionGroup(option) {
    return this.optionGroupLabel && option.optionGroup && option.group;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findLastOptionIndex() {
    return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
  }
  isSelected(option) {
    if (this.multiple) {
      return this.unique ? this.modelValue()?.find((model) => ObjectUtils.equals(model, this.getOptionValue(option), this.equalityKey())) : false;
    }
    return ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  isOptionMatched(option, value) {
    return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
  }
  isInputClicked(event) {
    return event.target === this.inputEL.nativeElement;
  }
  isDropdownClicked(event) {
    return this.dropdownButton?.nativeElement ? event.target === this.dropdownButton.nativeElement || this.dropdownButton.nativeElement.contains(event.target) : false;
  }
  equalityKey() {
    return this.dataKey;
  }
  onContainerClick(event) {
    if (this.disabled || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
      return;
    }
    if (!this.overlayViewChild || !this.overlayViewChild.overlayViewChild?.nativeElement.contains(event.target)) {
      DomHandler.focus(this.inputEL.nativeElement);
    }
  }
  handleDropdownClick(event) {
    let query = void 0;
    if (this.overlayVisible) {
      this.hide(true);
    } else {
      DomHandler.focus(this.inputEL.nativeElement);
      query = this.inputEL.nativeElement.value;
      if (this.dropdownMode === "blank")
        this.search(event, "", "dropdown");
      else if (this.dropdownMode === "current")
        this.search(event, query, "dropdown");
    }
    this.onDropdownClick.emit({
      originalEvent: event,
      query
    });
  }
  onInput(event) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    let query = event.target.value.split("").slice(0, this.maxlength).join("");
    if (!this.multiple && !this.forceSelection) {
      this.updateModel(query);
    }
    if (query.length === 0 && !this.multiple) {
      this.onClear.emit();
      setTimeout(() => {
        this.hide();
      }, this.delay / 2);
    } else {
      if (query.length >= this.minLength) {
        this.focusedOptionIndex.set(-1);
        this.searchTimeout = setTimeout(() => {
          this.search(event, query, "input");
        }, this.delay);
      } else {
        this.hide();
      }
    }
  }
  onInputChange(event) {
    if (this.forceSelection) {
      let valid = false;
      if (this.visibleOptions()) {
        const matchedValue = this.visibleOptions().find((option) => this.isOptionMatched(option, this.inputEL.nativeElement.value || ""));
        if (matchedValue !== void 0) {
          valid = true;
          !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
        }
      }
      if (!valid) {
        this.inputEL.nativeElement.value = "";
        !this.multiple && this.updateModel(null);
      }
    }
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    if (!this.dirty && this.completeOnFocus) {
      this.search(event, event.target.value, "focus");
    }
    this.dirty = true;
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onMultipleContainerFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
  }
  onMultipleContainerBlur(event) {
    this.focusedMultipleOptionIndex.set(-1);
    this.focused = false;
  }
  onMultipleContainerKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "ArrowLeft":
        this.onArrowLeftKeyOnMultiple(event);
        break;
      case "ArrowRight":
        this.onArrowRightKeyOnMultiple(event);
        break;
      case "Backspace":
        this.onBackspaceKeyOnMultiple(event);
        break;
      default:
        break;
    }
  }
  onInputBlur(event) {
    this.dirty = false;
    this.focused = false;
    this.focusedOptionIndex.set(-1);
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onInputPaste(event) {
    this.onKeyDown(event);
  }
  onInputKeyUp(event) {
    this.onKeyUp.emit(event);
  }
  onKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      return;
    }
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    this.changeFocusedOptionIndex(event, optionIndex);
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event) {
    if (!this.overlayVisible) {
      return;
    }
    if (event.altKey) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onArrowLeftKey(event) {
    const target = event.currentTarget;
    this.focusedOptionIndex.set(-1);
    if (this.multiple) {
      if (ObjectUtils.isEmpty(target.value) && this.hasSelectedOption()) {
        DomHandler.focus(this.multiContainerEL.nativeElement);
        this.focusedMultipleOptionIndex.set(this.modelValue().length);
      } else {
        event.stopPropagation();
      }
    }
  }
  onArrowRightKey(event) {
    this.focusedOptionIndex.set(-1);
    this.multiple && event.stopPropagation();
  }
  onHomeKey(event) {
    const {
      currentTarget
    } = event;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
    this.focusedOptionIndex.set(-1);
    event.preventDefault();
  }
  onEndKey(event) {
    const {
      currentTarget
    } = event;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
    this.focusedOptionIndex.set(-1);
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedOptionIndex() !== -1) {
      this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
    }
    this.overlayVisible && this.hide();
  }
  onBackspaceKey(event) {
    if (this.multiple) {
      if (ObjectUtils.isNotEmpty(this.modelValue()) && !this.inputEL.nativeElement.value) {
        const removedValue = this.modelValue()[this.modelValue().length - 1];
        const newValue = this.modelValue().slice(0, -1);
        this.updateModel(newValue);
        this.onUnselect.emit({
          originalEvent: event,
          value: removedValue
        });
      }
      event.stopPropagation();
    }
  }
  onArrowLeftKeyOnMultiple(event) {
    const optionIndex = this.focusedMultipleOptionIndex() < 1 ? 0 : this.focusedMultipleOptionIndex() - 1;
    this.focusedMultipleOptionIndex.set(optionIndex);
  }
  onArrowRightKeyOnMultiple(event) {
    let optionIndex = this.focusedMultipleOptionIndex();
    optionIndex++;
    this.focusedMultipleOptionIndex.set(optionIndex);
    if (optionIndex > this.modelValue().length - 1) {
      this.focusedMultipleOptionIndex.set(-1);
      DomHandler.focus(this.inputEL.nativeElement);
    }
  }
  onBackspaceKeyOnMultiple(event) {
    if (this.focusedMultipleOptionIndex() !== -1) {
      this.removeOption(event, this.focusedMultipleOptionIndex());
    }
  }
  onOptionSelect(event, option, isHide = true) {
    const value = this.getOptionValue(option);
    if (this.multiple) {
      this.inputEL.nativeElement.value = "";
      if (!this.isSelected(option)) {
        this.updateModel([...this.modelValue() || [], value]);
      }
    } else {
      this.updateModel(value);
    }
    this.onSelect.emit({
      originalEvent: event,
      value: option
    });
    isHide && this.hide(true);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  search(event, query, source) {
    if (query === void 0 || query === null) {
      return;
    }
    if (source === "input" && query.trim().length === 0) {
      return;
    }
    this.loading = true;
    this.completeMethod.emit({
      originalEvent: event,
      query
    });
  }
  removeOption(event, index) {
    event.stopPropagation();
    const removedOption = this.modelValue()[index];
    const value = this.modelValue().filter((_, i) => i !== index).map((option) => this.getOptionValue(option));
    this.updateModel(value);
    this.onUnselect.emit({
      originalEvent: event,
      value: removedOption
    });
    DomHandler.focus(this.inputEL.nativeElement);
  }
  updateModel(value) {
    this.value = value;
    this.modelValue.set(value);
    this.onModelChange(value);
    this.updateInputValue();
    this.cd.markForCheck();
  }
  updateInputValue() {
    if (this.inputEL && this.inputEL.nativeElement) {
      if (!this.multiple) {
        this.inputEL.nativeElement.value = this.inputValue();
      } else {
        this.inputEL.nativeElement.value = "";
      }
    }
  }
  autoUpdateModel() {
    if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption()) {
      const focusedOptionIndex = this.findFirstFocusedOptionIndex();
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus || this.autoHighlight) {
        this.onOptionSelect(event, this.visibleOptions()[index], false);
      }
    }
  }
  show(isFocus = false) {
    this.dirty = true;
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    isFocus && DomHandler.focus(this.inputEL.nativeElement);
    if (isFocus) {
      DomHandler.focus(this.inputEL.nativeElement);
    }
    this.onShow.emit();
    this.cd.markForCheck();
  }
  hide(isFocus = false) {
    const _hide = () => {
      this.dirty = isFocus;
      this.overlayVisible = false;
      this.focusedOptionIndex.set(-1);
      isFocus && DomHandler.focus(this.inputEL.nativeElement);
      this.onHide.emit();
      this.cd.markForCheck();
    };
    setTimeout(() => {
      _hide();
    }, 0);
  }
  clear() {
    this.updateModel(null);
    this.inputEL.nativeElement.value = "";
    this.onClear.emit();
  }
  writeValue(value) {
    this.value = value;
    this.modelValue.set(value);
    this.updateInputValue();
    this.cd.markForCheck();
  }
  hasSelectedOption() {
    return ObjectUtils.isNotEmpty(this.modelValue());
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  getOptionLabel(option) {
    return this.field || this.optionLabel ? ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return option;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-autocomplete-panel");
      if (this.virtualScroll) {
        this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
        this.scroller.viewInit();
      }
      if (this.visibleOptions() && this.visibleOptions().length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = DomHandler.findSingle(this.itemsWrapper, ".p-autocomplete-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "center"
            });
          }
        }
      }
    }
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function AutoComplete_Factory(t) {
    return new (t || _AutoComplete)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AutoComplete,
    selectors: [["p-autoComplete"]],
    contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function AutoComplete_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
        ɵɵviewQuery(_c7, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerEL = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputEL = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.multiInputEl = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.multiContainerEL = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function AutoComplete_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused && !ctx.disabled || ctx.autofocus || ctx.overlayVisible)("p-autocomplete-clearable", ctx.showClear && !ctx.disabled);
      }
    },
    inputs: {
      minLength: "minLength",
      delay: "delay",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      readonly: "readonly",
      disabled: "disabled",
      scrollHeight: "scrollHeight",
      lazy: "lazy",
      virtualScroll: "virtualScroll",
      virtualScrollItemSize: "virtualScrollItemSize",
      virtualScrollOptions: "virtualScrollOptions",
      maxlength: "maxlength",
      name: "name",
      required: "required",
      size: "size",
      appendTo: "appendTo",
      autoHighlight: "autoHighlight",
      forceSelection: "forceSelection",
      type: "type",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      ariaLabel: "ariaLabel",
      dropdownAriaLabel: "dropdownAriaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      dropdownIcon: "dropdownIcon",
      unique: "unique",
      group: "group",
      completeOnFocus: "completeOnFocus",
      showClear: "showClear",
      field: "field",
      dropdown: "dropdown",
      showEmptyMessage: "showEmptyMessage",
      dropdownMode: "dropdownMode",
      multiple: "multiple",
      tabindex: "tabindex",
      dataKey: "dataKey",
      emptyMessage: "emptyMessage",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autofocus: "autofocus",
      autocomplete: "autocomplete",
      optionGroupChildren: "optionGroupChildren",
      optionGroupLabel: "optionGroupLabel",
      overlayOptions: "overlayOptions",
      suggestions: "suggestions",
      itemSize: "itemSize",
      optionLabel: "optionLabel",
      id: "id",
      searchMessage: "searchMessage",
      emptySelectionMessage: "emptySelectionMessage",
      selectionMessage: "selectionMessage",
      autoOptionFocus: "autoOptionFocus",
      selectOnFocus: "selectOnFocus",
      searchLocale: "searchLocale",
      optionDisabled: "optionDisabled",
      focusOnHover: "focusOnHover"
    },
    outputs: {
      completeMethod: "completeMethod",
      onSelect: "onSelect",
      onUnselect: "onUnselect",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onDropdownClick: "onDropdownClick",
      onClear: "onClear",
      onKeyUp: "onKeyUp",
      onShow: "onShow",
      onHide: "onHide",
      onLazyLoad: "onLazyLoad"
    },
    features: [ɵɵProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR])],
    decls: 18,
    vars: 26,
    consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "autofocus", "ngClass", "ngStyle", "class", "type", "autocomplete", "required", "name", "maxlength", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup", 4, "ngIf"], [4, "ngIf"], ["role", "listbox", 3, "class", "tabindex", "focus", "blur", "keydown", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown p-button-icon-only", "pRipple", "", 3, "disabled", "click", 4, "ngIf"], [3, "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions", "visibleChange", "onAnimationStart", "onHide"], ["overlay", ""], [3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["buildInItems", ""], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "autofocus", "ngClass", "ngStyle", "type", "autocomplete", "required", "name", "maxlength", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup"], ["focusInput", ""], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-autocomplete-clear-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-autocomplete-clear-icon", 3, "click"], ["role", "listbox", 3, "tabindex", "focus", "blur", "keydown"], ["multiContainer", ""], ["role", "option", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-autocomplete-input-token"], ["pAutoFocus", "", "role", "combobox", "aria-autocomplete", "list", 3, "autofocus", "ngClass", "ngStyle", "autocomplete", "required", "maxlength", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup"], ["role", "option", 3, "ngClass"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], [1, "p-autocomplete-token-icon", 3, "click"], [3, "styleClass", 4, "ngIf"], ["class", "p-autocomplete-token-icon", 4, "ngIf"], [1, "p-autocomplete-token-label"], [3, "styleClass"], [1, "p-autocomplete-token-icon"], [3, "styleClass", "spin", 4, "ngIf"], ["class", "p-autocomplete-loader pi-spin ", 4, "ngIf"], [3, "styleClass", "spin"], [1, "p-autocomplete-loader", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", "p-button-icon-only", 3, "disabled", "click"], ["ddBtn", ""], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "items", "itemSize", "autoSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-autocomplete-items", 3, "ngClass"], ["items", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-autocomplete-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-autocomplete-item-group", 3, "ngStyle"], ["pRipple", "", "role", "option", 1, "p-autocomplete-item", 3, "ngStyle", "ngClass", "click", "mouseenter"], ["role", "option", 1, "p-autocomplete-empty-message", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["empty", ""]],
    template: function AutoComplete_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵlistener("click", function AutoComplete_Template_div_click_0_listener($event) {
          return ctx.onContainerClick($event);
        });
        ɵɵtemplate(2, AutoComplete_input_2_Template, 2, 23, "input", 2)(3, AutoComplete_ng_container_3_Template, 3, 2, "ng-container", 3)(4, AutoComplete_ul_4_Template, 6, 28, "ul", 4)(5, AutoComplete_ng_container_5_Template, 3, 2, "ng-container", 3)(6, AutoComplete_button_6_Template, 4, 5, "button", 5);
        ɵɵelementStart(7, "p-overlay", 6, 7);
        ɵɵtwoWayListener("visibleChange", function AutoComplete_Template_p_overlay_visibleChange_7_listener($event) {
          ɵɵtwoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return $event;
        });
        ɵɵlistener("onAnimationStart", function AutoComplete_Template_p_overlay_onAnimationStart_7_listener($event) {
          return ctx.onOverlayAnimationStart($event);
        })("onHide", function AutoComplete_Template_p_overlay_onHide_7_listener() {
          return ctx.hide();
        });
        ɵɵelementStart(9, "div", 8);
        ɵɵtemplate(10, AutoComplete_ng_container_10_Template, 1, 0, "ng-container", 9)(11, AutoComplete_p_scroller_11_Template, 4, 10, "p-scroller", 10)(12, AutoComplete_ng_container_12_Template, 2, 6, "ng-container", 3)(13, AutoComplete_ng_template_13_Template, 4, 7, "ng-template", null, 11, ɵɵtemplateRefExtractor)(15, AutoComplete_ng_container_15_Template, 1, 0, "ng-container", 9);
        ɵɵelementEnd();
        ɵɵelementStart(16, "span", 12);
        ɵɵtext(17);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.multiple);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.filled && !ctx.disabled && ctx.showClear && !ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.multiple);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dropdown);
        ɵɵadvance();
        ɵɵtwoWayProperty("visible", ctx.overlayVisible);
        ɵɵproperty("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
        ɵɵadvance(2);
        ɵɵclassMap(ctx.panelStyleClass);
        ɵɵstyleProp("max-height", ctx.virtualScroll ? "auto" : ctx.scrollHeight);
        ɵɵproperty("ngClass", ctx.panelClass)("ngStyle", ctx.panelStyle);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.virtualScroll);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.virtualScroll);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.footerTemplate);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.selectedMessageText, " ");
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, ButtonDirective, Ripple, Scroller, AutoFocus, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon],
    styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoComplete, [{
    type: Component,
    args: [{
      selector: "p-autoComplete",
      template: `
        <div #container [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">
            <input
                *ngIf="!multiple"
                #focusInput
                pAutoFocus
                [autofocus]="autofocus"
                [ngClass]="inputClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [type]="type"
                [attr.value]="inputValue()"
                [attr.id]="inputId"
                [autocomplete]="autocomplete"
                [required]="required"
                [name]="name"
                aria-autocomplete="list"
                role="combobox"
                [attr.placeholder]="placeholder"
                [attr.size]="size"
                [maxlength]="maxlength"
                [tabindex]="!disabled ? tabindex : -1"
                [readonly]="readonly"
                [disabled]="disabled"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-required]="required"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.aria-aria-activedescendant]="focused ? focusedOptionId : undefined"
                (input)="onInput($event)"
                (keydown)="onKeyDown($event)"
                (change)="onInputChange($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (paste)="onInputPaste($event)"
                (keyup)="onInputKeyUp($event)"
            />
            <ng-container *ngIf="filled && !disabled && showClear && !loading">
                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-autocomplete-clear-icon'" (click)="clear()" [attr.aria-hidden]="true" />
                <span *ngIf="clearIconTemplate" class="p-autocomplete-clear-icon" (click)="clear()" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ul
                *ngIf="multiple"
                #multiContainer
                [class]="multiContainerClass"
                [tabindex]="-1"
                role="listbox"
                [attr.aria-orientation]="'horizontal'"
                [attr.aria-activedescendant]="focused ? focusedMultipleOptionId : undefined"
                (focus)="onMultipleContainerFocus($event)"
                (blur)="onMultipleContainerBlur($event)"
                (keydown)="onMultipleContainerKeyDown($event)"
            >
                <li
                    #token
                    *ngFor="let option of modelValue(); let i = index"
                    [ngClass]="{ 'p-autocomplete-token': true, 'p-focus': focusedMultipleOptionIndex() === i }"
                    [attr.id]="id + '_multiple_option_' + i"
                    role="option"
                    [attr.aria-label]="getOptionLabel(option)"
                    [attr.aria-setsize]="modelValue().length"
                    [attr.aria-posinset]="i + 1"
                    [attr.aria-selected]="true"
                >
                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: { $implicit: option }"></ng-container>
                    <span *ngIf="!selectedItemTemplate" class="p-autocomplete-token-label">{{ getOptionLabel(option) }}</span>
                    <span class="p-autocomplete-token-icon" (click)="removeOption($event, i)">
                        <TimesCircleIcon [styleClass]="'p-autocomplete-token-icon'" *ngIf="!removeIconTemplate" [attr.aria-hidden]="true" />
                        <span *ngIf="removeIconTemplate" class="p-autocomplete-token-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="removeIconTemplate"></ng-template>
                        </span>
                    </span>
                </li>
                <li class="p-autocomplete-input-token" role="option">
                    <input
                        #focusInput
                        pAutoFocus
                        [autofocus]="autofocus"
                        [ngClass]="inputClass"
                        [ngStyle]="inputStyle"
                        [class]="inputStyleClass"
                        [attr.type]="type"
                        [attr.id]="inputId"
                        [autocomplete]="autocomplete"
                        [required]="required"
                        [attr.name]="name"
                        role="combobox"
                        [attr.placeholder]="!filled ? placeholder : null"
                        [attr.size]="size"
                        aria-autocomplete="list"
                        [maxlength]="maxlength"
                        [tabindex]="!disabled ? tabindex : -1"
                        [readonly]="readonly"
                        [disabled]="disabled"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-labelledby]="ariaLabelledBy"
                        [attr.aria-required]="required"
                        [attr.aria-expanded]="overlayVisible ?? false"
                        [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                        [attr.aria-aria-activedescendant]="focused ? focusedOptionId : undefined"
                        (input)="onInput($event)"
                        (keydown)="onKeyDown($event)"
                        (change)="onInputChange($event)"
                        (focus)="onInputFocus($event)"
                        (blur)="onInputBlur($event)"
                        (paste)="onInputPaste($event)"
                        (keyup)="onInputKeyUp($event)"
                    />
                </li>
            </ul>
            <ng-container *ngIf="loading">
                <SpinnerIcon *ngIf="!loadingIconTemplate" [styleClass]="'p-autocomplete-loader'" [spin]="true" [attr.aria-hidden]="true" />
                <span *ngIf="loadingIconTemplate" class="p-autocomplete-loader pi-spin " [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button #ddBtn type="button" pButton [attr.aria-label]="dropdownAriaLabel" class="p-autocomplete-dropdown p-button-icon-only" [disabled]="disabled" pRipple (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex">
                <span *ngIf="dropdownIcon" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>
                <ng-container *ngIf="!dropdownIcon">
                    <ChevronDownIcon *ngIf="!dropdownIconTemplate" />
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </ng-container>
            </button>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <div [ngClass]="panelClass" [style.max-height]="virtualScroll ? 'auto' : scrollHeight" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <p-scroller
                        *ngIf="virtualScroll"
                        #scroller
                        [items]="visibleOptions()"
                        [style]="{ height: scrollHeight }"
                        [itemSize]="virtualScrollItemSize || _itemSize"
                        [autoSize]="true"
                        [lazy]="lazy"
                        (onLazyLoad)="onLazyLoad.emit($event)"
                        [options]="virtualScrollOptions"
                    >
                        <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                        </ng-template>
                        <ng-container *ngIf="loaderTemplate">
                            <ng-template pTemplate="loader" let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                            </ng-template>
                        </ng-container>
                    </p-scroller>
                    <ng-container *ngIf="!virtualScroll">
                        <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                    </ng-container>

                    <ng-template #buildInItems let-items let-scrollerOptions="options">
                        <ul #items class="p-autocomplete-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" [attr.id]="id + '_list'" [attr.aria-label]="listLabel">
                            <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                <ng-container *ngIf="isOptionGroup(option)">
                                    <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-autocomplete-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                        <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                    </li>
                                </ng-container>
                                <ng-container *ngIf="!isOptionGroup(option)">
                                    <li
                                        class="p-autocomplete-item"
                                        pRipple
                                        [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                        [ngClass]="{ 'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex() === getOptionIndex(i, scrollerOptions), 'p-disabled': isOptionDisabled(option) }"
                                        [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                        role="option"
                                        [attr.aria-label]="getOptionLabel(option)"
                                        [attr.aria-selected]="isSelected(option)"
                                        [attr.aria-disabled]="isOptionDisabled(option)"
                                        [attr.data-p-focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                        [attr.aria-setsize]="ariaSetSize"
                                        [attr.aria-posinset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                        (click)="onOptionSelect($event, option)"
                                        (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    >
                                        <span *ngIf="!itemTemplate">{{ getOptionLabel(option) }}</span>
                                        <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: scrollerOptions.getOptions ? scrollerOptions.getOptions(i) : i }"></ng-container>
                                    </li>
                                </ng-container>
                            </ng-template>
                            <li *ngIf="!items || (items && items.length === 0 && showEmptyMessage)" class="p-autocomplete-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                <ng-container *ngIf="!emptyTemplate; else empty">
                                    {{ searchResultMessageText }}
                                </ng-container>
                                <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                            </li>
                        </ul>
                    </ng-template>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
                <span role="status" aria-live="polite" class="p-hidden-accessible">
                    {{ selectedMessageText }}
                </span>
            </p-overlay>
        </div>
    `,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-inputwrapper-focus]": "((focused && !disabled) || autofocus) || overlayVisible",
        "[class.p-autocomplete-clearable]": "showClear && !disabled"
      },
      providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }, {
    type: NgZone
  }], {
    minLength: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input
    }],
    virtualScrollItemSize: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoHighlight: [{
      type: Input
    }],
    forceSelection: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    dropdownAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dropdownIcon: [{
      type: Input
    }],
    unique: [{
      type: Input
    }],
    group: [{
      type: Input
    }],
    completeOnFocus: [{
      type: Input
    }],
    showClear: [{
      type: Input
    }],
    field: [{
      type: Input
    }],
    dropdown: [{
      type: Input
    }],
    showEmptyMessage: [{
      type: Input
    }],
    dropdownMode: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    suggestions: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    searchMessage: [{
      type: Input
    }],
    emptySelectionMessage: [{
      type: Input
    }],
    selectionMessage: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    searchLocale: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input
    }],
    completeMethod: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onUnselect: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onKeyUp: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerEL: [{
      type: ViewChild,
      args: ["container"]
    }],
    inputEL: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    multiInputEl: [{
      type: ViewChild,
      args: ["multiIn"]
    }],
    multiContainerEL: [{
      type: ViewChild,
      args: ["multiContainer"]
    }],
    dropdownButton: [{
      type: ViewChild,
      args: ["ddBtn"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var AutoCompleteModule = class _AutoCompleteModule {
  static ɵfac = function AutoCompleteModule_Factory(t) {
    return new (t || _AutoCompleteModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AutoCompleteModule,
    declarations: [AutoComplete],
    imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon],
    exports: [AutoComplete, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon],
      exports: [AutoComplete, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule],
      declarations: [AutoComplete]
    }]
  }], null, null);
})();
export {
  AUTOCOMPLETE_VALUE_ACCESSOR,
  AutoComplete,
  AutoCompleteModule
};
//# sourceMappingURL=primeng_autocomplete.js.map
