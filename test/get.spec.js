import { get } from "../src/rest";

describe("scheduling", () => {
    it("resolves when fetch completes before the schedule expires", () => {});
    it("rejects when fetch does not complete before the schedule expires", () => {});
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

describe("handling failures", () => {
    describe("when fetch reports a malformed request", () => {
        // 400.
        it("announces the failure", () => {});
    });

    describe("when fetch reports an unauthorised request", () => {
        // 403.
        it("announces the failure", () => {});
    });

    describe("when fetch reports a non-existent endpoint", () => {
        // 404.
        it("announces the failure", () => {});
    });

    describe("when fetch reports a spectacular server fail", () => {
        // 500.
        it("announces the failure", () => {});
    });
});
