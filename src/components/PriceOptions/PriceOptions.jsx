import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

   const priceOptions =  [
        {
          "id": 1,
          "plan": "Starter",
          "price": 30,
          "duration": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "1 group fitness class per week",
            "Access during off-peak hours"
          ]
        },
        {
          "id": 2,
          "plan": "Essential",
          "price": 60,
          "duration": "monthly",
          "features": [
            "24/7 gym access",
            "Locker and shower facilities",
            "3 group fitness classes per week",
            "1 personal training session per month",
            "Free Wi-Fi"
          ]
        },
        {
          "id": 3,
          "plan": "Pro",
          "price": 90,
          "duration": "monthly",
          "features": [
            "24/7 gym access",
            "Unlimited group fitness classes",
            "3 personal training sessions per month",
            "Sauna and steam room access",
            "Locker, shower, and towel service",
            "Free protein shake once a week"
          ]
        },
        {
          "id": 4,
          "plan": "Starter",
          "price": 300,
          "duration": "yearly",
          "features": [
            "Access to gym equipment",
            "Locker access",
            "1 group fitness class per week",
            "Access during off-peak hours"
          ]
        },
        {
          "id": 5,
          "plan": "Essential",
          "price": 600,
          "duration": "yearly",
          "features": [
            "24/7 gym access",
            "Locker and shower facilities",
            "3 group fitness classes per week",
            "1 personal training session per month",
            "Free Wi-Fi"
          ]
        },
        {
          "id": 6,
          "plan": "Pro",
          "price": 900,
          "duration": "yearly",
          "features": [
            "24/7 gym access",
            "Unlimited group fitness classes",
            "3 personal training sessions per month",
            "Sauna and steam room access",
            "Locker, shower, and towel service",
            "Free protein shake once a week"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-5xl">Best Prices In the Town</h2>
          <div className="grid md:grid-cols-3 gap-6">
          {
                priceOptions.map(option => <PriceOption key={option.id} option= {option}></PriceOption>)
            }
          </div>
        </div>
    );
};

export default PriceOptions;