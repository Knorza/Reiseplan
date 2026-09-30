# Unterwegs – Reiseplan (PWA)

Ein lokaler Reiseplan für mehrere Reisen und Tage. Einträge können SBB-Fahrplansuchen, Fusswege in Google Maps, eigene Links oder Notizen sein. Die Pläne liegen in IndexedDB **nur auf dem jeweiligen Gerät und im jeweiligen Browser**. Die Dateien der App werden für die Offline-Nutzung zwischengespeichert; SBB und Maps selbst sind externe Online-Dienste.

## GitHub Pages veröffentlichen

1. Den **Inhalt dieses Ordners** ins Stammverzeichnis eines neuen GitHub-Repositories hochladen (alternativ den Ordner `reiseplan` hochladen und die Pages-Quelle entsprechend wählen).
2. Auf GitHub unter **Settings → Pages → Build and deployment** `Deploy from a branch`, Branch `main`, Ordner `/(root)` auswählen. Wenn der Ordner `reiseplan` im Repository liegt, verwende stattdessen ein Repository nur für diesen Ordner oder verschiebe die Dateien ins Stammverzeichnis: Pages veröffentlicht nicht beliebige Unterordner als Source.
3. Die angezeigte `https://<name>.github.io/<repository>/`-Adresse öffnen. Nach dem ersten vollständigen Laden ist die App offline nutzbar. Im Browser-Menü **App installieren** / **Zum Startbildschirm hinzufügen** wählen; wo unterstützt, erscheint auch eine Installationsschaltfläche in der App.
4. Bei Aktualisierungen `unterwegs-v1` in `sw.js` erhöhen, damit vorhandene Installationen die neuen Dateien laden. Service Worker funktionieren unter GitHub Pages (HTTPS) oder localhost, nicht zuverlässig beim Öffnen einer HTML-Datei über `file://`.

Die `./`-Pfade in Manifest, Service Worker und HTML sind absichtlich relativ und funktionieren auch unter einem GitHub-Pages-Projektpfad. Zur Sicherung in der App **Backup exportieren** verwenden und die JSON-Datei sicher aufbewahren. **Backup importieren** ersetzt die derzeitigen lokalen Reisen nach Bestätigung.

Die SBB-Verlinkung verwendet die von SBB dokumentierten Deep-Link-Parameter `von`, `nach`, `date`, `time`, `moment=DEPARTURE`. Sie öffnet eine **Fahrplansuche**, keine fest gebuchte oder garantierte Verbindung. Die SBB-Seite kann ihre Linkstruktur später ändern. Dokumentation: https://company.sbb.ch/content/dam/internet/corporate/downloads/de/sbb-als-geschaeftspartner/dienstleistungen/fahrplanintegration/Deep_Linking_SBB_Fahrplan.pdf.sbbdownload.pdf . Die Fussweg-Links nutzen die offizielle Maps-URL-Syntax: https://developers.google.com/maps/documentation/urls/get-started .
