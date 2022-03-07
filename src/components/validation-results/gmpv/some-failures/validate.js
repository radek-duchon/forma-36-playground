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
import { Success } from "../../messages/success";
import { Error } from "../../messages/error";
import { Warning } from "../../messages/warning";

export default function Dialog(props) {
  React.useEffect(() => {
    Array.prototype.filter
      .call(document.querySelectorAll(".accordion .status"), function (el) {
        return el.innerHTML !== "success";
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
                status="success"
                icon="References"
                entryId="entryId"
              />
            }
          >
            <Success />
          </AccordionItem>
          <AccordionItem
            title={
              <AccordionTitle
                title="PRD-QLNQJBYP"
                status="success"
                icon="Release"
              />
            }
          >
            <Accordion className="accordion">
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="8"
                    status="success"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                    isCurrent
                  />
                }
              >
                <Success />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="7"
                    status="success"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Success />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="6"
                    status="success"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Success />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Extended Data"
                    status="success"
                    icon="Asset"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Success />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="SEO"
                    status="success"
                    icon="Search"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Success />
              </AccordionItem>
            </Accordion>
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
                    status="warning"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Warning />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="1"
                    status="cannot be published"
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
                    status="success"
                    icon="Asset"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Success />
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="SEO"
                    status="success"
                    icon="Search"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <Success />
              </AccordionItem>
            </Accordion>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="footer">
        <Button
          icon="Done"
          onClick={() => props.setState("gmpv/some-failures/confirm")}
          buttonType="positive"
        >
          Publish 9 of 10
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
