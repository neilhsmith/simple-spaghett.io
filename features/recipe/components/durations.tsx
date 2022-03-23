import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { FaRegClock } from "react-icons/fa";
import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  Duration as IDuration,
  parseISO8601Duration,
} from "@common/util/duration";

const prettify = (duration: IDuration) => {
  let result = "";

  duration.years && (result += `${duration.years}Y `);
  duration.months && (result += `${duration.months}M `);
  duration.weeks && (result += `${duration.weeks}W `);
  duration.days && (result += `${duration.days}D `);
  duration.hours && (result += `${duration.hours}h `);
  duration.minutes && (result += `${duration.minutes}m `);
  duration.seconds && (result += `${duration.seconds}s `);

  return result;
};

type DurationListProps = {
  children: Array<DurationProps>;
};

type DurationProps = {
  label: string;
  value: string;
};

export const DurationList: FC<DurationListProps> = ({ children }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {children.map((d, i) => (
        <Duration key={i} label={d.label} value={d.value} />
      ))}
    </Flex>
  );
};

const Duration: FC<DurationProps> = ({ label, value }) => {
  const result = parseISO8601Duration(value);

  return (
    result && (
      <HStack spacing={[1, 2, 3]} justifyContent="center">
        <Icon as={FaRegClock} boxSize={[10, 12, 12]} />
        <VStack align="flex-start" justifyContent="center">
          <Text as="label" fontSize={["sm", "md", "xl"]} lineHeight=".5">
            {label}
          </Text>
          <Text
            as="span"
            margin="0"
            fontSize={["md", "lg", "2xl"]}
            fontWeight="semibold"
            lineHeight="short"
          >
            {prettify(result)}
          </Text>
        </VStack>
      </HStack>
    )
  );
};
