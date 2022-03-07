import React from "react";
import {
  Flex,
  Subheading,
  Spinner
} from "@contentful/forma-36-react-components";

export default function Dialog(props) {
  setTimeout(() => {
    props.setState(props.next);
  }, 1000);

  return (
    <div className="modal">
      <div className="header">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Subheading>Please wait</Subheading>
        </Flex>
      </div>
      <Flex className="content" alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    </div>
  );
}
