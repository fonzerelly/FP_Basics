          _
         /   _  ._ _  ._   _   _ o _|_ o  _  ._
         \_ (_) | | | |_) (_) _> |  |_ | (_) | |
                      |
            describe ("composition", function () {
                var extract_value = function (obj) {
                    return obj.value;
                }
                var add_5 = function (value) {
                    return value + 5;
                }

                it("composes a function out of several functions", function () {
                    var an_obj = {
                        value: 42,
                        sum: 21
                        };
                    expect(_.compose(add_5, extract_value)(an_obj)).toEqual(add_5(extract_value(an_obj)));
                });
            });
















































































slide 014
