import reducer from "./redux";
import { expect } from "chai";

it("should initialze state", () => {
  expect(reducer(undefined, {})).to.deep.equal({ photos: [] });
});

it("should change to loading state", () => {
  expect(reducer({}, { type: "photo/SEARCH_PENDING" })).to.has.property(
    "searchPending",
    true
  );
});
