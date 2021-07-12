import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStockPricingData } from "./store/actions/stock-pricing";
import ToggleLoggingButton from "./components/ToggleLogging";
import StockSummaryContainer from "./components/StockSummary";
import StockLogsContainer from "./components/StockLogs";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchStockPricingData());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Container data-testid="stock-pricing-app">
      <ToggleLoggingButton />
      <Row>
        <Col>
          <StockLogsContainer />
        </Col>
        <Col>
          <StockSummaryContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
