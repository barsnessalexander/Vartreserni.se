import { Pie } from 'react-chartjs-2';

function GenderDistribution({ data }) {
  if (!data) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 p-4 bg-gray-50 rounded-lg">
        Ingen data tillgänglig
      </div>
    );
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 14,
            family: "'Inter', sans-serif"
          },
          usePointStyle: true,
          pointStyle: 'circle'
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    }
  };

  return (
    <div className="h-48">
      <Pie data={data} options={options} />
    </div>
  );
}

export default GenderDistribution;