

import Link from "next/link";

const Datenschutz = () => {
  return (
    <>
    
      <div   className="bg-pewterC w-full ">
 <div className="relative text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-medium text-blackC">Datenschutz</h1>
          </div>
      <p>
        Telefon: <span>0151-1155 3031</span>
      </p>
      <p className="mb-4">E-Mail: info@ayhankublay.de</p>

      <p className="mb-4">
        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
        gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
        Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
      </p>

      <h2 className="mb-2">Speicherdauer</h2>
      <p className="mb-2">
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
        verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
        entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen
        rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
        steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
        Löschung nach Fortfall dieser Gründe.
      </p>

      <h2 className="mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h2>
      <p className="mb-4">
        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
        personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
        lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.
        Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in
        Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
        DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
        Ihr Endgerät eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von
        § 25 Abs. 1 TTDSG.
      </p>

      <h2 className="mb-2">Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h2>
      <p className="mb-4">
        Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
        datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
        personenbezogenen Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir
        weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau
        garantiert werden kann.
      </p>

      <h2 className="mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
      <p className="mb-4">
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
        Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der
        bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h2 className="mb-2">Recht auf Daten­übertrag­barkeit</h2>
      <p className="mb-4">
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
        eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
        maschinenlesbaren Format aushändigen zu lassen.
      </p>

      <h2 className="mb-2">Kontaktformular</h2>
      <p className="mb-4">
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
        Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
        der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
      </p>

      <h2 className="mb-2">Widerspruch gegen Werbe-E-Mails</h2>
      <p className="mb-4">
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
        Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
        hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
        Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-E-Mails, vor.
      </p>

      <h2 className="mb-2">Google Analytics</h2>
      <p className="mb-4">
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
        Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
      </p>
      <p className="mb-4">
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der{" "}
        <Link href="https://support.google.com/analytics/answer/6004245?hl=de">
          Datenschutzerklärung von Google
        </Link>
        .
      </p>

      <h2 className="mb-2">Google Maps</h2>
      <p className="mb-4">
        Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
        („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Details finden Sie in der{" "}
        <Link href="https://policies.google.com/privacy?hl=de">
          Datenschutzerklärung von Google
        </Link>
        
      </p>
      </div>
    </>
  );
};

export default Datenschutz;