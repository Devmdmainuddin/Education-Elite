
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, } from 'recharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaBookReader, FaDollarSign, FaUser } from 'react-icons/fa';
const AdminHomeRechart = () => {
    const axiosSecure = useAxiosSecure()

    const { data: adminStats = [] } = useQuery({
        queryKey: ['adminStats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['payment-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment-stats');
            return res.data
        }
    })

        // barchart .........................................
        const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
        const getPath = (x, y, width, height) => {
            return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
        };
    
        const TriangleBar = (props) => {
            const { fill, x, y, width, height } = props;
    
            return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
        };

        // PieChartWithCustomizedLabel.........................................
        const pieChartData = chartData.map(data => {
            return { name: data.SubjectCategorey, value: data.Revenue }
        })
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
            <div className=" p-5 bg-[#ddf5f1]">
                <h5 className="text-3xl text-gray-700 leading-5 font-semibold text-center uppercase">user</h5>
               
                  <div className="mt-3 p-1 flex  items-center justify-center gap-x-4">
                    <span className="text-2xl leading-none text-gray-700 font-semibold">{adminStats.users}</span>
                    <FaUser className='text-2xl'/>
                  </div>
              
              </div>
              <div className=" p-2 bg-[#ddf5f1]">
                <h5 className="text-3xl text-gray-700 leading-5 font-semibold text-center uppercase">apply scholarship</h5>  
                  <div className="mt-3 p-1 flex  items-center justify-center gap-x-4">
                    <span className="text-2xl leading-none text-gray-700 font-semibold">{adminStats.apply}</span>
                    <FaBookReader className='text-2xl'/>
                  </div>
              </div>
              <div className=" p-2 bg-[#ddf5f1]">
                <h5 className="text-3xl text-gray-700 leading-5 font-semibold text-center uppercase">total payment</h5>
                  <div className="mt-3 p-1  flex  items-center justify-center gap-x-4">
                    <span className="text-2xl leading-none text-gray-700  font-semibold">{adminStats.revenue}</span>
                    <FaDollarSign className='text-2xl'/>
                   
                  </div>
              </div>
            </div>
             <div className="flex flex-col md:flex-row">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis/>
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>

                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHomeRechart;