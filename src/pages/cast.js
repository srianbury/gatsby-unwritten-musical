import React from "react";
import { graphql } from "gatsby";
import GtsbImg from "gatsby-image";
import Layout from "../components/layout";

const Cast = ({ data, location }) => (
  <Layout title="Cast" location={location}>
    <div className="row">
      {data.allContentfulCastMember.edges.map(({ node }) => (
        <div className="col-12 col-sm-6 col-md-4 pb-3" key={node.id}>
          <div>
            <GtsbImg className="border" alt="" fluid={node.picture.fluid} />
            <div className="mt-1">
              <div>
                <h5 className="d-inline friday">{node.name}</h5>
              </div>
              <div>{node.about.about}</div>
              <div>
                <a
                  href={`https://www.instagram.com/${node.instagramHandle}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram pr-1" />
                  {node.instagramHandle}
                </a>{" "}
              </div>
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
          id
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
