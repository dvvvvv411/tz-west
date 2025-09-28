import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-foreground">TZ-West GmbH</h1>
          <p className="text-sm text-muted-foreground">Düsselstr. 1, 41564 Kaarst</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Insolvency Notice */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-destructive mb-4">
                Insolvenzverfahren eröffnet
              </h1>
              <p className="text-lg text-foreground mb-4">
                Das Insolvenzverfahren über das Vermögen der TZ-West GmbH wurde eröffnet.
              </p>
              <p className="text-base text-muted-foreground">
                Es werden keine Geschäfte mehr durchgeführt. Alle geschäftlichen Anfragen sind an den Insolvenzverwalter zu richten.
              </p>
            </div>
          </div>
        </section>

        {/* Administrator Contact - Main Focus */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary bg-primary/5">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-primary">Ansprechpartner</CardTitle>
              <p className="text-muted-foreground">Für alle Anfragen wenden Sie sich bitte an den Insolvenzverwalter</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Mark Steh</h3>
                <p className="text-primary font-medium">Rechtsanwalt</p>
                <p className="text-muted-foreground">Fachanwalt für Insolvenzrecht</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Adresse</p>
                      <p className="text-muted-foreground">Speldorfer Str. 2</p>
                      <p className="text-muted-foreground">40239 Düsseldorf</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <a href="tel:+492115426220" className="text-primary hover:underline">
                        (0211) 54262200
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-Mail</p>
                      <a href="mailto:m.steh@kbs-kanzlei.de" className="text-primary hover:underline">
                        m.steh@kbs-kanzlei.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Website</p>
                      <a href="https://kbs-kanzlei.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        kbs-kanzlei.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="tel:+492115426220">
                      <Phone className="h-4 w-4 mr-2" />
                      Anrufen
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:m.steh@kbs-kanzlei.de">
                      <Mail className="h-4 w-4 mr-2" />
                      E-Mail senden
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Information */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Unternehmensinformationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">TZ-West GmbH</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Düsselstr. 1</p>
                    <p>41564 Kaarst</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">info@tz-west.de</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">tz-west.de</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Wichtiger Hinweis:</strong> Die TZ-West GmbH befindet sich im Insolvenzverfahren.
            </p>
            <p>
              Alle geschäftlichen Anfragen sind ausschließlich an den Insolvenzverwalter zu richten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
