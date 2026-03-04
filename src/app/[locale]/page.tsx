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
} from "@radix-ui/themes";
import { getTranslations } from "next-intl/server";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { AppCard } from "@/components/AppCard/AppCard";

import tunci from "./tunci.png";
import kampisos from "./kampisos.png";
import minecraft_ainu from "./minecraft-ainu.png";
import ainu_corpora from "./ainu-corpora.png";

export default async function Home(props: PageProps<"/[locale]">) {
  const { params } = props;
  const { locale } = await params;

  const t = await getTranslations("/app/[locale]/page");

  return (
    <Container size="2" mx="3">
      <Section size="3">
        <Text
          as="p"
          size={{ initial: "6", md: "8" }}
          weight={locale === "ja" ? "bold" : "regular"}
          style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}
        >
          {t.rich("about", {
            em: (chunks) => <Em>{chunks}</Em>,
            wbr: () => <wbr />,
          })}
        </Text>
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
            href="https://tunci.aynu.io"
            access={false}
          />

          <AppCard
            title="minecraft-ainu"
            src={minecraft_ainu}
            description={t("app_entry_minecraft_ainu")}
            href="https://github.com/aynumosir/minecraft-ainu"
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
            <Link href="https://huggingface.co/aynumosir" target="_blank">
              <Flex gap="1" align="center">
                Hugging Face
                <ExternalLinkIcon aria-hidden />
              </Flex>
            </Link>
          </Card>

          <Card>
            <Link href="https://github.com/aynumosir" target="_blank">
              <Flex gap="1" align="center">
                GitHub
                <ExternalLinkIcon aria-hidden />
              </Flex>
            </Link>
          </Card>
        </Flex>
      </Section>
    </Container>
  );
}
