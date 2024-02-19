import { services } from "../constants";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((services) => (
        <serviceCard key={services.label} {...services} />
      ))}
    </section>
  );
};

export default Services;
