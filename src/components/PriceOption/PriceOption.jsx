import Feature from "../Features/Feature";


const PriceOption = ({gym}) => {
    const {name, price, features}= gym;
    return (
        <div className="flex flex-col bg-sky-500 p-5 rounded-lg text-white mt-10 text-center">
            <h1>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-xl">/mon</span>
            </h1>
            <h2 className="text-3xl">{name}</h2>
           <div className="space-y-2 mt-2 pl-6 flex-grow">
                {
                    features.map(feature => <Feature feature={feature}></Feature>)
                }
           </div>
           <button className="bg-green-500 w-full mt-2 p-2  rounded-md font-semibold">Buy Now</button>
        </div>
    );
};

export default PriceOption;