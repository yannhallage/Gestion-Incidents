

// Données des discussions (vous pouvez les récupérer depuis une API ou un état)
export const chats = [
    { name: 'Moko', message: 'Ouais 😄💰', time: '19:39', unread: 1 },
    { name: 'Tyrrell', message: '😀🧘', time: '03/03/2025' },
    { name: 'M.A ♥', message: 'Bon vou là je dois bosser là devoir demain ...', time: '22:10' },
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