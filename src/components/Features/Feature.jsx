import { AiOutlineCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
           <p className="flex gap-2 items-center">
           <AiOutlineCheckCircle className="text-green-700 text-xl border rounded-full border-white"></AiOutlineCheckCircle>
            {feature}</p>
        </div>
    );
};

export default Feature;