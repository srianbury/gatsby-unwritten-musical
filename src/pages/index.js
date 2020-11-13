import React from "react";
import { graphql } from "gatsby";
import GtsbImg from "gatsby-image";
import Layout from "../components/layout";

const Home = ({ data, location }) => {
  const info = data.allContentfulShowDescription.edges[0].node;
  return (
    <Layout title="Home" location={location}>
      <div className="row mb-3">
        <div className="col-12">{info.about.about}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-0 offset-md-3">
          <GtsbImg alt="" fluid={info.picture.fluid} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
export const query = graphql`
  {
    allContentfulShowDescription {
      edges {
        node {
          picture {
            fluid(maxWidth: 600, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          about {
            about
          }
        }
      }
    }
  }
`;
