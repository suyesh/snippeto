import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";

const SiteContainer = ({ children }) => (
  <Grid columns={3} divided inverted padded>
    <Grid.Row style={styles.row}>{children}</Grid.Row>
  </Grid>
);

SiteContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  row: {
    height: "100vh"
  }
};

export { SiteContainer };
