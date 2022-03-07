import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Flex,
  Subheading,
  TextLink
} from "@contentful/forma-36-react-components";
import { AccordionTitle } from "../../accordion-title";
import { Message } from "../../messages/message";

export default function Dialog(props) {
  React.useEffect(() => {
    Array.prototype.filter
      .call(document.querySelectorAll(".accordion .status"), function (el) {
        return el.innerHTML !== "published";
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
          <Subheading>Publish Results</Subheading>
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
                status="could not be published"
                icon="References"
                entryId="entryid"
              />
            }
          >
            <div className="messages">
              <Message
                text="Entry could not be published due to internal error"
                status="failure"
              />
            </div>
          </AccordionItem>
          <AccordionItem
            title={
              <AccordionTitle
                title="PRD-QLNQJBYP"
                icon="Release"
                status="published"
              />
            }
          >
            <Accordion className="accordion">
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="8"
                    status="published"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                    isCurrent
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="7"
                    status="published"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="6"
                    status="published"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Extended Data"
                    status="published"
                    icon="Asset"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="SEO"
                    status="published"
                    icon="Search"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem
            title={
              <AccordionTitle
                title="PRD-JHBKMJNB"
                status="some entries could not be published"
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
                    status="published"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="1"
                    status="could not be published"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                    isCurrent
                  />
                }
              >
                <div className="messages">
                  <Message
                    text="Some options are missing translations for product PRD-JHBKMJNB and version 1"
                    status="failure"
                  />
                  <Message
                    text="Entry does not have at least one valid mapping"
                    status="failure"
                  />
                </div>
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Extended Data"
                    status="published"
                    icon="Asset"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
              <AccordionItem
                title={
                  <AccordionTitle
                    title="SEO"
                    status="published"
                    icon="Search"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                  />
                }
              >
                <div className="messages">
                  <Message text="Entry was successfully published" />
                </div>
              </AccordionItem>
            </Accordion>
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
