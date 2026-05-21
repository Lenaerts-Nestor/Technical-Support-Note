export const RMA_ASKING_SENTENCES: Record<'English' | 'Dutch' | 'Spanish', [string, string]> = {
  English: [
    'In case we proceed with an RMA, would you be able to provide us with the following RMA information:',
    'To proceed with an RMA, could you please provide the following information for the unit:',
  ],
  Dutch: [
    'Mocht het tot een RMA komen, zou u ons de volgende RMA-informatie kunnen bezorgen:',
    'Om een RMA op te starten, kunt u de volgende informatie voor het toestel doorgeven:',
  ],
  Spanish: [
    'En caso de que procedamos con una RMA, ¿podría proporcionarnos la siguiente información de RMA:',
    'Para continuar con una RMA, ¿podría proporcionar la siguiente información para la unidad:',
  ],
}

export const RMA_APPROVING_SENTENCES: Record<'English' | 'Dutch' | 'Spanish', [string, string]> = {
  English: [
    'We will proceed with getting an RMA created for this device.',
    'Once the RMA has been created this case will be updated with the RMA information as well as an RMA confirmation document sent directly to your email.',
  ],
  Dutch: [
    'We zullen een RMA aanmaken voor dit apparaat.',
    'Zodra de RMA is aangemaakt, wordt deze case bijgewerkt met de RMA-informatie en ontvangt u een RMA-bevestigingsdocument rechtstreeks op uw e-mailadres.',
  ],
  Spanish: [
    'Procederemos a crear una RMA para este dispositivo.',
    'Una vez que la RMA haya sido creada, este caso se actualizará con la información de la RMA y se enviará un documento de confirmación de la RMA directamente a su correo electrónico.',
  ],
}

export const RMA_TEMPLATE_BODY = [
  'Serial Number: ',
  'Product name: ',
  'Issue description: ',
  'Project name/reference: ',
  'Delivery/return address confirmation',
  '  Company name: ',
  '  Delivery contact: ',
  '  Address: ',
  '  City: ',
  '  Postal Code: ',
  '  Country: ',
].join('\n')
