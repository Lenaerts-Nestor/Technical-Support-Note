import type { Resource } from "../types";

// ============================================================
// ADD NEW RESOURCES HERE — do NOT touch UI components.
// Each entry must conform exactly to the Resource interface.
// ============================================================

export const RESOURCES: Record<string, Resource> = {
  "case-routing": {
    id: "case-routing",
    name: "Case Routing",
    subtitle: "Quick reference for common case queues and contacts",
    initials: "CR",
    color: "#475569",
    sections: [
      {
        id: "case-routing-reference",
        title: "Case Routing",
        icon: "mail",
        description: "Use this as a simple routing guide",
        tables: [
          {
            title: "Case Queues",
            rows: [
              { label: "New cases for South Africa (ZA)", value: "South Africa Tech Support Case Queue" },
              { label: "New cases for Sweden (not from Special)", value: "Sweden Tech Support Case Queue" },
              { label: "RMA creation", value: "EMEA CS Post Sales Queue" },
              { label: "XIO Cloud, Scheduling, Fusion", value: "EMEA SaaS Queue" },
              { label: "System design (Sales Support)", value: "EMEA Sales Support Case Queue" },
              { label: "Training questions", value: "CTI Training Case Queue" },
              { label: "Security questions (only after conformation of N+1)", value: "Security Request Case Queue" },
              { label: "US cases", value: "US AE CBQ Case Queue" },
              { label: "Intelligent Video (IV) cases", value: "EMEA IV Pro Services" },
              { label: "Flex cases", value: "EMEA Flex Support Case Queue" },
              { label: "License questions", value: "Licensing & Subscription Case Queue" },
            ],
          },
          {
            title: "Contacts",
            rows: [
              { label: "Crestron Account questions", value: "CeurClientrelations@crestron.com" },
              { label: "Questions about orders and shipment", value: "CEUROrders@crestron.com" },
              { label: "Website problems", value: "Webmaster@crestron.com" },
              { label: "Issues with Documentation", value: "techdoc@crestron.com" },
              { label: "Emails from Bpost for payment", value: "Ceurlogistics@crestron.com" },
              { label: "Questions regarding Safety and Prevention", value: "ceurprevention@crestron.com" },
              { label: "Sales escalated cases", value: "Support-Escalation-EMEA@crestron.com" },
            ],
          },
          {
            title: "Problems to Reach Out",
            rows: [
              { label: "Website problems", value: "Reach out to the Crestron Europe Marketing team" },
              { label: "Jurgen Croes", value: "jcroes@crestron.com" },
              { label: "Caterina Janssens", value: "caterina.janssens@crestron.com" },
            ],
          },
        ],
      },
    ],
  },

  "mail-structure": {
    id: "mail-structure",
    name: "Mail Structure and Extra's",
    subtitle: "Email templates and rules for customer communication",
    initials: "MS",
    color: "#0d9488",
    sections: [
      {
        id: "start-email",
        title: "Start Email",
        icon: "mail",
        description: "Use these templates to open a new case",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

Thank you for contacting Crestron's True Blue Support Team!
Case {!Case.CaseNumber} has been created for this issue.

As discussed during our call,

For further reference, could you please provide us with a
Project name or reference.

Should you have any other query, please do not hesitate to
contact us. Thank you.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Bedankt om contact op te nemen met Crestron's True Blue Support Team!
Case {!Case.CaseNumber} werd aangemaakt voor dit probleem.

Zoals besproken aan de telefoon/Zoals telefonisch besproken,

Voor verdere referentie, zou u ons een projectnaam of referentie
kunnen bezorgen?

Twijfel zeker niet om ons te contacteren indien u verdere vragen
heeft. Alvast bedankt.`,
          },
          {
            language: "Español",
            content: `Estimado/a {!Contact.FirstName},

Gracias por ponerse en contacto con el equipo de soporte True
Blue de Crestron.
El caso {!Case.CaseNumber} ha sido creado para este problema.

Tal como se habló por teléfono,

Para futuras referencias, ¿podría facilitarnos un nombre o
referencia de proyecto?

No dude en contactarnos si tiene más preguntas. Muchas gracias.`,
          },
        ],
      },
      {
        id: "account-identification",
        title: "Mail Structure: Account Identification",
        icon: "mail",
        description:
          "Inform the customer to register their email and link a customer number",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

To provide you with the best possible support, we kindly ask you
to register your email address and link your customer number to
our support portal.

This ensures all future cases are tracked under your account.

Please visit: https://support.crestron.com

Should you need assistance, don't hesitate to contact us.`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Om u de best mogelijke ondersteuning te bieden, vragen wij u
vriendelijk uw e-mailadres te registreren en uw klantnummer te
koppelen aan ons supportportaal.

Bezoek: https://support.crestron.com om uw registratie te voltooien.

Aarzel niet om contact op te nemen als u hulp nodig heeft.`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

Para brindarle el mejor soporte posible, le pedimos amablemente
que registre su dirección de correo electrónico y vincule su
número de cliente a nuestro portal de soporte.

Por favor visite: https://support.crestron.com

No dude en contactarnos si necesita ayuda.`,
          },
        ],
      },
    ],
  },

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
        id: "pending-info",
        title: "Asking for More Information",
        icon: "mail",
        description: "Use when you need more info before proceeding",
        templates: [
          {
            language: "English",
            content: `Hi {!Contact.FirstName},

Thank you for the provided information. Before we proceed with an RMA, we would like to ask the following question, as it will help us investigate the issue more thoroughly.

Thank you for the information provided. We would like to ask a few questions as this will help us investigate this faster and we can avoid a NPF [no problem found] thus to reduce cost on your side.

Before we proceed with an RMA could you clarify the following questions so that we can avoid any misunderstanding :

`,
          },
          {
            language: "Nederlands",
            content: `Beste {!Contact.FirstName},

Dank u wel voor de verstrekte informatie. Voordat we overgaan tot een RMA, willen we graag de volgende vraag stellen, omdat dit ons zal helpen het probleem grondiger te onderzoeken.

Dank u wel voor de verstrekte informatie. We zouden graag een paar vragen willen stellen, omdat dit ons helpt dit sneller te onderzoeken en we zo een NPF [no problem found] kunnen voorkomen om de kosten aan uw kant te verlagen.

Voordat we overgaan tot een RMA, zou u de volgende vragen kunnen verduidelijken, zodat we misverstanden kunnen voorkomen?
`,
          },
          {
            language: "Español",
            content: `Hola {!Contact.FirstName},

Gracias por la información proporcionada. Antes de proceder con un RMA, nos gustaría hacer la siguiente pregunta, ya que nos ayudará a investigar el problema más a fondo.

Gracias por la información proporcionada. Nos gustaría hacer algunas preguntas, ya que esto nos ayudará a investigar esto más rápido y podemos evitar un NPF [no problem found] para reducir los costos de su parte.

Antes de proceder con un RMA, ¿podría aclarar las siguientes preguntas para que podamos evitar cualquier malentendido?
`,
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
    subtitle: "Follow-up templates for how to associate an account for a client",
    initials: "FU",
    color: "#7c3aed",
    sections: [
      {
        id: "associate-account",
        title: "associate-account-steps",
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
