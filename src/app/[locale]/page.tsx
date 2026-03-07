import {
  Em,
  Card,
  Container,
  Heading,
  Section,
  Text,
  Link,
  Flex,
  Separator,
  Grid,
  Callout,
} from "@radix-ui/themes";
import { getTranslations } from "next-intl/server";

import {
  ExclamationTriangleIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { AppCard } from "@/components/AppCard/AppCard";

import tunci from "./images/tunci.png";
import kampisos from "./images/kampisos.png";
import minecraft_ainu from "./images/minecraft-ainu.png";
import ainu_corpora from "./images/ainu-corpora.png";
import ainu_utils from "./images/utils.png";

export default async function Home(props: PageProps<"/[locale]">) {
  const { params } = props;
  const { locale } = await params;

  const t = await getTranslations("/app/[locale]/page");

  return (
    <Container size="2" mx="3">
      <Section size="3">
        <Text
          as="p"
          size={{ initial: "7", md: "8" }}
          weight={locale === "ja" || locale === "ain-Kana" ? "bold" : "regular"}
          style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}
        >
          {t.rich("title", {
            wbr: () => <wbr />,
          })}
        </Text>

        <Text as="p" mt="3">
          {t.rich("description", {
            em: (chunks) => <Em>{chunks}</Em>,
            link: (chunks) => (
              <Link href="https://neet.love" target="_blank">
                {chunks}
              </Link>
            ),
          })}
        </Text>
      </Section>

      <Separator decorative />
      <Section size="2">
        <Heading as="h2" size={{ initial: "5", md: "7" }} mb="1">
          {t("ethics")}
        </Heading>

        <Callout.Root color="gray" mt="3">
          <Callout.Icon>
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>{t("ethics_desc")}</Callout.Text>
        </Callout.Root>
      </Section>
      <Separator decorative />

      <Section size="2">
        <Heading as="h2" size={{ initial: "5", md: "7" }} mb="1">
          {t("apps")}
        </Heading>

        <Text as="p" size="4" mb="3">
          {t("apps_desc")}
        </Text>

        <Grid gap="3" columns={{ initial: "1", md: "2" }} align="start">
          <AppCard
            title="Kampisos"
            src={kampisos}
            description={t("app_entry_kampisos")}
            href="https://kampisos.aynu.io"
          />

          <AppCard
            title="Tunci"
            src={tunci}
            description={t("app_entry_tunci")}
            href="https://tunci.aynu.io"
          />

          <AppCard
            title="ainu-corpora"
            src={ainu_corpora}
            description={t("app_entry_ainu_corpora")}
            href="https://github.com/aynumosir/ainu-corpora"
            access={false}
          />

          <AppCard
            title="minecraft-ainu"
            src={minecraft_ainu}
            description={t("app_entry_minecraft_ainu")}
            href="https://github.com/aynumosir/minecraft-ainu"
          />

          <AppCard
            title="ainu-utils"
            src={ainu_utils}
            description={t("app_entry_ainu_utils")}
            href="https://github.com/aynumosir/ainu-utils"
          />
        </Grid>
      </Section>

      <Separator decorative />

      <Section size="2">
        <Heading as="h2" size={{ initial: "5", md: "7" }} mb="1">
          {t("elsewhere")}
        </Heading>

        <Text as="p" size="4" mb="3">
          {t("elsewhere_desc")}
        </Text>

        <Flex gap="4">
          <Card>
            <Flex gap="1" align="center" asChild>
              <Link href="https://huggingface.co/aynumosir" target="_blank">
                Hugging Face
                <ExternalLinkIcon aria-hidden />
              </Link>
            </Flex>
          </Card>

          <Card>
            <Flex gap="1" align="center" asChild>
              <Link href="https://github.com/aynumosir" target="_blank">
                GitHub
                <ExternalLinkIcon aria-hidden />
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Section>
    </Container>
  );
}
