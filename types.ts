// Fix: Import React to resolve the 'React' namespace for React.ReactNode
import React from 'react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Member {
  name: string;
  role?: string;
  imageUrl: string;
}

export interface Project {
  title: string;
  story: string;
  imageUrl: string;
  tag: string;
}