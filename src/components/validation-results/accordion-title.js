import React from "react";
import {
  Flex,
  Icon,
  Tag,
  TextLink,
  Tooltip
} from "@contentful/forma-36-react-components";

export const AccordionTitle = (props) => {
  const Separator = () => {
    return <Icon className="separator" icon="ChevronRight" />;
  };
  return (
    <Flex className="title" alignItems="center">
      <Flex className="content" alignItems="center">
        {props.icon ? <Icon className="icon" icon={props.icon} /> : null}
        {props.title}
        {props.version ? (
          <>
            <Separator /> {props.version}
          </>
        ) : null}
        {props.isCurrent ? (
          <Tag className="flag" size="small">
            Current
          </Tag>
        ) : null}
        {props.entryId ? (
          <div className="link">
            <Tooltip content="Open entry in new window" place="top">
              <TextLink
                icon="ExternalLink"
                onClick={(e) => e.stopPropagation()}
                href="#"
              />
            </Tooltip>
          </div>
        ) : null}
      </Flex>
      {props.status ? (
        <Tag
          className="status"
          tagType={
            props.status === "success" ||
            props.status === "published" ||
            props.status === "all published"
              ? "positive"
              : props.status === "warning"
              ? "warning"
              : "negative"
          }
        >
          {props.status}
        </Tag>
      ) : null}
    </Flex>
  );
};
