import { Section, Text, VisuallyHidden } from "@radix-ui/themes";
import { getTranslations } from "next-intl/server";
import { FC } from "react";

export const ContentInfo: FC = async () => {
  const t = await getTranslations("/components/ContentInfo/ContentInfo");
  const titleId = "contentinfo-title";

  return (
    <Section size="1" asChild>
      <footer aria-labelledby={titleId}>
        <VisuallyHidden>
          <h2 id={titleId}>{t("title")}</h2>
        </VisuallyHidden>

        <Text as="p" size="2" align="center" mt="2" color="gray">
          Copyright
          <Text mx="1" aria-hidden="true">
            ©
          </Text>
          2026 Ryō Igarashi, All rights reserved.
        </Text>
      </footer>
    </Section>
  );
};
