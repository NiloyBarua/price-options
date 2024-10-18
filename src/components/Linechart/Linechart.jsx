import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { "student": "Alice", "math": 85, "physics": 78, "chemistry": 90 },
        { "student": "Bob", "math": 92, "physics": 88, "chemistry": 85 },
        { "student": "Charlie", "math": 78, "physics": 82, "chemistry": 76 },
        { "student": "David", "math": 88, "physics": 90, "chemistry": 80 },
        { "student": "Eva", "math": 95, "physics": 92, "chemistry": 89 },
        { "student": "Frank", "math": 82, "physics": 75, "chemistry": 88 },
        { "student": "Grace", "math": 90, "physics": 85, "chemistry": 91 },
        { "student": "Hannah", "math": 76, "physics": 80, "chemistry": 84 },
        { "student": "Ian", "math": 89, "physics": 87, "chemistry": 92 },
        { "student": "Julia", "math": 91, "physics": 95, "chemistry": 94 }
    ]
    return (
        <div>
            <LChart width={800} height={500} data={studentMarks}>
                <XAxis dataKey='student'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;