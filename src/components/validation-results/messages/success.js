import React from "react";
import {
  Flex,
  Icon,
  Paragraph,
  TextLink
} from "@contentful/forma-36-react-components";

export const Success = () => {
  const [expanded, setExpanded] = React.useState(false);

  const Item = (props) => {
    return (
      <Flex className="message success">
        <Icon
          className="icon"
          size="small"
          icon="CheckCircle"
          color="positive"
        />
        <Paragraph>{props.text}</Paragraph>
      </Flex>
    );
  };

  return (
    <div className="messages">
      {expanded ? (
        <>
          <Item text="All product associations exist" />
          <Item text="All product names have translations for product PRD-QLNQJBYP" />
          <Item text="All generated urls will be unique for product PRD-QLNQJBYP" />
        </>
      ) : (
        <>
          <Item text="Entry passed all validations" />
          <TextLink
            className="expand"
            icon="Menu"
            onClick={() => setExpanded(true)}
          >
            Show all messages
          </TextLink>
        </>
      )}
    </div>
  );
};
