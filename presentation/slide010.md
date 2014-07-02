         ___                                      _  _
          | _|_  _  ._ _. |_  |  _   _   o ._    |_ |_)
         _|_ |_ (/_ | (_| |_) | (/_ _>   | | |   |  |


         ._ _   _|      _  _
         | (/_ (_| |_| (_ (/_

            describe ("_.reduce", function () {

                it ("should combine each two elements of a list to some result", function () {
                    var iterable = [1, 2, 3, 4];
                    var result = _.reduce(
                        iterable,
                        function sum_up (previous_result, value) {
                            return previous_result + value;
                        },
                        0
                    );

                    expect(result).toEqual(1 + 2 + 3 + 4);
                });

            });
















































































slide 010
