import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const Brand = ({ name }) => (
  <Menu
    size="small"
    icon
    inverted
    vertical
    style={{ width: "100%", margin: 0 }}
  >
    <Menu.Item>
      <Icon name="code" />
      {name}
    </Menu.Item>
  </Menu>
);

Brand.propTypes = {
  name: PropTypes.string.isRequired
};

export { Brand };
