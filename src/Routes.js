import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./features/home/Home";
import Search from "./features/photo/Search";
import Detail from "./features/photo/Detail";
import Layout from "./common/Layout";

export default () => (
  <Layout>
    <Switch>
      <Route path="/photo/search" component={Search} />
      <Route path="/photo/:id" component={Detail} />
      <Route path="/" component={Home} />
    </Switch>
  </Layout>
);
