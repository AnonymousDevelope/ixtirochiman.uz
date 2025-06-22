// src/components/ViewAllButton.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@components/ui/button';

const ViewAllButton: React.FC = () => (
  <div className="text-center">
    <Button
      variant="outline"
      className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark"
    >
      View All Posts
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  </div>
);

export default React.memo(ViewAllButton);