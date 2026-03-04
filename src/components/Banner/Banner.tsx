import { Container, Flex, Reset, Link as RadixLink } from "@radix-ui/themes";
import { FC } from "react";

import { Link } from "@/i18n/navigation";

export const Banner: FC = () => {
  return (
    <header className="banner">
      <Container size="4" p="3">
        <Flex justify="between" align="center">
          <RadixLink asChild size="5">
            <Link href="/">
              <Reset>
                <h1>aynu.io</h1>
              </Reset>
            </Link>
          </RadixLink>
        </Flex>
      </Container>
    </header>
  );
};
