import React from 'react';
import Accordion from './_SubComponents/Accordion';
import WhyCard from './_SubComponents/WhyCard';
import FeatureCard from './_SubComponents/FeatureCard';

const MainContent:React.FC = () => {

    interface WhyItem {
        id: number;
        img: string;
        title: string;
        description: string;
      }

    const reasons:WhyItem[] =[
        {
            id: 1,
            img: "https://guliva.io/static/media/flexible-img.fd6513acfd1f3c3f9f15.webp",
            title: "Affordable auto insurance",
            description: "We ensure you buy insurance only when you need it. Snap a picture of your"
        },
        {
            id: 2,
            img: "https://guliva.io/static/media/mileage-costs.28711f895c37bebc8f65.webp",
            title: "Full coverage options",
            description: "We ensure you buy insurance only when you need it. Snap a picture of your"
        },
        {
            id: 3,
            img: "https://guliva.io/static/media/helpful-reminders.7286ab6a343e2d88e6b6.webp",
            title: "Insurance only when you need it",
            description: "We ensure you buy insurance only when you need it. Snap a picture of your"
        }
    ]

    interface FeatureItem {
      id: number;
      title: string;
      description: string;
    }

  const features:FeatureItem[] =[
      {
          id: 1,
          title: "Start a trip",
          description: "Join Nigeria’s first mobile insurance platform where you can buy insurance for both yourself."
      },
      {
          id: 2,
          title: "Insure your vehicle",
          description: "Join Nigeria’s first mobile insurance platform where you can buy insurance for both yourself."
      },
      {
          id: 3,
          title: "End trip",
          description: "Join Nigeria’s first mobile insurance platform where you can buy insurance for both yourself."
      }
  ]

  return (
    <main >
      <section className='section1' >
      </section>
      <section>

        <div>
           <img src="https://guliva.io/static/media/phone-insurance.a4a16b849ddbefab55f8.webp" alt="" />
        </div>
        <div>
            <h2>How does pay per trip insurance work?</h2>
            <div>
                <div>

                </div>
                <div>
                  {features.map((feature)=>(
                    <FeatureCard key={feature.id} title={feature.title} description={feature.description}/>
                  ))}
                </div>
            </div>
        </div>
      </section>
      <section>
      </section>

      <section className='whySection'>
        <h2>WHY GULIVA</h2>
        <ul className='reasons'>
            {reasons.map((item)=>(
                <WhyCard key={item.id} img={item.img} title={item.title} description={item.description}/>
                ))}
        </ul>
      </section>

      <section>
        <div>
            <h3>Learn more about pay per trip insurance</h3>
            <p>For more information, please contact us:
                <ul>
                    <li>+234 817 627 9182</li>
                    <li>hello@guliva.com</li>
                </ul>
            </p>
        </div>
        <div>
            <ul>
                <Accordion/>
            </ul>
        </div>
      </section>
    </main>
  );
}
export default MainContent;
