import { get } from "../src/rest";
import { compose } from "lodash/fp";

describe("providing json", () => {
    const url = "https://github.com";
    const fakeFetch = jest.fn();

    it("unpacks the json promise provided by fetch", () => {
        compose(get)(fakeFetch)(url);
        expect(fakeFetch).toHaveBeenCalledWith(url);
    });
});
