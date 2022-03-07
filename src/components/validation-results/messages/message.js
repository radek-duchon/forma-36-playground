import React from "react";
import { Flex, Icon, Paragraph } from "@contentful/forma-36-react-components";

export const Message = (props) => {
  return (
    <Flex className={`message ${props.status || "success"}`}>
      <Icon
        className="icon"
        size="small"
        icon="CheckCircle"
        color={props.status === "failure" ? "negative" : "positive"}
      />
      <Paragraph>{props.text}</Paragraph>
    </Flex>
  );
};
