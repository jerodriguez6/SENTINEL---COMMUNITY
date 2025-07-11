import React from 'react';

const CryptoTicker = () => {
  const cryptoData = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$66,234', change: '+2.4%', isPositive: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,456', change: '-1.2%', isPositive: false },
    { symbol: 'BNB', name: 'BNB', price: '$589', change: '+3.7%', isPositive: true },
    { symbol: 'SOL', name: 'Solana', price: '$156', change: '+8.9%', isPositive: true },
    { symbol: 'ADA', name: 'Cardano', price: '$0.45', change: '+1.8%', isPositive: true },
    { symbol: 'AVAX', name: 'Avalanche', price: '$28.90', change: '-2.1%', isPositive: false },
    { symbol: 'DOT', name: 'Polkadot', price: '$6.78', change: '+5.3%', isPositive: true },
    { symbol: 'MATIC', name: 'Polygon', price: '$0.89', change: '+4.2%', isPositive: true },
    { symbol: 'LINK', name: 'Chainlink', price: '$14.56', change: '-0.8%', isPositive: false },
    { symbol: 'UNI', name: 'Uniswap', price: '$7.23', change: '+2.9%', isPositive: true },
    { symbol: 'LTC', name: 'Litecoin', price: '$89.45', change: '+1.5%', isPositive: true },
    { symbol: 'XRP', name: 'Ripple', price: '$0.52', change: '-1.9%', isPositive: false },
  ];

  return (
    <div className="bg-zinc-950 border-b border-zinc-800 overflow-hidden relative">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {/* Duplicate content for seamless loop */}
          {[...cryptoData, ...cryptoData].map((crypto, index) => (
            <div key={index} className="ticker-item flex items-center space-x-2 whitespace-nowrap">
              <span className="text-white font-medium text-sm">{crypto.symbol}</span>
              <span className="text-slate-400 text-xs">{crypto.name}</span>
              <span className="text-white text-sm">{crypto.price}</span>
              <span className={`text-sm font-medium ${
                crypto.isPositive ? 'text-green-400' : 'text-red-400'
              }`}>
                {crypto.change}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }
        
        .ticker-content {
          display: flex;
          animation: scroll-left 60s linear infinite;
          width: fit-content;
        }
        
        .ticker-item {
          padding: 8px 24px;
          border-right: 1px solid #3f3f46;
          flex-shrink: 0;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .ticker-wrapper:hover .ticker-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CryptoTicker;