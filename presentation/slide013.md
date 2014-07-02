          _
         |_) _. ._ _|_ o  _. |    /\  ._  ._  | o  _  _. _|_ o  _  ._
         |  (_| |   |_ | (_| |   /--\ |_) |_) | | (_ (_|  |_ | (_) | |
                                      |   |
            describe ("Partial Application", function () {
                var add = function (a, b, c) {
                    return a + b + c;
                };
                it ("should store values for parameters", function () {
                    var applied_add = _.partial(add, 1, 2, 3);

                    expect(applied_add instanceof Function).toEqual(true);
                    expect(applied_add()).toEqual(6);
                });
            });
















































































slide 013
