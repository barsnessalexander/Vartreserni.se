import { Bar } from 'react-chartjs-2';

function AgeDistribution({ data }) {
  if (!data || !data.percentages) {
    return (
      <div className="flex items-center justify-center text-gray-500 p-4 bg-gray-50 rounded-lg">
        Ingen data tillgänglig
      </div>
    );
  }

  return (
    <div>
      <div className="h-12 mb-4">
        <Bar
          data={data}
          options={{
            indexAxis: 'y',
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
                display: false,
                max: 100,
                grid: {
                  display: false
                }
              },
              y: {
                display: false,
                stacked: true,
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: {
                  size: 14,
                  family: "'Inter', sans-serif"
                },
                bodyFont: {
                  size: 13,
                  family: "'Inter', sans-serif"
                },
                padding: 12,
                cornerRadius: 8
              }
            },
            animation: {
              duration: 1500,
              easing: 'easeInOutQuart'
            }
          }}
        />
      </div>
      
      <div className="mt-4 space-y-2">
        {data.percentages.map(({ age, percentage }) => (
          <div 
            key={age} 
            className="flex items-center justify-between text-sm bg-white p-2 rounded-lg border border-gray-100"
          >
            <div className="flex items-center">
              <div 
                className="w-4 h-4 mr-2 rounded-full"
                style={{ 
                  backgroundColor: data.colors[age].bg,
                  border: `1px solid ${data.colors[age].border}`
                }}
              ></div>
              <span className="font-medium" style={{ color: data.colors[age].text }}>
                {age} år
              </span>
            </div>
            <span className="font-bold text-gray-700">{percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeDistribution;