                                 _                  _
         |_| o  _  |_   _  ._   / \ ._ _|  _  ._   |_    ._   _ _|_ o  _  ._   _
         | | | (_| | | (/_ |    \_/ | (_| (/_ |    | |_| | | (_  |_ | (_) | | _>
                _|
            describe("Higher Order Function", function () {

                it ("can get functions as argument", function () {
                    var my_func = function () {}
                    var take_my_func = function (func) {
                        expect(func instanceof Function).toEqual(true);
                    }
                    take_my_func(my_func);
                });

                it ("can return a function", function () {
                    var return_a_func = function () {
                        return function () {};
                    }
                    expect(return_a_func() instanceof Function).toEqual(true);
                });

            });
















































































slide 006
