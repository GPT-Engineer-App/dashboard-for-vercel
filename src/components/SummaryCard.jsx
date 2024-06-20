import { Box, Text, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const SummaryCard = ({ title, value }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="sm">
      <Stat>
        <StatLabel>{title}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
};

export default SummaryCard;