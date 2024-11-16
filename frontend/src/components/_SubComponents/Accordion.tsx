import React, { useEffect, useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const API_URL = 'http://localhost:3000/accordion'; // DAta ebdpoint

const Accordion: React.FC = () => {
  const [items, setItems] = useState<AccordionItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.id} className="accordionItem">
          <div
            className="accordionHeader"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="accordionTitle">{item.title}</h3>
          </div>
          {activeIndex === index && (
            <div className="accordionContent">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
