import {
  CommonModule
} from "./chunk-G4DQUGXJ.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-NTDFCNTR.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import {
  BehaviorSubject,
  ReplaySubject,
  Subject
} from "./chunk-PQ7O3X3G.js";
import "./chunk-47AXDMZD.js";

// node_modules/@pscoped/ngx-pub-sub/fesm2020/pscoped-ngx-pub-sub.mjs
var SubjectType;
(function(SubjectType2) {
  SubjectType2[SubjectType2["Subject"] = 0] = "Subject";
  SubjectType2[SubjectType2["BehaviorSubject"] = 1] = "BehaviorSubject";
  SubjectType2[SubjectType2["ReplaySubject"] = 2] = "ReplaySubject";
})(SubjectType || (SubjectType = {}));
var NgxPubSubService = class {
  constructor() {
    this.eventObservableMapping = {};
  }
  publishEvent(eventName, data) {
    this.validateEventName(eventName);
    this.createSubjectIfNotExist(eventName);
    this.publishNext(eventName, SubjectType.Subject, data);
  }
  subscribe(eventName, next, error, complete) {
    this.validateEventName(eventName);
    this.createSubjectIfNotExist(eventName);
    return this.eventObservableMapping[eventName].ref.subscribe(next, error, complete);
  }
  /**
   * Use this method to get the Observable associated with the event.
   * Useful when you would like to apply additional rxjs operators like debounceTime
   */
  getEventObservable(eventName) {
    this.validateEventName(eventName);
    this.createSubjectIfNotExist(eventName);
    return this.eventObservableMapping[eventName].ref.asObservable();
  }
  registerEventWithLastValue(name, defaultValue) {
    this.validateEventName(name);
    this.checkEventType(name, SubjectType.BehaviorSubject, true);
    this.eventObservableMapping[name] = {
      type: SubjectType.BehaviorSubject,
      ref: new BehaviorSubject(defaultValue)
    };
  }
  registerEventWithHistory(name, bufferSize, windowTime, scheduler) {
    this.validateEventName(name);
    this.checkEventType(name, SubjectType.ReplaySubject, true);
    this.eventObservableMapping[name] = {
      type: SubjectType.ReplaySubject,
      ref: new ReplaySubject(bufferSize, windowTime, scheduler)
    };
  }
  publishWithLast(eventName, data) {
    this.validateEventName(eventName);
    this.publishNext(eventName, SubjectType.BehaviorSubject, data);
  }
  publishWithHistory(eventName, data) {
    this.validateEventName(eventName);
    this.publishNext(eventName, SubjectType.ReplaySubject, data);
  }
  completeEvent(eventName) {
    this.validateEventName(eventName);
    if (!this.eventObservableMapping[eventName]) {
      throw Error("Event not created yet");
    }
    this.completeObservableAndDestroyMapping(eventName);
  }
  ngOnDestroy() {
    for (const eventName in this.eventObservableMapping) {
      if (this.eventObservableMapping.hasOwnProperty(eventName)) {
        this.completeObservableAndDestroyMapping(eventName);
      }
    }
  }
  publishNext(eventName, type = SubjectType.Subject, data) {
    this.checkEventType(eventName, type);
    this.eventObservableMapping[eventName].ref.next(data);
  }
  checkEventType(eventName, type = SubjectType.Subject, shouldNotExist = false) {
    const object = this.eventObservableMapping[eventName];
    let errorMessage;
    if (!object && shouldNotExist) {
      return;
    }
    if (!object) {
      errorMessage = `Event doesn't exist of type: ${SubjectType[type]} or it has been completed`;
    } else if (object.type !== type) {
      errorMessage = `Event exists with other type: ${SubjectType[object.type]}. Expected type: ${SubjectType[type]}`;
    }
    if (shouldNotExist && object.type === type) {
      errorMessage = `Event already registerd with the same type. Don't register a second time`;
    }
    if (errorMessage) {
      throw Error(`Error (${eventName}): ${errorMessage}`);
    }
  }
  createSubjectIfNotExist(eventName) {
    const object = this.eventObservableMapping[eventName];
    if (object) {
      return;
    }
    this.eventObservableMapping[eventName] = {
      type: SubjectType.Subject,
      ref: new Subject()
    };
  }
  validateEventName(eventName) {
    if (!eventName) {
      throw Error("Event name not provided");
    }
  }
  completeObservableAndDestroyMapping(eventName) {
    this.eventObservableMapping[eventName].ref.complete();
    delete this.eventObservableMapping[eventName];
  }
};
NgxPubSubService.ɵfac = function NgxPubSubService_Factory(t) {
  return new (t || NgxPubSubService)();
};
NgxPubSubService.ɵprov = ɵɵdefineInjectable({
  token: NgxPubSubService,
  factory: NgxPubSubService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPubSubService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var NgxPubSubModule = class {
};
NgxPubSubModule.ɵfac = function NgxPubSubModule_Factory(t) {
  return new (t || NgxPubSubModule)();
};
NgxPubSubModule.ɵmod = ɵɵdefineNgModule({
  type: NgxPubSubModule,
  imports: [CommonModule]
});
NgxPubSubModule.ɵinj = ɵɵdefineInjector({
  providers: [NgxPubSubService],
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPubSubModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [NgxPubSubService]
    }]
  }], null, null);
})();
export {
  NgxPubSubModule,
  NgxPubSubService
};
//# sourceMappingURL=@pscoped_ngx-pub-sub.js.map
