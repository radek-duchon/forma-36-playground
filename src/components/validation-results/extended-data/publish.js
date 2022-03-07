import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Flex,
  Subheading,
  TextLink
} from "@contentful/forma-36-react-components";
import { AccordionTitle } from "../accordion-title";
import { Message } from "../messages/message";

export default function Dialog(props) {
  return (
    <div className="modal">
      <div className="header">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Subheading>Publish Results</Subheading>
          <TextLink icon="Close" onClick={() => props.setState(undefined)} />
        </Flex>
      </div>
      <div className="content">
        <Accordion align="end" className="accordion">
          <AccordionItem
            title={
              <AccordionTitle
                title="PRD-QLNQJBYP"
                version="Extended Data"
                status="published"
                icon="Release"
              />
            }
          >
            <div className="messages">
              <Message text="Entry was successfully published" />
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="footer">
        <Button icon="Done" onClick={() => props.setState(undefined)}>
          Close
        </Button>
      </div>
    </div>
  );
}
