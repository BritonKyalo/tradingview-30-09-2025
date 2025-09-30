new TradingView.widget({
    "autosize": true,
    "symbol": "OANDA:XAUUSD",  // ✅ Changed here
    "interval": "240",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": true,
    "withdateranges": false,
    "hide_side_toolbar": true,
    "allow_symbol_change": true,
    "watchlist": [
        "OANDA:XAUUSD",
        "OANDA:EURUSD",
        "OANDA:GBPUSD",
        "OANDA:USDJPY"
    ],
    "details": true,
    "hotlist": true,
    "calendar": true,
    "studies": [
        "STD;SMA"
    ],
    "container_id": "chart",
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650"
});