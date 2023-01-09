export const cardModule = {
  makeCardInDOM(card){
    console.log(card);
    // Template
    const templateCardElm = document.querySelector('#templateCard');
    // Clone template
    const cloneCardElm = document.importNode(templateCardElm.content, true);

    // List Content
    // J'ajoute l'id de la liste
    const cardElm = cloneCardElm.querySelector('[data-card-id]');
    const cardId = card.id;
    cardElm.dataset.cardId = cardId;

    // Title
    const titleElm = cloneCardElm.querySelector('.card_title');
    titleElm.textContent = card.title;

    // Compagny Name
    const compagnyNameElm = cloneCardElm.querySelector('.card_compagny-name');
    compagnyNameElm.textContent = card.compagny_name;

    // Compagny Type
    const compagnyTypeElm = cloneCardElm.querySelector('.card_compagny-type');
    let cardType;
    switch (card.type_compagny.name) {
    case 'esn':
      cardType = 'ESN';
      break;
    case 'tpe':
      cardType = 'TPE';
      break;
    case 'pme':
      cardType = 'PME';
      break;
    case 'ge':
      cardType = 'Grande Entreprise';
      break;
    case 'startup':
      cardType = 'Startup';
      break;
    default:
      cardType = '';
      break;
    }
    compagnyTypeElm.classList.add(`${card.type_compagny.name}`);
    const compagnyTypeSpanElm = compagnyTypeElm.querySelector('span');
    compagnyTypeSpanElm.textContent = cardType;

    // Status
    const cardStatusElm = cloneCardElm.querySelector('.card_status');
    let cardStatus;
    switch (card.status.name) {
    case 'inprogress':
      cardStatus = 'En cours';
      cardStatusElm.classList.add('inprogress');
      break;
    case 'won':
      cardStatus = 'Gagné';
      cardStatusElm.classList.add('won');
      break;
    case 'refuse':
      cardStatus = 'Refusé';
      cardStatusElm.classList.add('refuse');
      break;
    default:
      cardStatus = '';
      break;
    }
    const cardStatusElmSpan = cardStatusElm.querySelector('span');
    cardStatusElmSpan.textContent = cardStatus;

    // Type candidature
    const candidacyElm = cloneCardElm.querySelector('.card_candidacy');
    let cardCandidacy;
    switch (card.candidacy.name) {
    case 'offer':
      cardCandidacy = 'Offre d\'emploi';
      candidacyElm.classList.add('inprogress');
      break;
    case 'spontaneous':
      cardCandidacy = 'Spontané';
      candidacyElm.classList.add('won');
      break;
    case 'network':
      cardCandidacy = 'Réseau';
      candidacyElm.classList.add('refuse');
      break;
    case 'other':
      cardCandidacy = 'Autre';
      candidacyElm.classList.add('other');
      break;
    default:
      cardCandidacy = '';
      break;
    }
    candidacyElm.textContent = cardCandidacy;

    // Compagny adresse
    const compagnyAdressElm = cloneCardElm.querySelector('.card_compagny-address');
    compagnyAdressElm.textContent = card.compagny_address;

    // Contact
    const contactNameElm = cloneCardElm.querySelector('.card_contact-name');
    contactNameElm.textContent = card.contact_name;
    const contactFirstNameElm = cloneCardElm.querySelector('.card_contact-firstname');
    contactFirstNameElm.textContent = card.contact_firstname;
    const contactEmailElm = cloneCardElm.querySelector('.card_contact-email');
    contactEmailElm.textContent = card.contact_email;
    const contactPhoneElm = cloneCardElm.querySelector('.card_contact-phone');
    contactPhoneElm.textContent = card.contact_phone;

    // Entretiens
    // Template
    const templateCardInterviewElm = document.querySelector('#templateCardInterview');
    // Clone template
    const cloneCardInterviewElm = document.importNode(templateCardInterviewElm.content, true);

    // Interview Content
    // Date
    // const interviewDateElm = cloneCardInterviewElm.querySelector('.card_interview-date');


    // Je récupère le container des listes
    const cardContainerElm = document.querySelector(`[data-list-id="${card.list_id}"] .list_cards`);
    // Je rajoute ma liste dans le DOM
    cardContainerElm.appendChild(cloneCardElm);
  }

}
