import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

import { Search } from "./Search";

Enzyme.configure({ adapter: new Adapter() });

it("should render without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Search photos={[]} location={{ search: "?q=123" }} search={() => {}} />,
    div
  );
});

it("should render with h1", () => {
  const wrapper = shallow(
    <Search photos={[]} location={{ search: "?q=123" }} search={() => {}} />
  );
  expect(wrapper.find("h1")).to.have.lengthOf("1");
});
