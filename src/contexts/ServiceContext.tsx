"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import {
  type IEnrollmentService,
  type ILessonCompletionService,
  StubEnrollmentService,
  StubLessonCompletionService,
} from "@/services/interfaces";

interface ServiceContextType {
  enrollmentService: IEnrollmentService;
  lessonCompletionService: ILessonCompletionService;
}

const ServiceContext = createContext<ServiceContextType | null>(null);

export function ServiceProvider({ children }: { children: ReactNode }) {
  const services = useMemo(
    () => ({
      enrollmentService: new StubEnrollmentService(),
      lessonCompletionService: new StubLessonCompletionService(),
    }),
    []
  );

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServices() {
  const ctx = useContext(ServiceContext);
  if (!ctx) throw new Error("useServices must be within ServiceProvider");
  return ctx;
}
