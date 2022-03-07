import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Flex,
  TextLink,
  Subheading
} from "@contentful/forma-36-react-components";
import { AccordionTitle } from "../../accordion-title";
import { Error } from "../../messages/error";

export default function Dialog(props) {
  React.useEffect(() => {
    Array.prototype.filter
      .call(document.querySelectorAll(".accordion .status"), function (el) {
        return el.innerHTML === "failure" || el.innerHTML === "warning";
      })
      .forEach((x) => x.click());
  }, []);

  return (
    <div className="modal">
      <div className="header">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Subheading>Validation Results</Subheading>
          <TextLink icon="Close" onClick={() => props.setState(undefined)} />
        </Flex>
      </div>
      <div className="content">
        <Accordion align="end" className="accordion">
          <AccordionItem
            title={
              <AccordionTitle
                title="MPV"
                version="radiantBallpointPen"
                status="failure"
                icon="References"
                entryId="entryId"
              />
            }
          >
            <Error />
          </AccordionItem>
          <AccordionItem
            title={
              <AccordionTitle
                title="PRD-JHBKMJNB"
                status="failure"
                icon="Release"
              />
            }
          >
            <Accordion className="accordion">
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="2"
                    status="failure"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Error />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="1"
                    status="failure"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                    isCurrent
                  />
                }
              >
                <Error />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Extended Data"
                    status="failure"
                    icon="Asset"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Error />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="SEO"
                    status="failure"
                    icon="Search"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Error />
              </AccordionItem>
            </Accordion>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="footer">
        <Button disabled icon="Done" buttonType="positive">
          Publish
        </Button>
        <Button
          buttonType="muted"
          icon="Cycle"
          onClick={() => props.setState("loading:gmpv/some-failures/validate")}
        >
          Refresh
        </Button>
        <Button icon="Close" onClick={() => props.setState(undefined)}>
          Close
        </Button>
      </div>
    </div>
  );
}
