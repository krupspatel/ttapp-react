// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function BarDetailChart() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
			{
			  "autosize": true,
			  "symbol": "NASDAQ:AAPL",
			  "interval": "D",
			  "timezone": "exchange",
			  "theme": "light",
			  "style": "0",
			  "locale": "en",
			  "allow_symbol_change": true,
			  "calendar": false,
			  "withdateranges": true,
			  "allow_symbol_change": true,
			  "save_image": false,
			  "details": true,
			  "hotlist": true,
			  "calendar": false,
			  "support_host": "https://www.tradingview.com"
			}`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(BarDetailChart);