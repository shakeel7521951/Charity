import Hero from "../_components/donor/Hero";
import PayOption from "../_components/donor/PayOption";
import Campaign from "../_components/donor/Campaign";
import MoneyPurs from "../_components/donor/MoneyPurs";
import WhyDonate from "../_components/donor/WhyDonate";
import Corporate from "../_components/donor/Corporate";

const Page = () => {

  return (
    <div>
      <Hero />
      <Corporate/>
      <PayOption />
      <Campaign />
      <MoneyPurs />
      <WhyDonate />
    </div>
  );
};

export default Page;
