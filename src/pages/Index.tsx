import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Professional Header */}
      <header className="professional-header text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">TZ-West GmbH</h1>
          <p className="text-primary-foreground/80">Düsselstr. 1, 41564 Kaarst</p>
        </div>
      </header>

      {/* Main Content - Flex Grow */}
      <main className="container mx-auto px-4 py-12 space-y-12 flex-1">
        {/* Insolvency Notice */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="insolvency-notice rounded-lg p-8 mb-8">
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

        {/* Administrator Contact - MAIN FOCAL POINT */}
        <section className="max-w-5xl mx-auto">
          <Card className="administrator-card border-2 border-accent/50 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl grey-accent mb-4">Insolvenzverwalter</CardTitle>
              <p className="text-muted-foreground text-xl">Ihr Ansprechpartner für alle Anfragen</p>
            </CardHeader>
            <CardContent className="space-y-10">
              
              {/* Legal Notice - Prominent */}
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Offizielle Bekanntmachung</h3>
                <div className="space-y-4 text-foreground">
                  <p className="leading-relaxed">
                    <strong>Hiermit wird bekannt gegeben, dass über das Vermögen der Gesellschaft das Insolvenzverfahren eröffnet wurde.</strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>Alle Zahlungen sind ab sofort ausschließlich an den Insolvenzverwalter zu leisten.</strong>
                  </p>
                  <p className="leading-relaxed">
                    Gläubiger werden gebeten, ihre Forderungen beim Insolvenzverwalter anzumelden. Weitere Informationen zum Verfahren erhalten Sie über die Kanzlei des Insolvenzverwalters.
                  </p>
                </div>
              </div>

              {/* Administrator Info */}
              <div className="text-center bg-card p-6 rounded-lg border border-accent/20">
                <h3 className="text-3xl font-bold text-foreground mb-3">Mark Steh</h3>
                <p className="grey-accent font-semibold text-xl mb-2">Rechtsanwalt</p>
                <p className="text-muted-foreground text-lg">Fachanwalt für Insolvenzrecht</p>
              </div>
              
              {/* Contact Information - Single Column with Better Structure */}
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-start gap-6 p-4 rounded-lg bg-accent/5">
                  <MapPin className="h-7 w-7 text-accent mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-xl mb-2">Anschrift</p>
                    <div className="text-lg text-muted-foreground leading-relaxed">
                      <p>Speldorfer Str. 2</p>
                      <p>40239 Düsseldorf</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-4 rounded-lg bg-accent/5">
                  <Phone className="h-7 w-7 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-xl mb-2">Telefon</p>
                    <a href="tel:+492115426220" className="grey-accent hover:underline text-xl font-medium">
                      (0211) 54262200
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-4 rounded-lg bg-accent/5">
                  <Mail className="h-7 w-7 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-xl mb-2">E-Mail</p>
                    <a href="mailto:m.steh@kbs-kanzlei.de" className="grey-accent hover:underline text-lg font-medium break-all">
                      m.steh@kbs-kanzlei.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-4 rounded-lg bg-accent/5">
                  <Globe className="h-7 w-7 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-xl mb-2">Website</p>
                    <a href="https://kbs-kanzlei.de" target="_blank" rel="noopener noreferrer" className="grey-accent hover:underline text-lg font-medium">
                      kbs-kanzlei.de
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons - All Three */}
              <div className="text-center pt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
                  <Button asChild className="professional-button text-lg px-8 py-4 h-auto">
                    <a href="tel:+492115426220">
                      <Phone className="h-5 w-5 mr-3" />
                      Anrufen
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4 h-auto">
                    <a href="mailto:m.steh@kbs-kanzlei.de">
                      <Mail className="h-5 w-5 mr-3" />
                      E-Mail senden
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="text-lg px-8 py-4 h-auto bg-accent text-accent-foreground hover:bg-accent/80">
                    <a href="https://kbs-kanzlei.de" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5 mr-3" />
                      Zur Kanzlei Website
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company History */}
        <section className="max-w-4xl mx-auto">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-2xl">Unternehmensgeschichte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-3">KFZ-Handel seit 2021</h4>
                <p className="text-muted-foreground mb-4">
                  Die TZ-West GmbH wurde 2021 als spezialisierter KFZ-Händler gegründet und hat sich auf den Handel und die Vermittlung von Kraftfahrzeugen konzentriert.
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-foreground">Geschäftsführer:</span>
                    <span className="ml-2 text-muted-foreground">Glenn Josef Lothar Frickart</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Spezialisierung:</span>
                    <span className="ml-2 text-muted-foreground">KFZ-Handel und Fahrzeugvermittlung</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Gründungsjahr:</span>
                    <span className="ml-2 text-muted-foreground">2021</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Information */}
        <section className="max-w-4xl mx-auto">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-2xl">Unternehmensinformationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">TZ-West GmbH</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Düsselstr. 1</p>
                    <p>41564 Kaarst</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">info@tz-west.de</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">tz-west.de</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="professional-header text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="mb-3 text-lg">
              <strong>Wichtiger Hinweis:</strong> Die TZ-West GmbH befindet sich im Insolvenzverfahren.
            </p>
            <p className="text-primary-foreground/80">
              Alle geschäftlichen Anfragen sind ausschließlich an den Insolvenzverwalter zu richten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
