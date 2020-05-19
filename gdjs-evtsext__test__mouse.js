
gdjs.evtsExt__Test__Mouse = gdjs.evtsExt__Test__Mouse || {};

/**
 * Behavior generated from 
 * @class Mouse
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Test__Mouse.Mouse = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__Test__Mouse.Mouse.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Test::Mouse", gdjs.evtsExt__Test__Mouse.Mouse);

// Properties:
gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.GDObjectObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


}; //End of gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.eventsList0x5b7328


gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Test__Mouse.Mouse.prototype.doStepPreEventsContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext = {};
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


}; //End of gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.eventsList0x5b7328


gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreated = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onCreatedContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext = {};
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.GDObjectObjects2= [];

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.mapOfGDgdjs_46evtsExt_95_95Test_95_95Mouse_46Mouse_46prototype_46onDestroyContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.GDObjectObjects1});gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.mapOfGDgdjs_46evtsExt_95_95Test_95_95Mouse_46Mouse_46prototype_46onDestroyContext_46GDObjectObjects1Objects) == 0;
}if (gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.condition0IsTrue_0.val) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


}; //End of gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.eventsList0x5b7328


gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroy = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Test__Mouse.Mouse.prototype.onDestroyContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

