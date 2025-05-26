interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      {icon && (
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-playfair mb-4 text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}