import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  Card,
  Inset,
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Badge,
} from "@radix-ui/themes";
import { getTranslations } from "next-intl/server";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type AppCardProps = {
  title: string;
  src: StaticImageData;
  description: string;
  href: string;
  access?: boolean;
};

export const AppCard: FC<AppCardProps> = async (props) => {
  const { title, src, description, href, access = true } = props;

  const t = await getTranslations("/components/AppCard/AppCard");

  return (
    <Card>
      <Inset side="top" clip="padding-box">
        <Image
          src={src}
          alt=""
          sizes="300px"
          style={{ width: "100%", height: "auto" }}
        />
      </Inset>

      <Box mt="3">
        <Flex gap="2" align="center">
          <Heading size="4" as="h3" mb="1">
            {title}
          </Heading>

          {!access && <Badge variant="outline">{t("private")}</Badge>}
        </Flex>

        <Text as="p" mb="1">
          {description}
        </Text>

        <Flex align="center" gap="1" asChild>
          <Link href={href} target="_blank">
            {t("visit")}
            <ExternalLinkIcon aria-hidden />
          </Link>
        </Flex>
      </Box>
    </Card>
  );
};
