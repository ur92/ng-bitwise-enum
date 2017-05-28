# ng-bitwise-enum
## About
Simple bitwise toggler with enum options packed as AngularJS service and filter.
This module provide convenient way to manage array of boolean flags, while using enum to turn on/off the options or get the state. 

## Getting Started
### Install
_NPM and YARN are coming soon_

1. Include the js files (in this order)
    1. bitwiseEnum.module.js
    2. bitwiseEnum.service.js
    3. bitwiseEnum.filter.js
2. Require module ```'ng-bitwise-enum'``` in your angular app
3. inject ```'BitwiseEnum'``` service into your angular component/ctrl
3. Init the bitwise-enum with desired options 

### Service Example 
```javascript 
var options = [
    'EDIT_MODE',
    'VALID',
    'OTHER_OPTION'
  ];
  
// Init the state
var state = new BitwiseEnum(options);

// Set option on
state.setOn(state.options.EDIT_MODE); // set EDIT_MODE to true
state.is(state.options.EDIT_MODE); // return true
state.is(state.options.VALID); // return false as we didn't enable this flag yet

// Set option off
state.setOff(state.options.EDIT_MODE); // set EDIT_MODE to false
state.is(state.options.EDIT_MODE); // return false

// Toggle option on/off
state.toggle(state.options.VALID); // set VALID from false to true
state.is(state.options.EDIT_MODE); // return true
state.toggle(state.options.VALID); // set VALID from true to false
state.is(state.options.EDIT_MODE); // return false

// Get raw bitwise integer
state.setOn(state.options.VALID);
state.setOn(state.options.OTHER_OPTION);
state.getRaw(); // return 110 as 
```

### Filter Example
```html
<div ng-if="vm.state | is : vm.state.options.EDIT_MODE"></div>
```


