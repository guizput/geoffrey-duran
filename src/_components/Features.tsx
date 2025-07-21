import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Step {
  title: string;
  description: string;
}

interface Feature {
  title: string;
  description: string;
  items: string[];
}

interface Process {
  title: string;
  description: string;
  steps: Step[];
}

export default function Features({
  features,
  process,
}: {
  features: Feature;
  process: Process;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {features.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {features.description}
            </p>
            <ul className="mt-8 space-y-4">
              {features.items.map((feature, index) => (
                <li
                  key={feature + index}
                  className="flex items-start space-x-3"
                >
                  <Check className="h-6 w-6 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{process.title}</CardTitle>
              <CardDescription>{process.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {process.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
