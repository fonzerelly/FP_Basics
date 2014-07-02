          _
         /  |  _   _     ._ _   _
         \_ | (_) _> |_| | (/_ _>

            describe ("Closures", function () {

                var createCounterClosure = function () {
                    var counter = 0;

                    return function () {
                        return counter += 1;
                    };
                };

                it ("should hide its state in its function scope", function () {
                    var count = createCounterClosure();

                    expect(count.counter).toEqual(undefined);

                    expect(count()).toEqual(1);
                    expect(count()).toEqual(2);
                });

                it ("should create its own state for each call", function () {
                    var count1 = createCounterClosure();

                    expect(count1()).toEqual(1);

                    var count2 = createCounterClosure();

                    expect(count2()).toEqual(1);
                });

            });
















































































slide 011
