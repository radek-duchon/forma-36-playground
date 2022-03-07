import React from "react";
import {
  Flex,
  Icon,
  List,
  ListItem,
  Paragraph,
  TextLink
} from "@contentful/forma-36-react-components";

export const Warning = () => {
  const [expanded, setExpanded] = React.useState(false);

  const Item = (props) => {
    return (
      <Flex className="message warning" flexDirection="column">
        <Flex>
          <Icon
            className="icon"
            size="small"
            icon="ErrorCircle"
            color="warning"
          />
          <Paragraph>{props.text}</Paragraph>
        </Flex>
        <List>
          <ListItem>
            <Paragraph>
              Culture: fr-CA. key: Rack Card Holder; id:
              <TextLink icon="ExternalLink" iconPosition="right">
                1JXhhzUAs2exVP7crlw33T
              </TextLink>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Culture: fr-CA. key: Rack Card Holder; id:
              <TextLink icon="ExternalLink" iconPosition="right">
                1JXhhzUAs2exVP7crlw33T
              </TextLink>
            </Paragraph>
          </ListItem>
          <ListItem>
            <TextLink icon="ExternalLink" iconPosition="right">
              Documentation
            </TextLink>
          </ListItem>
        </List>
      </Flex>
    );
  };

  const Success = (props) => {
    return (
      <Flex className="message success">
        <Icon
          className="icon"
          size="small"
          icon="CheckCircle"
          color="positive"
        />
        <Paragraph color="positive">{props.text}</Paragraph>
      </Flex>
    );
  };

  return (
    <div className="messages">
      {expanded ? (
        <>
          <Success text="All product associations exist" />
          <Item text="Some options are missing translations for product PRD-JHBKMJNB and version 1" />
          <Success text="All generated urls will be unique for product PRD-QLNQJBYP" />
        </>
      ) : (
        <>
          <Item text="Some options are missing translations for product PRD-JHBKMJNB and version 1" />
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
