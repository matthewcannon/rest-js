import { get } from "../src/rest";
import { compose } from "lodash/fp";

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
        const fakeFetch = jest.fn();

        it("uses the url in the call to fetch", () => {
            get(fakeFetch)(url);
            expect(fakeFetch).toHaveBeenCalledWith(url);
        });

        it("can be composed", () => {
            compose(get)(fakeFetch)(url);
            expect(fakeFetch).toHaveBeenCalledWith(url);
        });
    });
});
