import React from "react";
import PropTypes from "prop-types";

import ListingTitle from "components/ListingTitle";

const TitleCell = ({ record }) => {
  return <ListingTitle record={record} />;
};

TitleCell.propTypes = {
  record: PropTypes.object.isRequired,
};

export default TitleCell;
