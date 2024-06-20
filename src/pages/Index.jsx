import { Container, SimpleGrid, Box, Heading, Progress } from "@chakra-ui/react";
import SummaryCard from "../components/SummaryCard";
import LineChart from "../components/LineChart";
import DataTable from "../components/DataTable";

const Index = () => {
  const summaryData = [
    { title: "Total Visits", value: "1,234" },
    { title: "Unique Users", value: "567" },
    { title: "Bounce Rate", value: "45%" },
  ];

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Visits",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Visits",
      },
    },
  };

  const tableColumns = ["Date", "Visits", "Unique Users", "Bounce Rate"];
  const tableData = [
    ["2023-01-01", "100", "80", "20%"],
    ["2023-01-02", "150", "120", "25%"],
    ["2023-01-03", "200", "160", "30%"],
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6}>
        Analytics Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={6}>
        {summaryData.map((data, index) => (
          <SummaryCard key={index} title={data.title} value={data.value} />
        ))}
      </SimpleGrid>
      <Box mb={6}>
        <LineChart data={lineChartData} options={lineChartOptions} />
      </Box>
      <Box mb={6}>
        <Heading as="h2" size="md" mb={4}>
          Progress Example
        </Heading>
        <Progress value={70} size="lg" colorScheme="green" />
      </Box>
      <Box>
        <DataTable columns={tableColumns} data={tableData} />
      </Box>
    </Container>
  );
};

export default Index;