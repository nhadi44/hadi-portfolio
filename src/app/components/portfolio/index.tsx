import { PortfolioCard } from './portfolioCard';

export const Portfolio = () => {
  return (
    <div className="max-w-[90%] mx-auto px-10 py-20">
      <h1 className="text-blue-500 dark:text-white text-center mb-14 font-semibold text-xl uppercase">
        My Projects
      </h1>
      <div className="grid lg:grid-cols-4 lg:gap-4">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
};
