import React from "react";
import styled from "styled-components";
import { Input } from "antd";
const SearchInput = styled(Input.Search)``;
export default ({ history }) => (
  <SearchInput
    onSearch={keyword => {
      history.push(`/photo/search?q=${keyword}`);
    }}
    enterButton="Search"
  />
);
