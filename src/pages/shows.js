import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Shows = ({ data, location }) => (
  <Layout title="Shows" location={location}>
    <div className="row">
      {data.allContentfulShow.edges.map(({ node }) => (
        <div className="col-12" key={node.id}>
          <div>
            <div>{node.cancelled ? <CancelledNotification /> : null}</div>
            <div>
              <i className="fas fa-calendar" /> When:{" "}
              <h5 className="d-md-inline">
                <WithCancelled cancelled={node.cancelled}>
                  {node.startDateAndTime} (AZ time)
                </WithCancelled>
              </h5>
            </div>
            <div>
              <i className="fas fa-clock" /> Approx. duration:{" "}
              <h5 className="d-md-inline">
                <WithCancelled cancelled={node.cancelled}>
                  {node.approximateDuration}
                </WithCancelled>
              </h5>
            </div>
            {node.cancelled ? null : (
              <div>
                <i className="fas fa-map-marker-alt" /> Where:{" "}
                <div className="d-md-inline">
                  <a
                    href={`https://maps.google.com/?q=${node.locationText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {node.locationText}
                  </a>
                </div>
              </div>
            )}
            <hr style={{ border: "1px solid #f8f9fa" }} />
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

const WithCancelled = ({ cancelled, children }) => {
  return cancelled ? <s>{children}</s> : <>{children}</>;
};

const CancelledNotification = () => (
  <div>
    <h5 className="text-danger">Notice! This show has been cancelled.</h5>
  </div>
);

export default Shows;
export const query = graphql`
  {
    allContentfulShow(sort: { fields: [startDateAndTime], order: ASC }) {
      edges {
        node {
          id
          startDateAndTime(formatString: "dddd MMM. DD, YYYY")
          approximateDuration
          location {
            lat
            lon
          }
          locationText
          cancelled
        }
      }
    }
  }
`;
