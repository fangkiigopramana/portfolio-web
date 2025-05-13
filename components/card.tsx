import React from "react";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface IntegrationCardProps {
  name: string;
  category: string;
  description: string;
  link?: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  name,
  category,
  description,
  link = "/",
}) => {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: -8 }} whileTap={{ scale: 0.9 }}>
      <Card className="p-6">
        <div className="relative">
          <div className="space-y-2 py-6">
            <h3 className="text-base font-bold">{name}</h3>
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                {category}
              </span>
            </div>
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {description}
            </p>
          </div>

          <div className="flex gap-3 border-t border-dashed pt-6">
            <Button asChild size="sm" className="gap-1 pr-2 shadow-none">
              <Link href={link} target="blank">
                Demo
                <ChevronRight className="ml-0 !size-3.5 opacity-50" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default IntegrationCard;
