import React, { lazy } from "react";
import { Button, Heading, Flex } from "@contentful/forma-36-react-components";
import tokens from "@contentful/forma-36-tokens";
import Loading from "./loading";

const importComponent = (component) => lazy(() => import(`./${component}`));

const Options = (props) => {
  return (
    <>
      <Flex
        flexDirection="column"
        style={{ background: "white", padding: tokens.spacingL }}
      >
        <Heading>Validating Global MPV</Heading>
        <Flex>
          <Button
            style={{ margin: tokens.spacingXs }}
            onClick={() => props.setState("loading:gmpv/all-success/validate")}
          >
            All success
          </Button>
          <Button
            style={{ margin: tokens.spacingXs }}
            onClick={() =>
              props.setState("loading:gmpv/some-failures/validate")
            }
          >
            Some failures
          </Button>
          <Button
            style={{ margin: tokens.spacingXs }}
            onClick={() => props.setState("loading:gmpv/all-failed/validate")}
          >
            All failed
          </Button>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        style={{ background: "white", padding: tokens.spacingL }}
      >
        <Heading>Validating MSX Entries</Heading>
        <Flex>
          <Button
            style={{ margin: tokens.spacingXs }}
            onClick={() => props.setState("loading:extended-data/validate")}
          >
            Extended Data
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export function ValidationResults() {
  const [state, setState] = React.useState();
  const [component, setComponent] = React.useState(
    <Options setState={setState} />
  );

  React.useEffect(() => {
    async function load() {
      if (!state) {
        setComponent(<Options setState={setState} />);
        return;
      }

      if (state.startsWith("loading:")) {
        setComponent(
          <Loading setState={setState} next={state.split(":")[1]} />
        );
        return;
      }

      const View = await importComponent(state);
      setComponent(<View setState={setState} />);
    }

    load();
  }, [state]);

  return <React.Suspense fallback="">{component}</React.Suspense>;
}
