

// Données des discussions (vous pouvez les récupérer depuis une API ou un état)
export const chats = [
    { name: 'Moko', message: 'Ouais 😄💰', time: '19:39', unread: 1 },
    { name: 'Tyrrell', message: '😀🧘', time: '03/03/2025' },
    { name: 'M.A ♥', message: 'Bon vou là je dois bosser là devoir demain ...', time: '22:10' },
    { name: 'Dion Inès', message: 'A réagi par ♥ : "Et à toi aussi"', time: '21:27' },
    { name: 'Dion Inès', message: 'A réagi par ♥ : "Et à toi aussi"', time: '21:27' },
    // { name: 'Hala Madrid', message: 'Appel vocal', time: '18:52' },
    // { name: 'Yango Delivery', message: "Votre commande a été livrée Téléchargez l'app...", time: '18:44' },
    // { name: 'Yango Delivery', message: "Votre commande a été livrée Téléchargez l'app...", time: '18:44' },

];

export const extendedChats = [
    ...chats,
    ...Array.from({ length: 50 }).map((_, index) => ({
        name: `TicketD00${chats.length + index + 1}`,
        message: 'Le ticket a été clôturé cela signifie que notre équipe IT a réglé votre panne',
        time: '15/03/2025',
    })),
];


export const extendedChatss = [
  { id:"D0078",name: 'Moko',  creationticket : '15/08/2024',Priorité : 'Resolu',statut : 'Resolu', message: "La technologie évolue rapidement, transformant notre façon de vivre et de travailler. L'intelligence artificielle, la blockchain et la réalité augmentée façonnent les industries de demain. Il est essentiel d'adopter ces changements.", time: '19:39', unread: 1 },
  { id:"D0079",name: 'Tyrrell',  creationticket : '15/06/2024',Priorité : 'faible',statut : 'Resolu', message: "Voyager est une expérience enrichissante qui nous permet de découvrir de nouvelles cultures et de nouveaux horizons. C’est une occasion d’apprendre, de se détendre et d’explorer des lieux inédits.", time: '03/03/2025' },
  { id:"D0060",name: 'M.A ♥',  creationticket : '15/03/2024',Priorité : 'Resolu',statut : 'Resolu', message: "L'éducation est la clé du succès. Elle ouvre des portes et offre des opportunités infinies. Il est essentiel de rester curieux et de s'investir dans l'apprentissage tout au long de la vie.", time: '22:10' },
  { id:"D0098",name: 'Dion Inès',  creationticket : '15/03/2024',Priorité : 'moyen',statut : 'Resolu', message: "Protéger notre planète est crucial pour garantir un avenir durable. En réduisant les déchets, en recyclant et en soutenant les énergies renouvelables, nous pouvons contribuer à préserver l'environnement pour les générations futures.", time: '21:27' },
  { id:"D0978",name: 'yann hallage',  creationticket : '15/01/2024',Priorité : 'Resolu',statut : 'Resolu', message: 'Prendre soin de sa santé mentale est aussi important que sa santé physique. Parler de ses émotions, pratiquer la méditation et avoir des moments de détente peuvent améliorer notre bien-être mental et émotionnel.', time: '21:27' },
];