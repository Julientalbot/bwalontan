import CheckIcon from './icons/CheckIcon';

interface BenefitItemProps {
  title: string;
  description: string;
}

export default function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <CheckIcon className="w-6 h-6 text-green-800" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-green-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}