(function () {
    'use strict';

    angular.module('optiApp.services.bitwise-enum')
        .factory('BitwiseEnum', function () {

            return (function BitwiseEnum() {
                var state = 0;

                function BWE(options) {
                    this.options = _buildOptions(options || []);
                }

                function _buildOptions(options) {
                    var i;
                    var enumOptions = {};
                    for (i = 0; i < options.length; i++) {
                        if (i === 0) {
                            enumOptions[options[i]] = 1;
                        }
                        else {
                            enumOptions[options[i]] = i << 1;
                        }
                    }
                    return enumOptions;
                }

                BWE.prototype = {
                    getRaw: function () {
                        return state;
                    },
                    is: function _get(option) {
                        return (state & option) === option;
                    },
                    setOn: function _setOn(option) {
                        state |= option;
                    },
                    setOff: function _setOff(option) {
                        state &= ~(option);
                    },
                    toggle: function _toggle(option) {
                        if (this.is(option)) {
                            this.setOff(option);
                        }
                        else {
                            this.setOn(option);
                        }
                    }
                };

                return BWE;
            })();
        });
})();