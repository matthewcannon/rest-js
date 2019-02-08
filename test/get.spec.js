//
// We are designing an API and developing a domain language, driven by tests.
//
//      Getting         =>  Fetching
//      Request         =>  Request
//      Receiving       =>  Handling a fetch promise
//      Providing       =>  Resolving a promise
//      Payload         =>  JSON
//      Rejecting       =>  Rejecting a promise         -->  Announcing failures
//
const get = fetch => () =>
    new Promise(resolve => {
        fetch.then(resolve);
    });

describe("invoking", () => {
    describe("always", () => {
        it("provides a function", () => {
            expect(typeof get(/* fetch */)).toBe("function");
        });

        it("provides a promise", () => {
            expect(typeof get(/* fetch */)(/* url */)).toBe(typeof new Promise(resolve => resolve));
        });
    });

    describe("with a url", () => {
        describe("passes the url to fetch", () => {
            const fetch = new Promise(resolve => resolve);
            const url = "http://bbc.co.uk";

            get(fetch)(url);
        });
    });
});

describe("providing json", () => {
    it("provides json", () => {});
});

describe("scheduling", () => {
    it("resolves within the schedule", () => {});
    it("rejects when the schedule expires", () => {});
});

describe("retrying", () => {
    describe("when the request is malformed", () => {
        // 400.
    });

    describe("when the request is not authorised", () => {
        // 403.
    });

    describe("when the endpoint is not reachable", () => {
        // 404.
    });

    describe("when the endpoint fails spectacularly", () => {
        // 500.
    });

    describe("with a schedule", () => {
        it("retries one time when the schedule expires", () => {});
        it("retries multiple times when the schedule expires", () => {});
    });
});
