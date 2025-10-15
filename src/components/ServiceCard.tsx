import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
  buttonText = "Learn More",
  onButtonClick,
}: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-md hover-lift animate-fade-in">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        
        {/* Icon */}
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-3">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
