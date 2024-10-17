import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ColorRing } from 'react-loader-spinner';
import { useEffect, useState } from 'react';

const Chart = () => {

    
    const [loading, setloading] = useState(true);
    
    useEffect(()=>{
        setloading(false)
    },[])

    const studentsData = [
        { id: 1, name: "John", Math: 85, English: 90, Science: 88 },
        { id: 2, name: "Emily", Math: 78, English: 82, Science: 85 },
        { id: 3, name: "Michael", Math: 92, English: 88, Science: 94 },
        { id: 4, name: "Sophia", Math: 70, English: 75, Science: 80 },
        { id: 5, name: "David", Math: 88, English: 85, Science: 87 }
      ];
      

    return (
        <div>
             <div className="flex justify-center">
            {
                loading && <ColorRing 
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            }
             </div>
            <BarChart width={600} height={300} data={studentsData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="Math" fill="#84d8" barSize={30} />
                <Bar dataKey="English" fill="#4d8" barSize={30} />
                <Bar dataKey="Science" fill="#35d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Chart;