Live-Demo: https://my-chess-challenge.herokuapp.com/

Diese Schach-App lässt zwei Spieler zusammen spielen. Sie prüft wer am Zug ist. Gleichzeitig ist der Zug für den anderen Spieler blockiert. Das Brett erkennt die Figurenbewegung, ihre neue Position und dass Figuren geschlagen werden.

Den Spielzustand kontrolliert Redux.

Außerdem zeichnet die App den Spielverlauf auf und macht eine Liste der Züge. Jeder Zug ist ein Link, damit der Nutzer zum damaligen Zustand zurückkommen kann.

Während der Entwicklung der App habe ich zwei Hauptschwierigkeiten mit dem Brett gehabt.

Die erste war, das rechte Brett umzudrehen.Mit CSS habe ich geschafft, das Brett und die Figuren umzudrehen. Aber die gegebene Bibliothek ist so gebaut, dass in dem Fall die Figuren auf dem zweiten Brett sich in der entgegengesetzten Richtung zur Maus bewegen. Deswegen ist nur ein Brett für beide Spieler aktiv, obwohl beide den aktuellen Spielzustand zeigen.

Die zweite Schwierigkeit war, dass das Brett die angegebene Höhe ignoriert, es orientiert sich an der Breite und verursacht dadurch Probleme mit dem Layout.

Unter den gemachten Features bin ich besonders stolz auf die interaktive Züge-Liste, damit man zurück zu jedem Spielzustand kommen kann.

Nicht implementiert sind die Zugregeln. Man kann jede Figur beliebig bewegen (bzw. sind Rochade und en passant nicht möglich).
