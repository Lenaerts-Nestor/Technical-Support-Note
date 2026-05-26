import type { Resource } from "../types";

// ============================================================
// ADD NEW RESOURCES HERE — do NOT touch UI components.
// Each entry must conform exactly to the Resource interface.
// ============================================================

export const RESOURCES: Record<string, Resource> = {

  "daily-mails": {
    id: "daily-mails",
    name: "Daily Mails Response",
    subtitle: "Standard response templates for common daily inquiries",
    initials: "DM",
    color: "#2563eb",
    sections: [
      {
        id: "general-inquiry",
        title: "Starting an Email Thread ",
        icon: "mail",
        description: "Use these templates to open a new case with the customer",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

Thank you for contacting Crestron's True Blue Support Team!
Case {!Case.CaseNumber} has been created for this issue.
 
As discussed during our call,
 
For further reference, could you please provide us with a Project name or reference.
 
Should you have any other query, please do not hesitate to contact us. Thank you.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},
 
Bedankt om contact op te nemen met Crestron's True Blue Support Team!
Case {!Case.CaseNumber} werd aangemaakt voor dit probleem.
 
Zoals besproken aan de telefoon/Zoals telefonisch besproken,
 
Voor verdere referentie, zou u ons een projectnaam of referentie kunnen bezorgen
 
Twijfel zeker niet om ons te contacteren indien u verdere vragen heeft. Alvast bedankt.`,
          },
          {
            language: "Español",
            content: `Estimado/a {!Contact.FirstName},
Gracias por ponerse en contacto con el equipo de soporte True Blue de Crestron.
El caso {!Case.CaseNumber} ha sido creado para este problema.

Tal como se habló por teléfono,

Para futuras referencias, ¿podría facilitarnos un nombre o referencia de proyecto?

No dude en contactarnos si tiene más preguntas. Muchas gracias.`,
          },
        ],
      },

      {
        id: "technician-onleave",
        title: "Technician On Leave",
        icon: "mail",
        description: "Use when your assigned technician is out of office",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

Thank you for your update.
as your assigned technician is currently out of office. We can close your case open and continue as soon as the technician is back, or we can transfer this case to another engineer

`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},
Bedankt voor uw update.

Aangezien uw toegewezen technicus momenteel afwezig is, kunnen we uw case sluiten en doorgaan zodra de technicus terug is, of we kunnen deze case overdragen aan een andere engineer.
`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},
Gracias por su actualización.

Dado que su técnico asignado está actualmente fuera de la oficina, podemos cerrar su caso y continuar tan pronto como el técnico regrese, o podemos transferir este caso a otro ingeniero.
`,
          },
        ],
      },
      {
        id: "direct-rma",
        title: "Direct RMA",
        icon: "mail",
        description: "Use this template when directly initiating an RMA",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

We will proceed with getting an RMA created for this device.

Once the RMA has been created this case will be updated with the RMA information as well as an RMA confirmation document sent directly to your email`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

We zullen doorgaan met het aanmaken van een RMA voor dit apparaat.

Zodra de RMA is aangemaakt, wordt deze case bijgewerkt met de RMA-informatie en ontvangt u een RMA-bevestigingsdocument rechtstreeks in uw e-mail.`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

procederemos a crear un RMA para este dispositivo.

Una vez que se haya creado el RMA, esta caso se actualizará con la información del RMA y se le enviará un documento de confirmación del RMA directamente a su correo electrónico.`,
          },
        ],
      },
      {
        id: "asking-more-information",
        title: "Asking More Information",
        icon: "mail",
        description: "Use when you need additional details to better investigate the issue",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

Thank you for the provided information, we would like to ask a few more questions to help us investigate this better.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Bedankt voor de verstrekte informatie. We willen graag nog een paar aanvullende vragen stellen om het probleem beter te kunnen onderzoeken.`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

Gracias por la información proporcionada. Nos gustaría hacerle algunas preguntas adicionales para ayudarnos a investigar el problema mejor.`,
          },
        ],
      },
      {
        id: "closing-case",
        title: "Closing Case",
        icon: "mail",
        description: "Use when marking a case as solved",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

Thanks for the update. I will go ahead and mark the case as solved. If you require further assistance please do not hesitate to contact us again. Hope you have a great rest of your day!

As your questions have been answered, I will go ahead and mark the case as solved. If you require further assistance please do not hesitate to contact us again. Hope you have a great day!`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Bedankt voor de update. Ik zal de case als opgelost markeren. Mocht u verdere hulp nodig hebben, aarzel dan niet om ons opnieuw te contacteren. Ik wens u een fijne rest van de dag!

Aangezien uw vragen beantwoord zijn, zal ik de case als opgelost markeren. Mocht u verdere hulp nodig hebben, aarzel dan niet om ons opnieuw te contacteren. Fijne dag!`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

Gracias por la actualización. Procederé a marcar el caso como resuelto. Si necesita más asistencia, no dude en contactarnos de nuevo. ¡Que tenga un excelente resto del día!

Como sus preguntas han sido respondidas, procederé a marcar el caso como resuelto. Si necesita más asistencia, no dude en contactarnos de nuevo. ¡Que tenga un buen día!`,
          },
        ],
      },
      {
        id: "remote-session",
        title: "Remote Troubleshooting Session",
        icon: "mail",
        description: "Use when proposing a remote session to diagnose the issue",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

To help us better diagnose the issue, we would like to schedule a remote troubleshooting session with you. Could you let us know your availability so we can arrange a suitable time?

Note: for the remote session we will use TeamViewer.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Om het probleem beter te kunnen diagnosticeren, willen we graag een remote troubleshooting sessie met u inplannen. Kunt u ons uw beschikbaarheid laten weten, zodat we een geschikt tijdstip kunnen afspreken?

Opmerking: voor de remote sessie maken we gebruik van TeamViewer.`,
          },
          {
            language: "Español",
            content: `Estimado {!Contact.FirstName},

Para ayudarnos a diagnosticar mejor el problema, nos gustaría programar una sesión de diagnóstico remoto con usted. ¿Podría indicarnos su disponibilidad para que podamos encontrar un momento adecuado?

Nota: para la sesión remota utilizaremos TeamViewer.`,
          },
        ],
      },
      {
        id: "approving-rma",
        title: "Approving RMA",
        icon: "mail",
        description: "Use after receiving the customer's device info to confirm RMA will be created",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

We will proceed with getting an RMA created for this device.

Once the RMA has been created this case will be updated with the RMA information as well as an RMA confirmation document sent directly to your email.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

We zullen een RMA aanmaken voor dit apparaat.

Zodra de RMA is aangemaakt, wordt deze case bijgewerkt met de RMA-informatie en ontvangt u een RMA-bevestigingsdocument rechtstreeks op uw e-mailadres.`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

Procederemos a crear una RMA para este dispositivo.

Una vez que la RMA haya sido creada, este caso se actualizará con la información de la RMA y se enviará un documento de confirmación de la RMA directamente a su correo electrónico.`,
          },
        ],
      },
      {
        id: "no-fault-found",
        title: "No Fault Found",
        icon: "mail",
        description: "Use when the returned unit could not reproduce the reported issue",
        templates: [
          {
            language: "English",
            content: `Hello {!Contact.FirstName},

The unit with reference RMA ###### / SN ###### has been tested at our technician's lab but unfortunately we have not been able to duplicate the reported issue.
In order to identify the issue and repair accordingly, please answer the below questions:

If you have additional information pertaining to this RMA, feel free to reply directly to this email to have this information included.
Alternatively, please send us your approval to return the unit in its original state. Should you have any other query, please do not hesitate to contact us.

Thank you.`,
          },
          {
            language: "Nederlands",
            content: `Hallo {!Contact.FirstName},

Het toestel met referentie RMA ###### / SN ###### is getest in ons technisch labo, maar helaas hebben we het gemelde probleem niet kunnen reproduceren.
Om het probleem te identificeren en dienovereenkomstig te repareren, gelieve de onderstaande vragen te beantwoorden:

Als u aanvullende informatie heeft met betrekking tot deze RMA, kunt u rechtstreeks op deze e-mail antwoorden om deze informatie toe te voegen.
U kunt ook uw goedkeuring geven om het toestel in zijn originele staat terug te sturen. Twijfel zeker niet om ons te contacteren indien u verdere vragen heeft.

Alvast bedankt.`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

La unidad con referencia RMA ###### / SN ###### ha sido probada en nuestro laboratorio técnico, pero lamentablemente no hemos podido reproducir el problema reportado.
Para poder identificar el problema y repararlo en consecuencia, por favor responda las siguientes preguntas:

Si tiene información adicional relacionada con esta RMA, no dude en responder directamente a este correo electrónico para incluirla.
Alternativamente, envíenos su aprobación para devolver la unidad en su estado original. Si tiene alguna otra consulta, no dude en contactarnos.

Gracias.`,
          },
        ],
      },
      {
        id: "uploader-link",
        title: "Uploader Link",
        icon: "mail",
        description: "Share the Crestron uploader credentials for file submission",
        templates: [
          {
            language: "English",
            content: `Please upload the file(s) using the method below. Make sure to provide the download link to the uploaded file(s) through the ticket.

Link: https://uploader.crestron.com/index.php
Username: uploader
Password: C2874&374nu!`,
          },
          {
            language: "Nederlands",
            content: `Gelieve het/de bestand(en) te uploaden via de onderstaande methode. Zorg ervoor dat u de downloadlink van het/de geüploade bestand(en) via het ticket doorgeeft.

Link: https://uploader.crestron.com/index.php
Gebruikersnaam: uploader
Wachtwoord: C2874&374nu!`,
          },
          {
            language: "Español",
            content: `Por favor, suba el/los archivo(s) utilizando el método indicado a continuación. Asegúrese de proporcionar el enlace de descarga del/los archivo(s) a través del ticket.

Enlace: https://uploader.crestron.com/index.php
Usuario: uploader
Contraseña: C2874&374nu!`,
          },
        ],
      },
      {
        id: "info-gathering-tool",
        title: "Crestron Info Gathering Tool",
        icon: "mail",
        description: "Instructions for running the ATSG diagnostic tool and uploading logs",
        templates: [
          {
            language: "English",
            content: `Crestron Information Gathering Tool

https://community.crestron.com/s/article/ATSG

Instructions:

1. Run the tool.
2. Enter the IP address of the unit.
3. Leave credentials at default*
4. Select the appropriate device type from the Command List.
5. Tick PLOGS checkbox to ensure persistent logs are gathered if supported by the device.
6. Hit Start (accept the Windows Firewall message if one appears).
7. From the top menu click Uploader.
8. Check the tickbox to agree to the Terms of Service.
9. Click Send to Uploader.
10. Copy & Paste the uploader link and send to Crestron Technical Support.

*These are the same connection details required to connect using Crestron Toolbox and often the same credentials are used for the device's web interface where applicable. Default username is crestron, password is blank, connection type SSH. If this has been changed, enter username and password as appropriate.`,
          },
          {
            language: "Nederlands",
            content: `Crestron Information Gathering Tool

https://community.crestron.com/s/article/ATSG

Instructies:

1. Start de tool.
2. Vul het IP-adres van het apparaat in.
3. Laat de inloggegevens op standaard staan*
4. Selecteer het juiste apparaattype uit de Command List.
5. Vink het vakje PLOGS aan om persistente logs te verzamelen indien ondersteund door het apparaat.
6. Klik op Start (accepteer het Windows Firewall-bericht als dat verschijnt).
7. Klik in het bovenste menu op Uploader.
8. Vink het vakje aan om akkoord te gaan met de Gebruiksvoorwaarden.
9. Klik op Send to Uploader.
10. Kopieer en plak de uploaderlink en stuur deze naar Crestron Technical Support.

*Dit zijn dezelfde verbindingsgegevens als voor Crestron Toolbox. Standaard gebruikersnaam: crestron, wachtwoord: leeg, verbindingstype: SSH. Als dit gewijzigd werd, vul dan de aangepaste gegevens in.`,
          },
          {
            language: "Español",
            content: `Crestron Information Gathering Tool

https://community.crestron.com/s/article/ATSG

Instrucciones:

1. Ejecute la herramienta.
2. Introduzca la dirección IP de la unidad.
3. Deje las credenciales por defecto*
4. Seleccione el tipo de dispositivo adecuado de la lista de comandos.
5. Marque la casilla PLOGS para recopilar registros persistentes si el dispositivo lo admite.
6. Haga clic en Inicio (acepte el mensaje del Firewall de Windows si aparece).
7. En el menú superior, haga clic en Uploader.
8. Marque la casilla para aceptar los Términos del Servicio.
9. Haga clic en Send to Uploader.
10. Copie y pegue el enlace del uploader y envíelo al soporte técnico de Crestron.

*Estos son los mismos datos de conexión de Crestron Toolbox. Usuario predeterminado: crestron, contraseña: en blanco, tipo de conexión: SSH. Si se ha modificado, introduzca las credenciales correspondientes.`,
          },
        ],
      },
      {
        id: "issue-description-request",
        title: "Issue & Troubleshooting Summary",
        icon: "mail",
        description: "Ask the customer to describe their problem and steps already attempted",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

To help us investigate your case as efficiently as possible, could you please provide us with the following:

1. A detailed description of the issue you are experiencing — what happens, when it happens, and how frequently.
2. The exact error message or behavior observed (screenshots are welcome).
3. The troubleshooting steps you have already attempted and the result of each.

Any additional context, such as recent system changes, firmware updates, or network modifications, would also be very helpful.

Thank you for your cooperation.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Om uw case zo efficiënt mogelijk te kunnen onderzoeken, zou u ons het volgende kunnen bezorgen:

1. Een gedetailleerde beschrijving van het probleem dat u ondervindt — wat er gebeurt, wanneer het optreedt en hoe vaak.
2. De exacte foutmelding of het waargenomen gedrag (screenshots zijn welkom).
3. De probleemoplossende stappen die u al heeft ondernomen en het resultaat van elk.

Elke aanvullende context, zoals recente systeemwijzigingen, firmware-updates of netwerkaanpassingen, is ook erg welkom.

Bedankt voor uw medewerking.`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

Para ayudarnos a investigar su caso de la manera más eficiente posible, ¿podría facilitarnos lo siguiente?

1. Una descripción detallada del problema que experimenta: qué ocurre, cuándo ocurre y con qué frecuencia.
2. El mensaje de error exacto o el comportamiento observado (se aceptan capturas de pantalla).
3. Los pasos de resolución de problemas que ya ha intentado y el resultado de cada uno.

Cualquier contexto adicional, como cambios recientes en el sistema, actualizaciones de firmware o modificaciones de red, también sería de gran ayuda.

Gracias por su colaboración.`,
          },
        ],
      },
    ],
  },

  "follow-up-cases": {
    id: "follow-up-cases",
    name: "Follow Up Cases",
    subtitle: "Follow-up templates for open support cases",
    initials: "FU",
    color: "#7c3aed",
    sections: [
      {
        id: "first-follow-up",
        title: "First Follow Up",
        icon: "followup",
        description: "Use this after the first reminder",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

I just wanted to follow up and check if everything is still
working correctly. Do you need help with anything else?
If you have any questions or need further assistance, please
feel free to reach out. I'll be happy to help.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Ik wilde even opvolgen en controleren of alles nog steeds correct
werkt. Heeft u nog hulp nodig met iets? Als u vragen heeft of
verdere ondersteuning nodig heeft, neem dan gerust contact op.
Ik help u graag.`,
          },
          {
            language: "Español",
            content: `Buenas {!Contact.FirstName},

Solo quería hacer un seguimiento y confirmar si todo sigue
funcionando correctamente. ¿Necesita ayuda con algo más?

Si tiene alguna pregunta o necesita más asistencia, no dude en
contactarnos. Con gusto le ayudaré.`,
          },
        ],
      },
      {
        id: "second-follow-up",
        title: "Second Follow Up",
        icon: "followup",
        description: "Use this when the first follow-up is still unanswered",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

This is our second attempt to follow up on your case regarding
the {!Case.Subject}.
Could you kindly confirm if you still require any further
assistance?
We'd appreciate an update on the status of this case.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Dit is ons tweede follow-up bericht over uw case met betrekking
tot {!Case.Subject}.
Kunt u bevestigen of u nog verdere ondersteuning nodig heeft?
We zouden een update over de status van deze case op prijs stellen.`,
          },
          {
            language: "Español",
            content: `Buenas {!Contact.FirstName},

¿Podría confirmar amablemente si aún necesita asistencia adicional?
Agradeceríamos una actualización sobre el estado de este caso.`,
          },
        ],
      },
      {
        id: "third-follow-up",
        title: "Third Follow Up / Case Closure",
        icon: "followup",
        description: "Use as final notice before closing the case",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

As we have not received a response to our previous follow-ups,
we will be proceeding to close case {!Case.CaseNumber} in
2 business days.

If you still require assistance, please reply to this email and
we will be happy to continue supporting you.

Thank you for contacting Crestron True Blue Support.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Aangezien we geen reactie hebben ontvangen, zullen we case
{!Case.CaseNumber} binnen 2 werkdagen sluiten.

Als u nog hulp nodig heeft, aarzel dan niet om op deze e-mail
te reageren.

Bedankt voor het contacteren van Crestron True Blue Support.`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

Como no hemos recibido respuesta, procederemos a cerrar el caso
{!Case.CaseNumber} en 2 días hábiles.

Si aún necesita asistencia, no dude en responder a este correo.

Gracias por contactar con Crestron True Blue Support.`,
          },
        ],
      },
    ],
  },

  "associate-account-steps": {
    id: "associate-account-steps",
    name: "Associate-account",
    subtitle:
      "Follow-up templates for how to associate an account for a client",
    initials: "FU",
    color: "#7c3aed",
    sections: [
      {
        id: "associate-account",
        title: "Associate Account",
        icon: "followup",
        description: "Use this after the first reminder",
        templates: [
          {
            language: "English",
            content: `	
We noticed that currently your email address ##### is not associated with a valid account number on our website.To gain access to support and RMA resources identification is required.
	 
Please register the email address and connect your customer number, this will only have to be done once.

Instructions to set up the account and have your customer number approved by your company admin can be found here:
https://community.crestron.com/s/article/id-1000579`,
          },
          {
            language: "Nederlands",
            content: `
We hebben gemerkt dat uw e-mailadres ##### momenteel niet gekoppeld is aan een geldig accountnummer op onze website.Om toegang te krijgen tot support- en RMA-resources is identificatie vereist.

Gelieve het e-mailadres te registreren en uw klantnummer te koppelen; dit hoeft slechts één keer te gebeuren.
Instructies om een account aan te maken en uw klantnummer door uw bedrijfsbeheerder te laten goedkeuren, vindt u hier:
https://community.crestron.com/s/article/id-1000579
            `,
          },
          {
            language: "Español",
            content: `
Hemos notado que actualmente su dirección de correo electrónico ##### no está asociada con un número de cuenta válido en nuestro sitio web.Para obtener acceso a soporte y recursos de RMA, se requiere identificación.

Por favor, registre la dirección de correo electrónico y conecte su número de cliente; esto solo tendrá que hacerse una vez.
Las instrucciones para configurar la cuenta y hacer que su número de cliente sea aprobado por el administrador de su empresa se pueden encontrar aquí:
https://community.crestron.com/s/article/id-1000579
            `,
          },
        ],
      },
    ],
  },
};
