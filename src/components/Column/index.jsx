import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";

const Column = ({ children, width, styles }) => (
  <Grid.Column width={width} style={{ ...defaultStyles.column, ...styles }}>
    {children}
  </Grid.Column>
);

Column.defaultProps = {
  styles: {}
};

Column.propTypes = {
  styles: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

const defaultStyles = {
  column: {
    margin: 0,
    padding: 0,
    border: "none"
  }
};

export { Column };
