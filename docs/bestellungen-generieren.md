# Bestellung generieren

## Die Generierung einer Bestellung
Führen Sie im Wahlfeld die Funktion "I = Bestellung generieren" aus.

### Lieferadressen und Parameter
- Wenn bei Aufträgen oder Projekten Lieferadressen hinterlegt sind, wird standardmäßig die Lieferadresse übergeben (IDS).
- Diese Einstellung kann mit einem Parameter unter **Einstellungen → Parameter → Bestellung/GAEB Ausgabe** geändert werden.

### Artikeltypen
#### Vernummerte Artikel
1. Beim Generieren werden Artikel ohne Artikelnummer übernommen.
2. Alle Artikel des Auftrags werden übernommen.
3. Eine oder mehrere Bestellungen werden anhand der Lieferantenkennung/en erzeugt. Artikel ohne Artikelnummer werden nicht übernommen.
4. Das Programm erzeugt Bestellungen anhand der Lieferantennummer in der L-Zeile.
5. Bestellungen werden anhand der Lieferantenkennung/en erstellt. Artikel ohne Artikelnummer werden übernommen.

#### Unvernummert
- Bestimmt, ob Artikel ohne Artikelnummer in die Bestellung übernommen werden.

### Weitere Optionen
- **Drucken**: Das Druckfenster öffnet sich nach erfolgreicher Generierung.
- **Zusammenfassen**:
    - Einstellung "J": Artikel mit gleicher Nummer werden zusammengefasst (Positionen werden neu sortiert).
    - Einstellung "N": Reihenfolge bleibt unverändert.
- **inkl. Stückliste**:
    - Einstellung "J": Artikel aus der Stückliste werden übernommen.
    - Einstellung "N": Nur der Hauptartikel wird übernommen.
- **Kz. gen. Bestell.**:
    - Einstellung 1 oder 2 fügt eine L-Zeile unter der Artikelzeile hinzu.
- **Alt./Bedarf übern.**: Alternativ- und Bedarfspositionen werden übernommen.
- **Bestellnr.**: Vorschlag der nächsten freien Nummer.
- **Austauschtabellen anwenden**: Ermöglicht den Austausch von Artikeln verschiedener Lieferanten.

---

## Startbefehle
- **K**: Ab der aktuellen Zeile
- **G**: Alle Einträge
- **M**: Markierte Einträge
- **B**: Einträge aus dem Buffer
- **L**: Lagerbestände berücksichtigen

### Beispiele zur Lagerbestandsprüfung
1. **Lagerbestand ausreichend**:
    - Artikel wird nicht übernommen, wenn Mindestbestand nicht unterschritten.
2. **Mindestbestand unterschritten**:
    - Artikel wird übernommen, um Mindestbestand zu sichern.
3. **Teilweise verfügbar**:
    - Fehlende Mengen werden basierend auf Mindestbestand und Mindestbestellmenge ergänzt.
4. **Nicht verfügbar**:
    - Vollständige benötigte Menge wird bestellt.

---
