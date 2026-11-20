// Coordonnées centralisées : à modifier ici uniquement.
export const site = {
    name: "JOJACOM",
    legalName: "JOJACOM SARL",
    url: "https://www.jojacom.online", // adresse réelle : jojacom.online redirige vers www (Vercel)
    email: "contact@jojacom.online",
    phoneDisplay: "+221 75 447 29 75",
    phoneHref: "+221754472975",
    whatsapp: "221771753636",
    whatsappDisplay: "+221 77 175 36 36",
    // Adresse identique à la fiche Google (Google Business Profile)
    address: "Villa n°168, Cité Sipres II",
    district: "Cité Sipres II",
    city: "Dakar",
    postalCode: "12500",
    country: "SN",
    // Horaires identiques à la fiche Google. Jours au format schema.org.
    hours: [
        { days: "Du lundi au jeudi", dayCodes: ["Monday", "Tuesday", "Wednesday", "Thursday"], slots: [["09:00", "13:00"], ["14:00", "18:00"]] },
        { days: "Vendredi", dayCodes: ["Friday"], slots: [["09:00", "14:00"], ["15:00", "18:00"]] },
        { days: "Samedi", dayCodes: ["Saturday"], slots: [["11:00", "16:00"]] },
    ],
    closedDays: "Dimanche",
    rccm: "SN.DKR.2023.B.48056",
    ninea: "010762575",
    /** Lien direct pour laisser un avis sur la fiche Google de JOJACOM */
    googleReview: "https://g.page/r/CZGgM-djeOZDEBM/review",
    social: {
        facebook: "https://www.facebook.com/jojacom",
        instagram: "https://www.instagram.com/jojacom_dig",
        linkedin: "https://www.linkedin.com/in/jojacom-senegal-06a5ab2b1",
    },
};

export const whatsappLink = (message = "Bonjour JOJACOM, je souhaite en savoir plus sur vos services.") =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
