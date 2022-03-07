import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Flex,
  TextLink,
  Subheading
} from "@contentful/forma-36-react-components";

export default function Dialog(props) {
  return (
    <div className="modal prompt">
      <div className="content">
        <b>Some entries cannot be published. Do you want to continue?</b>
        <ul>
          <li>
            <TextLink icon="ExternalLink" iconPosition="right">
              PRD-JHBKMJNB > Sort & Order > 1
            </TextLink>
          </li>
        </ul>
      </div>
      <div className="footer">
        <Button
          onClick={() => props.setState("gmpv/some-failures/published")}
          buttonType="positive"
        >
          Continue
        </Button>
        <Button onClick={() => props.setState("gmpv/some-failures/validate")}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
