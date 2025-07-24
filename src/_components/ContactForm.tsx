"use client";

import { useToast } from "@/_hooks/use-toast";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simule une soumission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Formulaire */}
      <Card>
        <CardHeader>
          <CardTitle>Demande de devis</CardTitle>
          <CardDescription>
            Décrivez-nous votre projet pour recevoir un devis personnalisé
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">Prénom *</Label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div>
                <Label htmlFor="lastName">Nom *</Label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" name="phone" type="tel" />
              </div>
            </div>

            <div>
              <Label htmlFor="city">Ville</Label>
              <Input
                id="city"
                name="city"
                placeholder="Pour vérifier notre zone d'intervention"
              />
            </div>

            <div>
              <Label htmlFor="projectType">Type de projet</Label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="">Sélectionnez un type de projet</option>
                <option value="cuisine">Cuisine sur mesure</option>
                <option value="escalier">Marches et escaliers</option>
                <option value="dressing">Dressing sur mesure</option>
                <option value="bibliotheque">Bibliothèque</option>
                <option value="meubles">Meubles sur mesure</option>
                <option value="parquet">Parquet</option>
                <option value="volets">Volets</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <Label htmlFor="message">Description du projet *</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Décrivez votre projet : dimensions approximatives, matériaux souhaités, contraintes particulières, délais..."
              />
            </div>

            <div>
              <Label htmlFor="budget">Budget envisagé (optionnel)</Label>
              <select
                id="budget"
                name="budget"
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="">Sélectionnez une fourchette</option>
                <option value="moins-1000">Moins de 1 000 €</option>
                <option value="1000-3000">1 000 - 3 000 €</option>
                <option value="3000-5000">3 000 - 5 000 €</option>
                <option value="5000-10000">5 000 - 10 000 €</option>
                <option value="plus-10000">Plus de 10 000 €</option>
              </select>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>Envoi en cours...</>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer ma demande
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground">
              * Champs obligatoires. Vos données personnelles sont protégées et
              ne seront utilisées que pour traiter votre demande.
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
