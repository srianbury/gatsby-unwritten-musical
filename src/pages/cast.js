import React from "react";
import { graphql } from "gatsby";
import GtsbImg from "gatsby-image";
import Layout from "../components/layout";

const Cast = ({ data }) => (
  <Layout title="Cast">
    <div className="row">
      {data.allContentfulCastMember.edges.map(({ node }) => (
        <div className="col-12 col-sm-6 col-md-4 pb-3">
          <div>
            <GtsbImg className="border" alt="" fluid={node.picture.fluid} />
            <div>
              Name: <h5 className="d-inline">{node.name}</h5>
            </div>
            <div>About: {node.about.about}</div>
            <div>
              <a href={`https://www.instagram.com/${node.instagramHandle}/`}>
                <i class="fab fa-instagram pr-1" />
                {node.instagramHandle}
              </a>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Cast;
export const query = graphql`
  {
    allContentfulCastMember {
      edges {
        node {
          name
          about {
            about
          }
          instagramHandle
          picture {
            fluid(maxWidth: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
