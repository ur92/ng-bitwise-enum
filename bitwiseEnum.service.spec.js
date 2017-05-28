describe('bitwise enum', function () {
    beforeEach(function () {

        module('optiApp.services.bitwise-enum');

        inject(function (BitwiseEnum, $filter) {
            this.BitwiseEnum = BitwiseEnum;
            this.filter = $filter;
        });

        this.options = [
            'EDIT_MODE',
            'OPTION_1',
            'OPTION_2'
        ];

        this.state = new this.BitwiseEnum(this.options);
    });

    it('should be inited', function () {
        expect(this.state).toBeDefined();
    });

    it('should be zero value', function () {
        expect(this.state.getRaw()).toEqual(0);
    });

    it('should build options', function () {
        expect(this.state.options).toEqual(jasmine.objectContaining({
            EDIT_MODE: 1,
            OPTION_1: 1 << 1,
            OPTION_2: 2 << 1
        }));
    });

    it('should set edit mode to on', function () {
        this.state.setOn(this.state.options.EDIT_MODE);
        expect(this.state.is(this.state.options.EDIT_MODE)).toBeTruthy();

    });

    it('should set edit mode to off', function () {
        this.state.setOn(this.state.options.EDIT_MODE);
        this.state.setOff(this.state.options.EDIT_MODE);
        expect(this.state.is(this.state.options.EDIT_MODE)).toBeFalsy();

    });

    it('should toggled edit mode', function () {
        this.state.setOn(this.state.options.EDIT_MODE);
        this.state.toggle(this.state.options.EDIT_MODE);
        expect(this.state.is(this.state.options.EDIT_MODE)).toBeFalsy();
    });

    it('should switch two options', function () {
        this.state.setOn(this.state.options.EDIT_MODE);
        this.state.setOn(this.state.options.OPTION_2);

        expect(this.state.is(this.state.options.EDIT_MODE) &&
            this.state.is(this.state.options.OPTION_2)).toBeTruthy();
    });

    it('should get raw enum num', function () {
        this.state.setOn(this.state.options.EDIT_MODE);
        this.state.setOn(this.state.options.OPTION_1);
        this.state.setOn(this.state.options.OPTION_2);

        expect(this.state.getRaw()).toEqual(parseInt('111', 2));
    });

    it('should get state with filter', function () {
        this.state.setOn(this.state.options.OPTION_1);
        var isFilter = this.filter('is');
        // in template => vm.state | is : vm.state.option.EDIT_MODE
        expect(isFilter(this.state, this.state.options.OPTION_1)).toBeTruthy();
    });


});