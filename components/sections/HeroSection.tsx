import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className = "",
  children
}: HeroSectionProps) {
  return (
    <section className={`py-20 bg-gradient-to-br from-green-50 to-emerald-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-lg text-green-600 font-medium mb-4">{subtitle}</p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          {children}
        </div>
        {imageSrc && (
          <div className="mt-12 max-w-4xl mx-auto">
            <Image
              src={imageSrc}
              alt={imageAlt || ""}
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}