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
      .call(document.querySelectorAll(".accordion .title"), function (el) {
        return true;
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
          <Subheading>
            Some entries cannot be published. Do you want to continue?
          </Subheading>
          <TextLink icon="Close" onClick={() => props.setState(undefined)} />
        </Flex>
      </div>
      <div className="content">
        <Accordion align="end" className="accordion">
          <AccordionItem
            title={<AccordionTitle title="PRD-JHBKMJNB" icon="Release" />}
          >
            <Accordion className="accordion">
              <AccordionItem
                title={
                  <AccordionTitle
                    title="Sort & Order"
                    version="1"
                    icon="ListNumbered"
                    entryId="1tzOjXAZf4CdpgKe8lY6Yv"
                    isCurrent
                  />
                }
              >
                <Error hideExpand />
              </AccordionItem>
            </Accordion>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="footer">
        <Button
          icon="Done"
          onClick={() => props.setState("loading:gmpv/some-failures/publish")}
          buttonType="positive"
        >
          Continue
        </Button>
        <Button icon="Close" onClick={() => props.setState(undefined)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
