         ___                                      _  _
          | _|_  _  ._ _. |_  |  _   _   o ._    |_ |_)
         _|_ |_ (/_ | (_| |_) | (/_ _>   | | |   |  |

           _        _
         _|_ _  ._ |_  _.  _ |_
          | (_) |  |_ (_| (_ | |

            describe ("_.forEach", function () {
                it ("should iterate each element of a list", function () {
                    var iterable = [1, 2, 3];
                    var result = [];
                    _.forEach(iterable, function handle(value) {
                        result.push(value);
                    });

                    expect(iterable).toEqual(result);
                });
            });
















































































slide 007
