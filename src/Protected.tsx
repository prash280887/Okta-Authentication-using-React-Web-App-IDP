import React, { useState } from "react";
import { IStackTokens, Stack } from "@fluentui/react";
import { Header } from "./header";
import { IStackProps } from "@fluentui/react/lib/Stack";

const stackTokens: IStackTokens = {
  childrenGap: "0.2%",
  padding: "m 20px",
};
const mainContentProps: IStackProps = {
  styles: { root: { overflow: "hidden", height: "83vh" } },
};

const customSpacingStackTokens: IStackProps = {
  padding: "m 40px",
  styles: { root: { overflow: "hidden", width: "85%" } },
};

const Protected: React.FunctionComponent = ({ children }) => {
  const [msg, setMsg] = useState(
    "Welcome to the home page of Okta authenticated React application"
  );

  return (
    <Stack tokens={stackTokens}>
      <Header />
      <Stack horizontal {...mainContentProps}>
        {/* <Stack {...customStepperTokens}>
          {loadingProductionStores ? (
            <Shimmer customElementsGroup={getCustomStepperShimmer()} />
          ) : (
            <Stepper />
          )}
        </Stack> */}
        <Stack {...customSpacingStackTokens}>
          <main>
            {" "}
            <h1>{msg}</h1>{" "}
          </main>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Protected;
