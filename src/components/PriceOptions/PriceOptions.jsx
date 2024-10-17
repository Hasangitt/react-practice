import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const gyms = [
        { 
          id: 1, 
          name: "Fitness Pro Gym", 
          features: ["24/7 Access", "Personal Training", "Cardio Equipment", "Free Weights", "Group Classes"], 
          price: 50 
        },
        { 
          id: 2, 
          name: "Elite Strength Gym", 
          features: ["Olympic Weightlifting", "CrossFit Classes", "Strength Equipment", "Sauna", "Nutrition Coaching"], 
          price: 75 
        },
        { 
          id: 3, 
          name: "Cardio Plus Gym", 
          features: ["Treadmills", "Ellipticals", "Spin Classes", "Yoga Studio", "Massage Therapy"], 
          price: 40 
        },
        { 
          id: 4, 
          name: "Powerhouse Fitness", 
          features: ["Bodybuilding Equipment", "HIIT Classes", "Functional Training", "Locker Rooms", "Free Parking"], 
          price: 60 
        },
        { 
          id: 5, 
          name: "ZenFit Wellness Center", 
          features: [ "Hot Yoga", "Meditation Rooms", "Spa Services", "Healthy Café"], 
          price: 90 
        }
      ];
      

    return (
        <div className="m-14">
            <h1 className="text-5xl text-center text-teal-300">Best gym in the town:{gyms.length}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gyms.map(gym => <PriceOption key={gym.id} gym={gym}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;