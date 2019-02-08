import { get } from "../src/rest";

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
        const url = "https://github.com";

        it("uses the url with fetch", () => {
            const fakeFetch = jest.fn();
            get(fakeFetch)(url);
            expect(fakeFetch).toHaveBeenCalledWith(url);
        });
    });
});

describe("providing json", () => {
    it("provides json", () => {});
});

describe("scheduling", () => {
    it("resolves when fetch completes before the schedule expires", () => {});
    it("rejects when fetch doesn't complete before the schedule expires", () => {});
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

describe("announcing failures", () => {
    describe("when the request is malformed", () => {
        // 400.
        it("announces the failure", () => {});
    });

    describe("when the request is not authorised", () => {
        // 403.
        it("announces the failure", () => {});
    });

    describe("when the endpoint is not reachable", () => {
        // 404.
        it("announces the failure", () => {});
    });

    describe("when the endpoint fails spectacularly", () => {
        // 500.
        it("announces the failure", () => {});
    });
});
