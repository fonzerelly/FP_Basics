         ___                                      _  _
          | _|_  _  ._ _. |_  |  _   _   o ._    |_ |_)
         _|_ |_ (/_ | (_| |_) | (/_ _>   | | |   |  |


         ._ _   _. ._
         | | | (_| |_)
                   |
            describe ("_.map", function () {
                it ("should map each element of a list onto a new list", function () {
                    var iterable = [1, 2, 3];
                    var result = _.map(iterable, function square(value) {
                        return value * value;
                    });

                    expect(result).toEqual([1,4,9]);
                });
            });
















































































slide 008
