          _
         /      ._ ._ o ._   _
         \_ |_| |  |  | | | (_|
                             _|
            describe ("Currying", function () {

                var add = function (a, b, c) {
                    return a + b + c;
                };

                it ("should convert a function with n parameter into n functions for each parameter", function () {
                    var curried_add = _.curry(add);

                    expect(curried_add instanceof Function).toEqual(true);
                    expect(curried_add(1) instanceof Function).toEqual(true);
                    expect(curried_add(1)(2) instanceof Function).toEqual(true);
                    expect(curried_add(1)(2)(3)).toEqual(6);
                });
            });
















































































slide 012
