import React from "react";

import Layout from "../components/layout";

const NotFoundPage = ({ location }) => (
  <Layout title="404: Not found" location={location}>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </Layout>
);

export default NotFoundPage;
