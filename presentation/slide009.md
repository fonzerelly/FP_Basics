         ___                                      _  _
          | _|_  _  ._ _. |_  |  _   _   o ._    |_ |_)
         _|_ |_ (/_ | (_| |_) | (/_ _>   | | |   |  |

           _
         _|_ o | _|_  _  ._
          |  | |  |_ (/_ |

            describe ("_.filter", function () {
                it ("should filter only elements that fullfill a boolean criteria", function () {
                    var iterable = [1, 2, 3, 4];
                    var result = _.filter(iterable, function is_even(value) {
                        return (value % 2) === 0;
                    });

                    expect(result).toEqual([2,4]);
                });
            });
















































































slide 009
