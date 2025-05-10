import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { selectChartType } from "../redux/chartSlice";
import { ChartType } from "../types/chartTypes";
import PieChartComponent from "./charts/PieChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import LineChartComponent from "./charts/LineChartComponent";
import AreaChartComponent from "./charts/AreaChartComponent";
import {
  areaChartPreviewData,
  barChartPreviewData,
  lineChartPreviewData,
  pieChartPreviewData,
} from "../utils/chartPreviewData";

const ChartTypeSelection = () => {
  const dispatch = useAppDispatch();

  const handleSelectChart = (chartType: ChartType) => {
    dispatch(selectChartType(chartType));
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Select Chart Type
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Choose the type of chart you want to create. A preview is shown for each
        chart type.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Pie Chart Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Pie Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Good for showing proportions of a whole, like spending by
                category.
              </Typography>
            </CardContent>
            <CardMedia sx={{ height: 200, padding: 2 }}>
              <PieChartComponent data={pieChartPreviewData} isPreview={true} />
            </CardMedia>
            <CardContent>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSelectChart("pie")}
              >
                Select Pie Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Bar Chart Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Bar Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Good for comparing quantities across different categories.
              </Typography>
            </CardContent>
            <CardMedia sx={{ height: 200, padding: 2 }}>
              <BarChartComponent data={barChartPreviewData} isPreview={true} />
            </CardMedia>
            <CardContent>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSelectChart("bar")}
              >
                Select Bar Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Line Chart Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Line Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Good for showing trends over time or continuous data.
              </Typography>
            </CardContent>
            <CardMedia sx={{ height: 200, padding: 2 }}>
              <LineChartComponent
                data={lineChartPreviewData}
                isPreview={true}
              />
            </CardMedia>
            <CardContent>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSelectChart("line")}
              >
                Select Line Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Area Chart Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Area Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Good for showing cumulative totals over time.
              </Typography>
            </CardContent>
            <CardMedia sx={{ height: 200, padding: 2 }}>
              <AreaChartComponent
                data={areaChartPreviewData}
                isPreview={true}
              />
            </CardMedia>
            <CardContent>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSelectChart("area")}
              >
                Select Area Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartTypeSelection;
