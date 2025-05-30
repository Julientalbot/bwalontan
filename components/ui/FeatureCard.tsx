interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  iconBgColor?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  features = [],
  iconBgColor = "bg-green-100"
}: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-serif text-green-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="text-sm text-gray-500 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
}