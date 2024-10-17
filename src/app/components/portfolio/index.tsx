import { PortfolioCard } from './portfolioCard';

export const Portfolio = () => {
  return (
    <div className="max-w-[90%] mx-auto px-10 py-24">
      <h1>Portfolio</h1>
      <div className="grid grid-cols-4 gap-4">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
};
